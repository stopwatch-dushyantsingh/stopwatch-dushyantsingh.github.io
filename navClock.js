function time() {
    var d = new Date();
     var h = d.getHours();
     var m = d.getMinutes();
     var s = d.getSeconds();
     var pm = (h > 12) ? "PM" : "AM";
     if (h < 10) {
           h = "0" + h;
      }
          if (m < 10) {
               m = "0" + m;
          }
          if (s < 10) {
               s = "0" + s;
          }
     if(h>12){
          h=h-12
     }
          var myClock =h + ":" + m + ":" + s + " " + pm;
          document.getElementById("clock").innerHTML = myClock;
          setTimeout("time()", 1000);
}
time();
