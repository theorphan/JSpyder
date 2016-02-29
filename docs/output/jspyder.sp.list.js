Ext.data.JsonP.jspyder_sp_list({"tagname":"class","name":"jspyder.sp.list","autodetected":{},"files":[{"filename":"js-sp.js","href":"js-sp.html#jspyder-sp-list"}],"extends":"jspyder.sp","params":[{"tagname":"params","type":"Object","name":"config","doc":"<p>A configuration object for the initial setup of the SP list\n     reference. Though a valid object will return if this parameter\n     is not included, it will not point anywhere and trying to use it\n     may throw errors.</p>\n","properties":[{"tagname":"params","type":"String","name":"url","optional":true,"doc":"<p>The site collection the sharepoint list belongs to.</p>\n","html_type":"String"},{"tagname":"params","type":"String","name":"name","optional":true,"doc":"<p>The name of the sharepoint list to connect to.</p>\n","html_type":"String"},{"tagname":"params","type":"Function","name":"success","optional":true,"doc":"<p>The default function to fire when a [sp.list.pull]{#sp.list.pull}\n     command completes successfully.</p>\n","html_type":"Function"},{"tagname":"params","type":"Function","name":"failure","optional":true,"doc":"<p>The default function to fire when a [sp.list.pull]{#sp.list.pull}\n     command fails.</p>\n","html_type":"Function"},{"tagname":"params","type":"String","name":"caml","optional":true,"doc":"<p>The CAML configuration to use when initializing the sharepoint\n     list reference.</p>\n","html_type":"String"}],"html_type":"Object"}],"return":{"type":"Object","name":"return","doc":"<p>A JSpyder SharePoint List Reference Object ([sp.list]{#sp.list})</p>\n\n<hr />\n","properties":null,"html_type":"Object"},"members":[{"name":"__failureParse","tagname":"method","owner":"jspyder.sp.list","id":"method-__failureParse","meta":{"private":true}},{"name":"__failurePush","tagname":"method","owner":"jspyder.sp.list","id":"method-__failurePush","meta":{"private":true}},{"name":"__parseValueType","tagname":"method","owner":"jspyder.sp.list","id":"method-__parseValueType","meta":{}},{"name":"__pushRow","tagname":"method","owner":"jspyder.sp.list","id":"method-__pushRow","meta":{"private":true}},{"name":"__successParse","tagname":"method","owner":"jspyder.sp.list","id":"method-__successParse","meta":{"private":true}},{"name":"__successPush","tagname":"method","owner":"jspyder.sp.list","id":"method-__successPush","meta":{"private":true}},{"name":"addColumn","tagname":"method","owner":"jspyder.sp.list","id":"method-addColumn","meta":{"chainable":true}},{"name":"addColumns","tagname":"method","owner":"jspyder.sp.list","id":"method-addColumns","meta":{"chainable":true}},{"name":"clearData","tagname":"method","owner":"jspyder.sp.list","id":"method-clearData","meta":{"chainable":true}},{"name":"eachDirtyRow","tagname":"method","owner":"jspyder.sp.list","id":"method-eachDirtyRow","meta":{"chainable":true}},{"name":"getColumn","tagname":"method","owner":"jspyder.sp.list","id":"method-getColumn","meta":{}},{"name":"getRow","tagname":"method","owner":"jspyder.sp.list","id":"method-getRow","meta":{}},{"name":"getRowById","tagname":"method","owner":"jspyder.sp.list","id":"method-getRowById","meta":{}},{"name":"getRowCount","tagname":"method","owner":"jspyder.sp.list","id":"method-getRowCount","meta":{}},{"name":"pull","tagname":"method","owner":"jspyder.sp.list","id":"method-pull","meta":{"chainable":true}},{"name":"push","tagname":"method","owner":"jspyder.sp.list","id":"method-push","meta":{"chainable":true}},{"name":"query","tagname":"method","owner":"jspyder.sp.list","id":"method-query","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jspyder.sp.list","short_doc":" ...","component":false,"superclasses":["jspyder.sp"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/jspyder.sp' rel='jspyder.sp' class='docClass'>jspyder.sp</a><div class='subclass '><strong>jspyder.sp.list</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/js-sp.html#jspyder-sp-list' target='_blank'>js-sp.js</a></div></pre><div class='doc-contents'><hr />\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>A configuration object for the initial setup of the SP list\n     reference. Though a valid object will return if this parameter\n     is not included, it will not point anywhere and trying to use it\n     may throw errors.</p>\n<ul><li><span class='pre'>url</span> : String (optional)<div class='sub-desc'><p>The site collection the sharepoint list belongs to.</p>\n</div></li><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>The name of the sharepoint list to connect to.</p>\n</div></li><li><span class='pre'>success</span> : Function (optional)<div class='sub-desc'><p>The default function to fire when a [sp.list.pull]{#sp.list.pull}\n     command completes successfully.</p>\n</div></li><li><span class='pre'>failure</span> : Function (optional)<div class='sub-desc'><p>The default function to fire when a [sp.list.pull]{#sp.list.pull}\n     command fails.</p>\n</div></li><li><span class='pre'>caml</span> : String (optional)<div class='sub-desc'><p>The CAML configuration to use when initializing the sharepoint\n     list reference.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A JSpyder SharePoint List Reference Object ([sp.list]{#sp.list})</p>\n\n<hr />\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-__failureParse' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-__failureParse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-__failureParse' class='name expandable'>__failureParse</a>( <span class='pre'>listItems, failureFn, sender, args</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called after a failed query; loads data into the list reference. ...</div><div class='long'><hr />\n\n<p>Called after a failed query; loads data into the list reference.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listItems</span> : Object<div class='sub-desc'><p>SharePoint List Items collectionbeing processed</p>\n</div></li><li><span class='pre'>failureFn</span> : Function<div class='sub-desc'><p>Function to run after SP List has completed</p>\n</div></li><li><span class='pre'>sender</span> : Object<div class='sub-desc'><p>Pushed in by SharePoint</p>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Pushed in by SharePoint</p>\n\n<hr />\n</div></li></ul></div></div></div><div id='method-__failurePush' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-__failurePush' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-__failurePush' class='name expandable'>__failurePush</a>( <span class='pre'>listItems, failureFn, sender, args</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called after an unsuccessful data push ...</div><div class='long'><p>Called after an unsuccessful data push</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listItems</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>failureFn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>sender</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-__parseValueType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-__parseValueType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-__parseValueType' class='name expandable'>__parseValueType</a>( <span class='pre'>colData, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Parses the colData variable for the value type, and then ensures that\nvalue meets those requirements. ...</div><div class='long'><p>Parses the colData variable for the value type, and then ensures that\nvalue meets those requirements.  If it does not meet the requirements,\nthen it is either converted to the correct data type, or it is set to\nthe default value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>colData</span> : Object<div class='sub-desc'><p>Column template (based on sp.column.fn)</p>\n</div></li><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to test and/or convert.</p>\n</div></li></ul></div></div></div><div id='method-__pushRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-__pushRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-__pushRow' class='name expandable'>__pushRow</a>( <span class='pre'>colData, colName, columns, data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called in a loop to push data into the SP List Reference. ...</div><div class='long'><hr />\n\n<p>Called in a loop to push data into the SP List Reference. This function\nis defined outside of the loop for efficiency.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>colData</span> : Object<div class='sub-desc'><p>Individual column template (based on sp.column.fn)</p>\n</div></li><li><span class='pre'>colName</span> : String<div class='sub-desc'><p>Column's internal reference ID, defined in constructor</p>\n</div></li><li><span class='pre'>columns</span> : Object<div class='sub-desc'><p>Collection of js column references</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Collection of relevant loop data, pushed in my js.alg.each.\n     Includes data.item (sharepoint row reference), data.id (value of\n     associated row ID in sharepoint), and data._row (reference to\n     list reference's row getting pushed into the stack).</p>\n\n<hr />\n</div></li></ul></div></div></div><div id='method-__successParse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-__successParse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-__successParse' class='name expandable'>__successParse</a>( <span class='pre'>listItems, successFn, sender, args</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called after a successful query; loads data into the list reference. ...</div><div class='long'><hr />\n\n<p>Called after a successful query; loads data into the list reference.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listItems</span> : Object<div class='sub-desc'><p>SharePoint List Items collectionbeing processed</p>\n</div></li><li><span class='pre'>successFn</span> : Function<div class='sub-desc'><p>Function to run after SP List has completed</p>\n</div></li><li><span class='pre'>sender</span> : Object<div class='sub-desc'><p>Pushed in by SharePoint</p>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Pushed in by SharePoint</p>\n\n<hr />\n</div></li></ul></div></div></div><div id='method-__successPush' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-__successPush' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-__successPush' class='name expandable'>__successPush</a>( <span class='pre'>listItems, successFn, sender, args</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called after a successful data push ...</div><div class='long'><p>Called after a successful data push</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listItems</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>successFn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>sender</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-addColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-addColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-addColumn' class='name expandable'>addColumn</a>( <span class='pre'>name, data</span> ) : <a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Adds a single column to the SP List proxy ...</div><div class='long'><hr />\n\n<p>Adds a single column to the SP List proxy</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The way this column will be referred to in javascript</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The template overrides for the sharepoint list column\n     reference. The fields included will overwrite all default\n     values except \"name\" or \"list\", as they are read-only\n     attributes pointing back to the defined name and list object,\n     respectively.</p>\n\n<pre><code>     @param {String} [data.internal] \n         Name of the sharepoint field, to SharePoint.  If the\n         list reference is expected to fill a value with data\n         from the server, then this field must accurately reflect\n         the actual name.\n\n     @param {String} [data.text]     \n         Name of the sharepoint field, to the user.  This will be\n         the human-readable name, which can include spaces and\n         punctuation.\n\n     @param {String} [data.type]     \n         SharePoint field data type, in all lower-case string.\n\n     @param {String} [data.default]  \n         Default value, if none can be found on a query.\n\n     @param {Function} [data.macro]  \n         Defines a custom value lookup.  This will override (and\n         not consider) any values found if a data.internal parameter\n         is provided.\n</code></pre>\n\n<hr />\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-addColumns' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-addColumns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-addColumns' class='name expandable'>addColumns</a>( <span class='pre'>dataObj</span> ) : <a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Adds a group of columns to the SP List proxy, via this.addColumn,\nwhere keys correspond to the [name] parameter, and ...</div><div class='long'><hr />\n\n<p>Adds a group of columns to the SP List proxy, via this.addColumn,\nwhere keys correspond to the [name] parameter, and values correspond\nto the [data] parameter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dataObj</span> : Object<div class='sub-desc'><hr />\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-clearData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-clearData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-clearData' class='name expandable'>clearData</a>( <span class='pre'></span> ) : <a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Clears all cached data within the list reference. ...</div><div class='long'><hr />\n\n<p>Clears all cached data within the list reference.  This is function\nis automatically called when pulling data from the SharePoint List,\nand should not be necessary for most implementations.</p>\n\n<hr />\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-eachDirtyRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-eachDirtyRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-eachDirtyRow' class='name expandable'>eachDirtyRow</a>( <span class='pre'>fn, data</span> ) : <a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Gets the dirty rows ...</div><div class='long'><p>Gets the dirty rows</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-getColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-getColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-getColumn' class='name expandable'>getColumn</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the column template by name, as identified in js.sp.list.addColumn ...</div><div class='long'><hr />\n\n<p>Gets the column template by name, as identified in js.sp.list.addColumn</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the field to retrieve the template for. Note that\n     any changes to the template will change the template for all\n     of the derived values within the table.</p>\n\n<hr />\n</div></li></ul></div></div></div><div id='method-getRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-getRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-getRow' class='name expandable'>getRow</a>( <span class='pre'>n</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the row number from the cache of stored values. ...</div><div class='long'><hr />\n\n<p>Gets the row number from the cache of stored values.  Note that this\nnumber does not necessarily correspond to the row ID within\nSharePoint.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>n</span> : Number<div class='sub-desc'><p>The row number to retrieve from the cache.</p>\n\n<hr />\n</div></li></ul></div></div></div><div id='method-getRowById' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-getRowById' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-getRowById' class='name expandable'>getRowById</a>( <span class='pre'>id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getRowCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-getRowCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-getRowCount' class='name expandable'>getRowCount</a>( <span class='pre'>n</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the number of rows within the cache. ...</div><div class='long'><hr />\n\n<p>Retrieves the number of rows within the cache.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>n</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><hr />\n</div></li></ul></div></div></div><div id='method-pull' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-pull' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-pull' class='name expandable'>pull</a>( <span class='pre'>[success], [failure]</span> ) : <a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Executes an asynchronous read-query from the server to pull in\nfresh data. ...</div><div class='long'><hr />\n\n<p>Executes an asynchronous read-query from the server to pull in\nfresh data. It is important to note, when using this function, that\nany subsequent or chained functions will likely execute before this\nquery has returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>success</span> : Function (optional)<div class='sub-desc'><p>The function to execute after data has been loaded into the\n     jsSPList object, iif the query was successful.  This function\n     will be executed instead of the success function identified\n     in the constructor.</p>\n</div></li><li><span class='pre'>failure</span> : Function (optional)<div class='sub-desc'><p>The function to execute if the data query failed, accepting\n     [sender, args] as the parameters.  This function will be\n     executed instead of the failure function identified in the\n     constructor.</p>\n\n<hr />\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-push' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-push' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-push' class='name expandable'>push</a>( <span class='pre'>success, failure</span> ) : <a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Pushes changed data to the server. ...</div><div class='long'><hr />\n\n<p>Pushes changed data to the server.</p>\n\n<p>!TODO: Implement the logic for this:\n 1: Loop through all rows\n 2: Loop through all columns\n 3: Find relevant changes\n 4: Stash them in ClientContext\n 5: Push</p>\n\n<p>Alternatively, I could cache the changed values when I mark them as\n\"dirty\".</p>\n\n<hr />\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>success</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>failure</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-query' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.list'>jspyder.sp.list</span><br/><a href='source/js-sp.html#jspyder-sp-list-method-query' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.list-method-query' class='name expandable'>query</a>( <span class='pre'>criteria</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new query object. ...</div><div class='long'><hr />\n\n<p>Creates a new query object. This function is synchronous, and\nexecutes data currently residing in the cache.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>criteria</span> : Array<div class='sub-desc'><p>A list of criteria to run against the list reference's cache.\n     Expected as an array of query objects.  See <a href=\"#!/api/jspyder.sp.query-method-filter\" rel=\"jspyder.sp.query-method-filter\" class=\"docClass\">jspyder.sp.query.filter</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>[Query Reference]{#sp.query}</p>\n\n<hr />\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});