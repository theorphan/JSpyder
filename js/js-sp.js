/******************************************************************************
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Steven Jimenez
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *****************************************************************************/
 
js.extend.fn("sp", function () {
    /**************************************************************************
     * @class jspyder.sp
     * @extends jspyder
     * 
     * # Managed Objects:
     * ## JSpyder SharePoint List Reference (jspyder.sp.list)
     * ## JSpyder SharePoint Query Reference (jspyder.sp.query)
     *************************************************************************/
    function sp() {};
    
    /**************************************************************************
     * @class jspyder.sp.list
     * @extends jspyder.sp
     * 
     * @param {Object} config
     *      A configuration object for the initial setup of the SP list 
     *      reference. Though a valid object will return if this parameter
     *      is not included, it will not point anywhere and trying to use it
     *      may throw errors.
     * 
     * @param {String} [config.url]
     *      The site collection the sharepoint list belongs to.
     * 
     * @param {String} [config.name]
     *      The name of the sharepoint list to connect to.
     * 
     * @param {Function} [config.success]
     *      The default function to fire when a [sp.list.pull]{#sp.list.pull}
     *      command completes successfully.
     * 
     * @param {Function} [config.failure]
     *      The default function to fire when a [sp.list.pull]{#sp.list.pull}
     *      command fails.
     * 
     * @param {String} [config.caml]
     *      The CAML configuration to use when initializing the sharepoint
     *      list reference.
     * 
     * @return {Object} 
     *      A JSpyder SharePoint List Reference Object ([sp.list]{#sp.list})
     *************************************************************************/
    sp.list =  function spList(config, fn) {
         
        if (!window.SP) {
            js.log.warn(
                "Ensure that MicrosoftAjax.js, sp.runtime.js, and sp.js " +
                "have been loaded before using JSpyder SharePoint Interface");
        }

        var list = Object.create(sp.list.fn);

        if (config) {
            if (config.url) {
                list._url = config.url;
            }
            if (config.name) {
                list._name = config.name;
            }
            if (typeof config.success === "function") {
                list._success = config.success;
            }
            if (typeof config.failure === "function") {
                list._failure = config.failure;
            }
            if (config.caml) {
                list._caml = config.caml;
            }
        }
        js.alg.use(list, fn);

        return list;
    }

    var __rowLimit = 10000;
    var __caml = "<View><Query><Where><Geq><FieldRef Name='ID' />"
        + "<Value Type='Number'>1</Value></Geq></Where></Query>"
        + "<RowLimit>" + __rowLimit + "</RowLimit></View>"

    sp.list.fn = {
        // private:
        _url: "",
        _name: "",
        _success: function () { },
        _failure: function () { },
        _caml: __caml,
        _columns: {},
        _rows: [],
        
        /**********************************************************************
         * Adds a single column to the SP List proxy
         * 
         * @param {String} name
         *      The way this column will be referred to in javascript
         * 
         * @param {Object} data
         *      The template overrides for the sharepoint list column 
         *      reference. The fields included will overwrite all default
         *      values except "name" or "list", as they are read-only 
         *      attributes pointing back to the defined name and list object, 
         *      respectively.   
         * 
         *          @param {String} [data.internal] 
         *              Name of the sharepoint field, to SharePoint.  If the
         *              list reference is expected to fill a value with data
         *              from the server, then this field must accurately reflect
         *              the actual name.
         * 
         *          @param {String} [data.text]     
         *              Name of the sharepoint field, to the user.  This will be
         *              the human-readable name, which can include spaces and
         *              punctuation.
         * 
         *          @param {String} [data.type]     
         *              SharePoint field data type, in all lower-case string.
         * 
         *          @param {String} [data.default]  
         *              Default value, if none can be found on a query.
         * 
         *          @param {Function} [data.macro]  
         *              Defines a custom value lookup.  This will override (and
         *              not consider) any values found if a data.internal parameter
         *              is provided.
         *********************************************************************/
        addColumn: function(name, data) {
            var column = Object.create(sp.column.fn, {
                list: { value: this },
                name: { value: name }
            });
            
            js.alg.mergeObj(column, data);
            
            this._columns[name] = column;
            
            return this;
        },
        /**********************************************************************
         * Adds a group of columns to the SP List proxy, via this.addColumn,
         * where keys correspond to the [name] parameter, and values correspond
         * to the [data] parameter.
         * 
         * @param {Object} dataObj
         *********************************************************************/
        addColumns: function(dataObj) {
            js.alg.each(dataObj, function(data, name, dataObj, list) {
                list.addColumn(name, data);
            }, this);
            return this;
        },
        
        /**********************************************************************
         * Gets the column template by name, as identified in js.sp.list.addColumn
         * 
         * @param {String} name
         *      The name of the field to retrieve the template for. Note that
         *      any changes to the template will change the template for all
         *      of the derived values within the table.
         *********************************************************************/
        getColumn: function(name) {
            return (this._columns[name]
                ? this._columns[name] 
                : Object.create(sp.column.fn, {
                    list: { value: this },
                    name: { value: name }}));
        },
        
        /**********************************************************************
         * Gets the row number from the cache of stored values.  Note that this
         * number does not necessarily correspond to the row ID within 
         * SharePoint.
         * 
         * @param {Number} n
         *      The row number to retrieve from the cache.
         *********************************************************************/
        getRow: function(n) {
            return this._rows[n]; 
        },
        
        /**********************************************************************
         * Retrieves the number of rows within the cache.
         * 
         * @return {Number}
         *********************************************************************/
        getRowCount: function(n) {
            return this._rows.length;
        },
        
        /**********************************************************************
         * Executes an asynchronous read-query from the server to pull in 
         * fresh data. It is important to note, when using this function, that
         * any subsequent or chained functions will likely execute before this
         * query has returned.
         * 
         * @param {Function} [success]
         *      The function to execute after data has been loaded into the
         *      jsSPList object, iif the query was successful.  This function
         *      will be executed instead of the success function identified
         *      in the constructor.
         * 
         * @param {Function} [failure]
         *      The function to execute if the data query failed, accepting
         *      [sender, args] as the parameters.  This function will be 
         *      executed instead of the failure function identified in the
         *      constructor.
         *********************************************************************/
        pull: function (success, failure) {
            var ctx = new window.SP.ClientContext(this._url),
                list = ctx.get_web().getByTitle(this._name),
                caml = new window.SP.CamlQuery(),
                successFn = (typeof success === "function"
                    ? success
                    : this._success),
                failureFn = (typeof failure === "function"
                    ? failure
                    : this._failure);

            caml.set_viewXml(this.caml);
            var listItems = list.getItems(caml);

            ctx.load(listItems);
            ctx.executeQueryAsync(
                js.alg.bindFn(this, __successParse, [ctx, listItems, successFn]),
                js.alg.bindFn(this, __failureParse, [ctx, listItems, failureFn]));
            return this;
        },
        
        /**********************************************************************
         * Creates a new query object. This function is synchronous, and 
         * executes data currently residing in the cache.
         * 
         * @param {Array} criteria
         *      A list of criteria to run against the list reference's cache.
         *      Expected as an array of query objects.  See jspyder.sp.query.filter
         * 
         * @return {Object}
         *      [Query Reference]{#sp.query}
         *********************************************************************/
        query: function (criteria) {
            var query = __makeQuery(this).reset();
            return (criteria instanceof Array
                ? query.filters(criteria)
                : query.filter(criteria));
        },

        /**********************************************************************
         * Clears all cached data within the list reference.  This is function
         * is automatically called when pulling data from the SharePoint List,
         * and should not be necessary for most implementations.
         *********************************************************************/
        clearData: function () {
            this._rows = [];
            js.alg.each(this._columns, function (colData) {
                colData.rowIDs = {}; //< stores RowID:[Value,Value,Value]
                colData.values = {}; //< stores Value:[RowID,RowID,RowID] 
            });
            return this;
        },
        
        /**********************************************************************
         * Pushes changed data to the server.
         * 
         * !TODO: Implement the logic for this:
         *  1: Loop through all rows
         *  2: Loop through all columns
         *  3: Find relevant changes
         *  4: Stash them in ClientContext
         *  5: Push
         * 
         * Alternatively, I could cache the changed values when I mark them as
         * "dirty". 
         *********************************************************************/
        push: function() {}
    };

    /**************************************************************************
     * @private
     * Called after a successful query; loads data into the list reference.
     * 
     * @param {Object} listItems
     *      SharePoint List Items collectionbeing processed
     * 
     * @param {Function} successFn
     *      Function to run after SP List has completed
     * 
     * @param {Object} sender
     *      Pushed in by SharePoint
     * 
     * @param {Object} args
     *      Pushed in by SharePoint  
     *************************************************************************/
    function __successParse(listItems, successFn, sender, args) {
        var itemEnumerator = listItems.getEnumerator(),
            jsEach = js.alg.each,
            columns = this._columns,
            currentItem = null,
            data = null,
            row = null;

        this.clearColumnData();
        
        // move through each item
        while (itemEnumerator.moveNext()) {
            row = {};
            currentItem = itemEnumerator.get_current();
            // grab each of our stored items
            data = { item: currentItem, id: currentItem.get_id(), _row: row };
            jsEach(columns, __pushRow, data);
            this._rows.push(row);
        }

        successFn(sender, args);
    }
    
    /**************************************************************************
     * @private
     * Called in a loop to push data into the SP List Reference. This function 
     * is defined outside of the loop for efficiency.
     * 
     * @param {Object} colData
     *      Individual column template (based on sp.column.fn)
     * 
     * @param {String} colName
     *      Column's internal reference ID, defined in constructor
     * 
     * @param {Object} columns
     *      Collection of js column references
     * 
     * @param {Object} data
     *      Collection of relevant loop data, pushed in my js.alg.each.
     *      Includes data.item (sharepoint row reference), data.id (value of
     *      associated row ID in sharepoint), and data._row (reference to
     *      list reference's row getting pushed into the stack).  
     *************************************************************************/
    function __pushRow(colData, colName, columns, data) {
        var rowID = data.id,
            row = data._row,
            dirty = false,
            cell = Object.create(colData, {
                rowID: { value: rowID },
                dirty: { get: function() { return dirty; } },
                value: {
                    get: function () {
                        return (typeof this.macro === "function"
                            ? this.macro()
                            : colValue);
                    },
                    set: function (v) {
                        if (!colData.internal) {
                            colValue = v;
                            dirty = true;
                        }
                    }
                }
            }),
            colValue = colData.default;

        if (colData.internal) {
            colValue = data.item.get_value(colData.internal);
            
            // eventually, this will need to change to support multi-value fields.
            //colData.rowIDs[rowID] = colValue;

            //if (!colData.values[colValue]) {
            //    colData.values[colValue] = [];
            //}
            //colData.values[colValue].push(rowID);
        }
        
        row[colData.name] = cell;

        return;
    }

    /**************************************************************************
     * @private
     * Called after a failed query; loads data into the list reference.
     * 
     * @param {Object} listItems
     *      SharePoint List Items collectionbeing processed
     * 
     * @param {Function} failureFn
     *      Function to run after SP List has completed
     * 
     * @param {Object} sender
     *      Pushed in by SharePoint
     * 
     * @param {Object} args
     *      Pushed in by SharePoint  
     *************************************************************************/
    function __failureParse(listItems, failureFn, sender, args) {
        failureFn(sender, args);
    }


    /**************************************************************************
     * @class jspyder.sp.query
     * @extends jspyder.sp
     * 
     * This class should not generally be directly created in scripts. Instead,
     * it should be either created by a call to jspyder.sp.list.query() or a 
     * call to jspyder.sp.query.clone in order to ensure that it was properly 
     * configured at creation and before use.
     *************************************************************************/
    sp.query = function(list) {
        return Object.create(sp.query.fn, { _list: { value: list } });
    };
    
    sp.query.fn = {
        /** @private Overwritten at creation. */
        _list: null,
        /** @private Overwritten at creation and reset. */
        _rows: null,
        
        /**********************************************************************
         * Resets the query object to include all of the available rows in the
         * associated list's cache.
         *********************************************************************/
        reset: function() {
            this._rows = this._list._rows.slice(0);
            return this;
        },
        
        /**********************************************************************
         * Applies a single filter against the data stored in the cache.
         *
         * @param {Object} filterData
         *      A filter definition, with the following property set:
         *       - column: Required.  Name of the column being filtered.
         *       - geq:  "Field value >= this.geq"       (3 >= 3)
         *       - leq:  "Field value <= this.leq"       (3 <= 3)
         *       - gt:   "Field value > this.gt"         (3 > 2)
         *       - lt:   "Field value < this.lt"         (3 < 4)
         *       - eq:   "Field value == this.eq"        (3 == "3")
         *       - seq:  "Field value === this.seq"      (3 === 3)
         *       - neq:  "Field value != this.neq"       (3 != 4)
         *       - snq:  "Field value !== this.snq"      (3 !== "3")
         *       - test: "Field value matches this.test" (/^3/.test(3000))
         *********************************************************************/
        filter: function(filterData) {
            js.alg.each(this._rows, __parseRows, [filterData]);
            return this
        },
        
        /**********************************************************************
         * Applies a set of filters against the data stored in the cache. Due
         * to the nature of the filtering algorithm, this is the more efficient
         * of the two methods, as it requires fewer passes to apply multiple
         * filters.  (See: jspyder.sp.query.filter)
         *
         * @param {Array} filterArray
         *      Array of filter collections
         *********************************************************************/
        filters: function(filterArray) {
            js.alg.each(this._rows, __parseRows, filterArray);
            return this;
        },
        
        /**********************************************************************
         * Retrieves all stored data, and runs the function defined by [fn]
         * with the context [this] and the parameter pointing to a copy of the
         * data set.  Note that any changes to the array will mark the row for
         * change in the owning list.  
         *
         * @param {Function} fn
         *      Function to execute, with the context of the jspyder.sp.query
         *      object, and the first argument being the stored row references
         *      as an array.
         *********************************************************************/
        data: function(fn) {
            js.alg.use(this, fn, [this._rows]);
            return this;
        },
        
        /**********************************************************************
         * Retrieves the sum of all of the stored data, if it is numerical.
         * It not numerical, then makes no change to the default value 
         * provided.
         *
         * @param {Object} columns
         *      Object using column names (See: jspyder.sp.list) as the keys.
         *      Values are pushed into the object, and then [fn] is executed,
         *      with the context of the jspyder.sp.query object, and the 
         *      [columns] object as the first argument.
         * 
         * @param {Function} fn
         *      A callback function, using the jspyder.sp.query object as the
         *      context, and the columns object as the first argument.
         *********************************************************************/
        sum: function(columns, fn) {
            this.data(function(rows) {
                js.alg.each(rows, _rows, columns);
                js.alg.use(this, fn, [columns]);
            });
            
            function _rows(row, _, rows, columns) {
                js.alg.each(row, _columns, columns);
            }
            function _columns(value, colName, columns) {
                if(typeof value === "number") {
                    columns[colName] += value;
                }
            }
            
            return this;
        },
        
        /**********************************************************************
         * Creates a copy of the jspyder.sp.query object; pointing to the same
         * jspyder.sp.list object, but with its own context of data copied from
         * the current cache.
         * 
         * @return {Object} jspyder.sp.query object clone.
         *********************************************************************/
        clone: function() {
            var clone = __makeQuery(this._list);
            clone._rows = this._rows.slice(0);
            return clone;
        }
    };

    /**********************************************************************
     * @private
     * Separated from jspyder.sp.query.filter for memory efficiency.
     * 
     * @param {Object} value
     *      Row from this._rows
     * 
     * @param {Number} id
     *      Row index from row
     * 
     * @param {Array} _rows
     *      this._rows
     * 
     * @param {Object} filterData
     *      Collection of filters.  See jspyder.sp.query.filter
     *********************************************************************/
    function __parseRows(row, id, _rows, filterData) {
        if(!row) { // catch null values
            return;
        }
        
        var f, filter, drop, value;
        
        for(f = 0; f < filterData.length; f++) {
            filter = filterData[f];
            // make sure we have a column identified.
            if(!filter.name) { continue; }
            value = row[filter.name].value;
            drop = false;
            switch(filter) {
                case "gt" :  drop = !(value >   filter.gt ); break; 
                case "geq":  drop = !(value >=  filter.geq); break; 
                case "leq":  drop = !(value <=  filter.leq); break; 
                case "lt" :  drop = !(value <   filter.lt ); break;
                case "eq" :  drop = !(value ==  filter.eq ); break;
                case "seq":  drop = !(value === filter.seq); break;
                case "neq":  drop = !(value !=  filter.neq); break;
                case "snq":  drop = !(value !== filter.snq); break;
                case "test": 
                    if(filter.test instanceof RegExp) { //< prevent invalid regexp values from breaking our query
                        drop = !(filter.test === "regex" && filter.test.test(value));
                    }
                    break;
            }
            if(drop) {
                _rows[id] = null;
            }
        }
        
        _rows.sort().splice(_rows.indexOf(null));
        
        return this;
    }
    
    // used in sp list
    sp.column = function() {};
    sp.column.fn = {
        internal: "",
        text: "",
        type: "string",
        default: ""
    };

    return sp;
});

//! js-sp.js