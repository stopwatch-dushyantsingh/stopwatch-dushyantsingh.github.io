function utcClock() {
     var date = new Date();
     var h = date.getUTCHours();
     var m = date.getUTCMinutes();
     var s = date.getUTCSeconds();
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
               document.getElementById("utcClock").innerHTML = myClock;
               setTimeout("utcClock()", 1000);
}
utcClock();
function parisClock() {
     var date = new Date();
     var h = date.getUTCHours()+1;
     var m = date.getUTCMinutes();
     if(m>=60){
          m=m-60;
          h=h+1;
     }
     if (h <=0) {
          h=h+12;
     }
     var s = date.getUTCSeconds();
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
               document.getElementById("parisClock").innerHTML = myClock;
               setTimeout("parisClock()", 1000);
}
parisClock();
function newyorkClock() {
     var date = new Date();
     var h = date.getUTCHours()-5;
     var m = date.getUTCMinutes();
     if(m>=60){
          m=m-60;
          h=h+1;
     }
          if (h <=0) {
          h=h+12;
     }
     var s = date.getUTCSeconds();
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
               document.getElementById("newyorkClock").innerHTML = myClock;
               setTimeout("newyorkClock()", 1000);
}
newyorkClock();
function indiaClock() {
     var date = new Date();
     var h = date.getUTCHours()+5;
     var m = date.getUTCMinutes()+30;
     if(m>=60){
          m=m-60;
          h=h+1;
     }
          if (h <=0) {
          h=h+12;
     }
     var s = date.getUTCSeconds();
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
               document.getElementById("indiaClock").innerHTML = myClock;
               setTimeout("indiaClock()", 1000);
}
indiaClock();
function tokyoClock() {
     var date = new Date();
     var h = date.getUTCHours()+9;
     var m = date.getUTCMinutes();
     if(m>=60){
          m=m-60;
          h=h+1;
     }
          if (h <=0) {
          h=h+12;
     }
     var s = date.getUTCSeconds();
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
               document.getElementById("tokyoClock").innerHTML = myClock;
               setTimeout("tokyoClock()", 1000);
}
tokyoClock();
function hongkongClock() {
     var date = new Date();
     var h = date.getUTCHours()+8;
     var m = date.getUTCMinutes();
     if(m>=60){
          m=m-60;
          h=h+1;
     }
          if (h <=0) {
          h=h+12;
     }
     var s = date.getUTCSeconds();
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
               document.getElementById("hongkongClock").innerHTML = myClock;
               setTimeout("hongkongClock()", 1000);
}
hongkongClock();
function losangelesClock() {
     var date = new Date();
     var h = date.getUTCHours()-8;
     var m = date.getUTCMinutes();
     if(m>=60){
          m=m-60;
          h=h+1;
     }
          if (h <=0) {
          h=h+12;
     }
     var s = date.getUTCSeconds();
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
               document.getElementById("losangelesClock").innerHTML = myClock;
               setTimeout("losangelesClock()", 1000);
}
losangelesClock();
function moscowClock() {
     var date = new Date();
     var h = date.getUTCHours()+3;
     var m = date.getUTCMinutes();
     if(m>=60){
          m=m-60;
          h=h+1;
     }
          if (h <=0) {
          h=h+12;
     }
     var s = date.getUTCSeconds();
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
               document.getElementById("moscowClock").innerHTML = myClock;
               setTimeout("moscowClock()", 1000);
}
moscowClock();
function sydneyClock() {
     var date = new Date();
     var h = date.getUTCHours()+10;
     var m = date.getUTCMinutes();
     if(m>=60){
          m=m-60;
          h=h+1;
     }
          if (h <=0) {
          h=h+12;
     }
     var s = date.getUTCSeconds();
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
               document.getElementById("sydneyClock").innerHTML = myClock;
               setTimeout("sydneyClock()", 1000);
}
sydneyClock();
function beijingClock() {
     var date = new Date();
     var h = date.getUTCHours()+8;
     var m = date.getUTCMinutes();
     if(m>=60){
          m=m-60;
          h=h+1;
     }
          if (h <=0) {
          h=h+12;
     }
     var s = date.getUTCSeconds();
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
               document.getElementById("beijingClock").innerHTML = myClock;
               setTimeout("beijingClock()", 1000);
}
beijingClock();
function seoulClock() {
     var date = new Date();
     var h = date.getUTCHours()+9;
     var m = date.getUTCMinutes();
     if(m>=60){
          m=m-60;
          h=h+1;
     }
          if (h <=0) {
          h=h+12;
     }
     var s = date.getUTCSeconds();
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
               document.getElementById("seoulClock").innerHTML = myClock;
               setTimeout("seoulClock()", 1000);
}
seoulClock();
