/**
 * 配置项
 */

var debug = true;
var jpath = {};
jpath.jquery = typeof(debug) != 'undefined' && debug ? 'lib/jquery/1.11.1/jquery.js' : 'lib/jquery/1.11.1/jquery.min.js';
jpath.pagination = typeof(debug) != 'undefined' && debug ? 'lib/pagination/1.6/jquery.simplePagination.js' : 'lib/pagination/1.6/jquery.simplePagination.js';
jpath.handlebars = typeof(debug) != 'undefined' && debug ? 'lib/handlebars/3.0.3/handlebars-v3.0.3.js' : 'lib/handlebars/3.0.3/handlebars-v3.0.3.js';
jpath.mousewheel = typeof(debug) != 'undefined' && debug ? 'lib/mousewheel/3.1.11/jquery.mousewheel.js' : 'lib/mousewheel/3.1.11/jquery.mousewheel.min.js';
jpath.validate = typeof(debug) != 'undefined' && debug ? 'lib/validation/1.11.1/jquery.validate.js' : 'lib/validation/1.11.1/jquery.validate.min.js';
jpath.kinmaxshow = typeof(debug) != 'undefined' && debug ? 'lib/kinmaxshow/1.1/jquery.kinMaxShow-1.1.src.js' : 'lib/kinmaxshow/1.1/jquery.kinMaxShow-1.1.src.js';
jpath.dialog = typeof(debug) != 'undefined' && debug ? 'lib/artDialog/6.0.4/dialog.js' : 'lib/artDialog/6.0.4/dialog-min.js';
jpath.tabs = typeof(debug) != 'ubdefined' && debug ? 'lib/tabs/1.0/jquery.tabs.js' : 'lib/tabs/1.0/jquery.tabs.js';

seajs.config({

	//别名配置
	alias:{
		'jquery':jpath.jquery,
		'validate':jpath.validate,
		'kinmaxshow':jpath.kinmaxshow,
		'dialog':jpath.dialog,
		'tabs':jpath.tabs
	}

});