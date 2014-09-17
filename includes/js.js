//@author RainLaurent
//@copyright None
//timer can be found at: http://stackoverflow.com/questions/951021/what-do-i-do-if-i-want-a-javascript-version-of-sleep
//
//function sleep(millis, callback) {
//    setTimeout(function()
//            { callback(); }
//    , millis);
//}
//
//function print_wheel_pos(){
//	var val = document.querySelector('body').scrollTop;
//	console.log("the pos of wheel: "+val+" px");
//}
//
//function set_vid_pos2(){
//	var vid = document.querySelector('video');
//	para = "width: 420px; height: 360.5px; position: fixed; left: 820.5px; top: 32px; z-index: 4;";
//	vid.setAttribute("style", para);
//    console.log(cmd + "finished.");
//}
function set_vid_pos(cmd){
	var vid = document.querySelector('video');
	if ( cmd == "set" ) {
		para = "width: 420px; height: 300.5px; position: fixed; left: 860px; top: 32px; z-index: 4;";
	} else {
		para = "style","width: 640px; height: 360px; left: 0px; top: 0px; -webkit-transform: none;";
	}
	vid.setAttribute("style", para);
    console.log(cmd + "finished.");
}


function MouseWheelHandler(event){
	if (event.wheelDelta > 0){
		var val = document.querySelector('body').scrollTop;
		if (val < 400 && state=="set") {
			set_vid_pos("unset");
			state="unset";
		}
		//console.log('up');
		
	} else if (event.wheelDelta < 0){
		var val = document.querySelector('body').scrollTop;
		if (val > 400 && state=="unset") {
			set_vid_pos("set");
			state="set";
		}
		//console.log('down');
	}
}

state="unset";
document.addEventListener('mousewheel', MouseWheelHandler, false); 
console.log('loaded');
//sleep(5000, set_vid_pos2);
// 
//
//for ( i=2000; i < 100000; i+=2000) { 
//    sleep(i, print_wheel_pos);
//
//}
