


'use strict';

const UTILS = {};


/* string remove whiteSpace  */
UTILS.trimHTML = str => str.replace(/>\s+</g,'><').trim();


/* bytes to readable string (file size) */
UTILS.formatBytes = function(bytes) {
  if(bytes < 1024) return bytes + " B";
  else if(bytes < 1048576) return(bytes / 1024).toFixed(1) + " KB";
  else if(bytes < 1073741824) return(bytes / 1048576).toFixed(1) + " MB";
  else return(bytes / 1073741824).toFixed(1) + " GB";
};


/* second to HH:MM:SS (time) */
UTILS.toHHMMSS2 = function(x){
  var h=~~(x/3600),m=~~(x/60)%60,s=~~(x)%60;
  return (h?(h<10?"0":"")+h+":":"")+((m<10)&&h?"0":"")+m+":"+(s<10?"0":"")+s
};

/* date to DD Mon YYYY (date seconds, from Date.now() ) */
UTILS.formatDate = function(x){
  var d = new Date(x);
  var m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return d.getDate() + ' ' + m[d.getMonth()] + ' ' + d.getFullYear();
};



UTILS.timeAgo = function(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    if(Math.round(seconds/(60*60*24*365.25)) >= 2) return Math.round(seconds/(60*60*24*365.25)) + " years ago";
    else if(Math.round(seconds/(60*60*24*365.25)) >= 1) return "1 year ago";
    else if(Math.round(seconds/(60*60*24*30.4)) >= 2) return Math.round(seconds/(60*60*24*30.4)) + " months ago";
    else if(Math.round(seconds/(60*60*24*30.4)) >= 1) return "1 month ago";
    else if(Math.round(seconds/(60*60*24*7)) >= 2) return Math.round(seconds/(60*60*24*7)) + " weeks ago";
    else if(Math.round(seconds/(60*60*24*7)) >= 1) return "1 week ago";
    else if(Math.round(seconds/(60*60*24)) >= 2) return Math.round(seconds/(60*60*24)) + " days ago";
    else if(Math.round(seconds/(60*60*24)) >= 1) return "1 day ago";
    else if(Math.round(seconds/(60*60)) >= 2) return Math.round(seconds/(60*60)) + " hours ago";
    else if(Math.round(seconds/(60*60)) >= 1) return "1 hour ago";
    else if(Math.round(seconds/60) >= 2) return Math.round(seconds/60) + " minutes ago";
    else if(Math.round(seconds/60) >= 1) return "1 minute ago";
    else if(seconds >= 2)return seconds + " seconds ago";
    else return seconds + "1 second ago";
}



/* localStorage shorthand */
function getLocalStorage(name){ return JSON.parse(localStorage[name]||'[]') }
function setLocalStorage(name,obj){ localStorage[name] = JSON.stringify(obj) }
function xetLocalStorage(name,key,val){
  var c = getLocalStorage(name);
  c[key] = val;
  setLocalStorage(name,c);
}