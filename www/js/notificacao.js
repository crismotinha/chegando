//pra criar
function schedule(id, title, message, schedule_time) {
	cordova.plugins.notification.local.schedule({
	    id: id,
	    title: titulo,
	    message: mensagem,
	    at: schedule_time,
	    sound: sound,
	    icon: "http://domain.com/icon.png"
	});
};
/*var sound = device.platform == 'Android' ? 'file://sound.mp3' : 'file://beep.caf';*/
var date = new Date();

/*//pra cancelar
cordova.plugins.notification.local.cancel(1, function () {
    // Notification was cancelled
}, scope);*/

function add_reminder()
          {
          	var id = document.getElementById("idevento").innerHTML;
               var arrumarData = function(){ //colocar a data no formato ano/mes/dia
                    var dataemPT = document.getElementById("date").innerHTML;
                    var dataArray = dataemPT.split("/");
                    date1 = dataArray[2] +"/"+ dataArray[1] + "/" + dataArray[0];
               }
               arrumarData();               
               console.log(date1);
          	var time = document.getElementById("time").innerHTML;
          	var title = document.getElementById("title").innerHTML;
          	var message = document.getElementById("message").innerHTML;
          	var schedule_time = new Date((date1 + " " + time).replace(/-/g, "/")).getTime();
          	schedule_time = new Date(schedule_time);
               console.log(id, title, message, schedule_time);
          	
          	cordova.plugins.notification.local.hasPermission(function(granted){
          	  if(granted == true)
          	  {
          	    schedule(id, title, message, schedule_time);
          	  }
          	  else
          	  {
          	    cordova.plugins.notification.local.registerPermission(function(granted) {
          	        if(granted == true)
          	        {
          	          schedule(id, title, message, schedule_time);
          	        }
          	        else
          	        {
          	          navigator.notification.alert("Reminder cannot be added because app doesn't have permission");
          	        }
          	    });
          	  }
          	});
          }