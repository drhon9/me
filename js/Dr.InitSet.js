
/**
 * 2019 drhong web page
 */

var Dr ={};
;(function (window, Constructor, undefined) {

	// Constructor
	var DrWeb = function(){
	    that = this;
	};

	DrWeb.prototype = {
		init : function() {

            that.htmlLoad();
    
        },
        htmlLoad: function() {
            $(document).ready(function () {
                $("div[data-includeHTML]").each(function () {                
                    $(this).load($(this).attr("data-includeHTML")); 
                })
                setTimeout(()=>{
                    Dr.Api.mainSet();
                },1000)
          
            });
        },
        navEvent: function() {
            //Dr.Api.mainSet();
        },




        preset :{
				// load_json :function(){
				// 	var jsondata = DrAJAX.LoadJsonData('./ajax/init.json'); //'./ajax/osc.xml'
				// 	console.log(jsondata.editor);
				// }
		}

	}; 


    Constructor.data = DrWeb;
    DrWeb();
    
})(window, Dr);

var newWeb= new Dr.data() // 객체필요
newWeb.__proto__.init(); //초기 로드해야함
