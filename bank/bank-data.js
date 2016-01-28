// BANK DATA
// deals with getting and setting data in sharepoint

var projectedTravel = {
    table_header: "Projected Travel",
    table_class: "projected travel",
    table_columns: [
        {
            tag: "division",
            text: "Division"
        },
        {
            tag: "fyq1",
            text: "1<sup>st</sup> Quarter",
            class: "currency",
            default: 0
        },
        {
            tag: "fyq2",
            text: "2<sup>nd</sup> Quarter",
            class: "currency",
            default: 0
        },
        {
            tag: "fyq3",
            text: "3<sup>rd</sup> Quarter",
            class: "currency",
            default: 0
        },
        {
            tag: "fyq4",
            text: "4<sup>th</sup> Quarter",
            class: "currency",
            default: 0
        },
        {
            tag: "fyTotal",
            text: "Total",
            class: "currency",
            default: 0
        },
        {
            tag: "fyRemaining",
            text: "Remaining",
            class: "currency",
            default: 0
        }
    ],
    // ["Division", "Travel Budget", "1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter", "Total", "Remaining"],
    table_rows: [
        { division: "J20", fyq1: 2000 },
        { division: "J2X", fyq1: 2100 },
        { division: "J22", fyq1: 2200 },
        { division: "J23", fyq1: 2300 },
        { division: "J25", fyq1: 2500 },
        { division: "J26", fyq1: 2600 },
        { division: "J28", fyq1: 2800 },
        { division: "J29", fyq1: "2,900", fyq1_class: "os-quarter", fyq1_tooltip: "Overspent quarterly value by $2,000" }
    ]
};

var DATA = {
    bank_subnav_constant: [
        { subnav: "collapse", text: "Collapse", icon: "compare-arrows" }
    ],
    bank_subnav_volatile: []
}
js.alg.run(function () {
    var __transactionList = null,
        __allocationList = null;
        
    var BANK_DATA = {
        get initData() {
            var o = {
                bank_navigation: BANK_DATA.navigationLinks,
                bank_subnav_constant: BANK_DATA.constSubnavData,//[[subnav,text,icon]]
                //bank_subnav_volatile: BANK_DATA.getPageSubnav(),//[[subnav,text,icon]]
            };

            return o;
        },
        
        // transaction list singleton
        get transactionList() { 
            if(!__transactionList) { 
                // initialize the list
                __transactionList = js.sp.list(
                    BANK_CONST.SP_LIST.Transactions.config,
                    BANK_CONST.SP_LIST.Transactions.postCreation);
                // build the columns
                __transactionList.addColumns(
                    BANK_CONST.SP_LIST.Transactions.columns);
            }
            return __transactionList;
        },
        
        // allocation list singleton
        get allocationList() {
            if(!__allocationList) {
                // initialize the list
                __allocationList = js.sp.list(
                    BANK_CONST.SP_LIST.Allocations.config,
                    BANK_CONST.SP_LIST.Allocations.postCreation);
                // build the columns
                __allocationList.addColumns(
                    BANK_CONST.SP_LIST.Allocations.columns);
            }
            return __allocationList;
        },
        
        // queries the database to get the transaction data 
        refreshTransactions: function(success, failure) {
            BANK_DATA.transactionList.pull(success, failure);
        },
        
        // quires the database to get the allocation data
        refreshAllocations: function(success, failure) {
            BANK_DATA.allocationList.pull(success, failure);
        },
    
        // nav bar across the top of the page
        get navigationLinks() { return BANK_CONST.MAIN_NAVIGATION; },
        get constSubnavData() { return BANK_CONST.CONSTANT_SUBNAV; },
        get subnavData() { return BANK_CONST.SUB_NAVIGATION; },
    
        // page information
        get uiPages() { return BANK_CONST.PAGES; },
        getPageData(page) { return BANK_DATA.uiPages[page] || BANK_DATA.uiPages[BANK_CONST.MAIN_NAVIGATION_DEFAULT]; },
        getPageSubnav(page) { return BANK_DATA.getPageData(page).subnav || []; },
    
        // division information
        get divisions() { return BANK_CONST.DIVISIONS; },
        getDivisionData: function (data) {
            var ret = [];
            js.alg.each(BANK_DATA.divisions, function (division) {
                ret.push(division[data]);
            });
            return ret;
        },
        get divisionNames() { return BANK_DATA.getDivisionData("name"); },
        get divisionIds() { return BANK_DATA.getDivisionData("id"); },
    
        // overview tables
        get overviewTables() { return BANK_CONST.OVERVIEW_TABLES; },
        getOverviewTable: function (tableId) {
            var ret = null;
            js.alg.each(BANK_DATA.overviewTables, function (table) {
                if (table["id"] === tableId) {
                    ret = table;
                }
            });

            return ret;
        },
        // gets a list of table ids for tables associated with the given
        // subnav
        getSubnavTableIds: function (subnav) {
            var ret = [];
            js.alg.each(BANK_DATA.overviewTables, function (table) {
                if (table["subnav"] === subnav) {
                    ret.push(table["id"]);
                }
            });
            return ret;
        },
    
        // build overview table template data
        buildOverviewTableTemplateData: function (tableId) {
            var template = Object.create(this._overviewTableTemplate),
                data = BANK_DATA.getOverviewTable(tableId);
                
            // first level data filters

            if (data) {
                if (data.title) { template.table_header = data.title; }
                if (data.class) { template.table_class = data.class; }
                // second level data filters
                if (data.columns) {
                    // load all of the columns into the page:
                    template.table_columns = [];
                    js.alg.each(data.columns, function(column) {
                        template.pushColumn(
                            BANK_DATA.parseColumnReference(column));
                    });
                }
                // third level filters and calculations should be done here.
                if (data.rows) { template.table_rows = data.rows; }
            }

            return template;
        },
        _overviewTableTemplate: {
            table_header: "",
            table_class: "",
            table_columns: [],
            table_rows: [],

            pushColumn: function (d) {
                var t = Object.create(this._columnTemplate);
                js.alg.each(d, function (v, k) {
                    t[k] = v;
                });
                this.table_columns.push(t);
                return this;
            },
            pushRow: function (d) {
                var t = Object.create(this._columnTemplate);
                js.alg.each(d, function (v, k) {
                    t[k] = v;
                });
                this.table_rows.push(t);
                return this;
            },
            _columnTemplate: { tag: "", text: "", class: "", default: "" },
            _rowTemplate: {}
        },
        
        parseColumnReference: function(colRef) {
            colRef = colRef || {};
            
            var list = (colRef.list === "allocation"
                ? BANK_DATA.allocationList
                : BANK_DATA.transactionList);
            return list._columns[colRef.column];
        },
    };
    
    window.BANK_DATA = BANK_DATA;
    return null;
});