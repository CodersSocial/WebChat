var socket = new WebSocket("wss://e9bb1e6wr0.execute-api.ap-south-1.amazonaws.com/v_01");
function createWebSocketConnection() {
  
  socket = new WebSocket("wss://e9bb1e6wr0.execute-api.ap-south-1.amazonaws.com/v_01");

socket.onopen = function(e) {
  alert("[open] Connection established");

};

socket.onmessage = function(event) {

		var input = JSON.parse(event.data);
		if(input.connectionId!=null){
			document.getElementById("connectionId").innerHTML="Connection Id:"+input.connectionId;
			//alert(input.connectionId);
		}
		if(input.connectionId==null & input.message!=null){
		document.getElementById("others").innerHTML = "others : "+input.message;
	}
	
 // alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};
}


function sendMessage(){
	var message = document.getElementById("chatbox").value;
	document.getElementById("me").innerHTML = "me : "+message;
	socket.send("{'action':'sendMessage','message':'"+message+"'}");
}

