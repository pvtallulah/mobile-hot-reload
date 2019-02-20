var inAppBrowserRef;
var statusMessage;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {

}

function load (e) {
  var url = 'http://' + document.getElementById('config').value;
  showHelp(url)
}

function showHelp(url) {
  var target = "_self";
  var options = "location=no,hidden=yes";
  inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
  inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
  inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
  inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
}

function loadStartCallBack() {
  alert("Loading app please wait...");
}

function loadStopCallBack() {
  if (inAppBrowserRef != undefined) {
    inAppBrowserRef.show();
  }
}

function loadErrorCallBack(params) {
  alert('loadErrorCallBack')
  alert(params)
}

function executeScriptCallBack(params) {

  if (params[0] == null) alert("Sorry we couldn't open that page. Message from the server is : '"+ params.message + "'")
}

function messageCallback(params){
  alert("message received: "+params.data.my_message);
}