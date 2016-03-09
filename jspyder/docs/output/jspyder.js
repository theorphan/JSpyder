Ext.data.JsonP.jspyder({"tagname":"class","name":"jspyder","autodetected":{},"files":[{"filename":"jspyder.js","href":"jspyder.html#jspyder"},{"filename":"jspyder.js","href":"jspyder.html#jspyder"}],"members":[{"name":"env","tagname":"property","owner":"jspyder","id":"property-env","meta":{}},{"name":"_bootstrap","tagname":"method","owner":"jspyder","id":"method-_bootstrap","meta":{"private":true}},{"name":"_bootstrapAlg","tagname":"method","owner":"jspyder","id":"method-_bootstrapAlg","meta":{"private":true}},{"name":"_bootstrapDom","tagname":"method","owner":"jspyder","id":"method-_bootstrapDom","meta":{"private":true}},{"name":"_bootstrapEnv","tagname":"method","owner":"jspyder","id":"method-_bootstrapEnv","meta":{"private":true}},{"name":"_bootstrapLib","tagname":"method","owner":"jspyder","id":"method-_bootstrapLib","meta":{"private":true}},{"name":"_bootstrapLog","tagname":"method","owner":"jspyder","id":"method-_bootstrapLog","meta":{"private":true}},{"name":"lib","tagname":"method","owner":"jspyder","id":"method-lib","meta":{}},{"name":"log","tagname":"method","owner":"jspyder","id":"method-log","meta":{"chainable":true}}],"alternateClassNames":[],"aliases":{},"id":"class-jspyder","extends":null,"singleton":null,"private":null,"mixins":[],"requires":[],"uses":[],"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/jspyder.html#jspyder' target='_blank'>jspyder.js</a></div><div class='dependency'><a href='source/jspyder.html#jspyder' target='_blank'>jspyder.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-env' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder'>jspyder</span><br/><a href='source/jspyder.html#jspyder-property-env' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder-property-env' class='name expandable'>env</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>JSpyder environment variables. ...</div><div class='long'><p>JSpyder environment variables. The values in this object are\nimmutable and cannot be changed once JSpyder has been bootstrapped.</p>\n<ul><li><span class='pre'>version</span> : String<div class='sub-desc'><p>A 3-number string for the jspyder version number, represented\n     as \"M.N.P,\" where M is the major version, N is the minor\n     version, and P is the patch version.</p>\n</div></li><li><span class='pre'>versionNo</span> : Number<div class='sub-desc'><p>An integer value representing the version of the jspyder\n     library.  The numbers help to compare version numbers without\n     having to parse the 3-decimal.  For example, differentiating\n     between JSpyder v1.1.0 and JSpyder v1.10.0 would be a multi-\n     step solution.  However, their numerical values (65792 and\n     68096, respectively) are easily differentiable.</p>\n</div></li><li><span class='pre'>browser</span> : Object<div class='sub-desc'><p>A collection of browser information</p>\n<ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the browser being used (e.g. Firefox, IE, Chrome)\n     based on feature testing.</p>\n</div></li><li><span class='pre'>version</span> : Number<div class='sub-desc'><p>The version of the browser being used, based on feature-testing.</p>\n</div></li></ul></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_bootstrap' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder'>jspyder</span><br/><a href='source/jspyder.html#jspyder-method-_bootstrap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder-method-_bootstrap' class='name expandable'>_bootstrap</a>( <span class='pre'>global</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Bootstraps (create/configure) JSpyder engine. ...</div><div class='long'><p>Bootstraps (create/configure) JSpyder engine.  Basic modules are:\n - lib\n - alg\n - data\n - dom</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>global</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_bootstrapAlg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder'>jspyder</span><br/><a href='source/jspyder.html#jspyder-method-_bootstrapAlg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder-method-_bootstrapAlg' class='name expandable'>_bootstrapAlg</a>( <span class='pre'>js</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Bootstrap jspyder's algorithm collection. ...</div><div class='long'><p>Bootstrap jspyder's algorithm collection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>js</span> : Object<div class='sub-desc'><p>Jspyder Object</p>\n</div></li></ul></div></div></div><div id='method-_bootstrapDom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder'>jspyder</span><br/><a href='source/jspyder.html#jspyder-method-_bootstrapDom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder-method-_bootstrapDom' class='name expandable'>_bootstrapDom</a>( <span class='pre'>js</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Bootstraps the jspyder.dom library ...</div><div class='long'><p>Bootstraps the <a href=\"#!/api/jspyder.dom\" rel=\"jspyder.dom\" class=\"docClass\">jspyder.dom</a> library</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>js</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_bootstrapEnv' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder'>jspyder</span><br/><a href='source/jspyder.html#jspyder-method-_bootstrapEnv' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder-method-_bootstrapEnv' class='name expandable'>_bootstrapEnv</a>( <span class='pre'>js</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Bootstrap jspyder's environment variable collection. ...</div><div class='long'><p>Bootstrap jspyder's environment variable collection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>js</span> : Object<div class='sub-desc'><p>Jspyder Object</p>\n</div></li></ul></div></div></div><div id='method-_bootstrapLib' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder'>jspyder</span><br/><a href='source/jspyder.html#jspyder-method-_bootstrapLib' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder-method-_bootstrapLib' class='name expandable'>_bootstrapLib</a>( <span class='pre'>js</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Bootstraps the jspyder lib plugin ...</div><div class='long'><p>Bootstraps the jspyder lib plugin</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>js</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_bootstrapLog' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder'>jspyder</span><br/><a href='source/jspyder.html#jspyder-method-_bootstrapLog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder-method-_bootstrapLog' class='name expandable'>_bootstrapLog</a>( <span class='pre'>js</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Bootstrap jspyder to be able to log to the console with jspyder.log ...</div><div class='long'><p>Bootstrap jspyder to be able to log to the console with <a href=\"#!/api/jspyder.log\" rel=\"jspyder.log\" class=\"docClass\">jspyder.log</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>js</span> : Object<div class='sub-desc'><p>Jspyder Object</p>\n</div></li></ul></div></div></div><div id='method-lib' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder'>jspyder</span><br/><a href='source/jspyder.html#jspyder-method-lib' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder-method-lib' class='name expandable'>lib</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the stored functions pushed in by jspyder.lib.register ...</div><div class='long'><p>Retrieves the stored functions pushed in by <a href=\"#!/api/jspyder.lib-method-register\" rel=\"jspyder.lib-method-register\" class=\"docClass\">jspyder.lib.register</a></p>\n</div></div></div><div id='method-log' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder'>jspyder</span><br/><a href='source/jspyder.html#jspyder-method-log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder-method-log' class='name expandable'>log</a>( <span class='pre'>level, text</span> ) : <a href=\"#!/api/jspyder\" rel=\"jspyder\" class=\"docClass\">jspyder</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Logging library for jspyder, to output data to the console. ...</div><div class='long'><p>Logging library for jspyder, to output data to the console.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>level</span> : Number<div class='sub-desc'><p>The error level to use (0: routine, 1: warning, 2: error).</p>\n</div></li><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The text to output to the console.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder\" rel=\"jspyder\" class=\"docClass\">jspyder</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});