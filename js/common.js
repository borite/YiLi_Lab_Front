// JavaScript Document

var start_time = new Date();

function timer(tid) {
	var timeNow = new Date();

	var time_distance = timeNow-start_time;
         
	
	//天
	var int_day = Math.floor(time_distance / 86400000)
	time_distance -= int_day * 86400000;

	// 时           
	var int_hour = Math.floor(time_distance / 3600000)
	time_distance -= int_hour * 3600000;

	// 分               
	var int_minute = Math.floor(time_distance / 60000)
	time_distance -= int_minute * 60000;
	
	// 秒               
	var int_second = Math.floor(time_distance / 1000)

	// 时分秒为单数时、前面加零             
	if (int_day < 10) {                   
		int_day = "0" + int_day;                
	}
              
	if (int_hour < 10) {                    
		int_hour = "0" + int_hour;	                
	}
              
	if (int_minute < 10) {                    
		int_minute = "0" + int_minute;

		                
	}
	                
	if (int_second < 10) {                    
		int_second = "0" + int_second;	                
	}
	
	if(int_hour<=0){
		$("#"+tid).text(int_minute+":"+int_second);
	}else{
		$("#"+tid).text(int_hour+":"+int_minute+":"+int_second);
	}
      
}


//获取URL中指定的参数值
function GetQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
	var context = ""; 
	if (r != null) 
		context = r[2]; 
	reg = null; 
	r = null; 
	return context == null || context == "" || context == "undefined" ? "" : context; 
}
















