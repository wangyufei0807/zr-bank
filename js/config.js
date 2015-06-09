/**
 * 配置项
 */

var debug = true;
var jpath = {};
jpath.jquery = typeof(debug) != 'undefined' && debug ? 'lib/jquery/1.11.1/jquery.js' : 'lib/jquery/1.11.1/jquery.min.js';
jpath.pagination = typeof(debug) != 'undefined' && debug ? 'lib/pagination/1.6/jquery.simplePagination.js' : 'lib/pagination/1.6/jquery.simplePagination.js';
jpath.handlebars = typeof(debug) != 'undefined' && debug ? 'lib/handlebars/3.0.3/handlebars-v3.0.3.js' : 'lib/handlebars/3.0.3/handlebars-v3.0.3.js';
jpath.mousewheel = typeof(debug) != 'undefined' && debug ? 'lib/mousewheel/3.1.11/jquery.mousewheel.js' : 'lib/mousewheel/3.1.11/jquery.mousewheel.min.js';
jpath.validate =typeof(debug) != 'undefined' && debug ? 'lib/validation/1.11.1/jquery.validate.js' : 'lib/validation/1.11.1/jquery.validate.min.js';

seajs.config({

	//别名配置
	alias:{
		'jquery':jpath.jquery,
		'validate':jpath.validate
	}

});