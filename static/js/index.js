//https://www.eclipse.org/paho/clients/js/


function suma() {
	
	message = new Paho.MQTT.Message("suma"+" "+"5000"  +" "+ "3000");
	message.destinationName = "menalyluzuriaga@gmail.com/test1";
    client.send(message);
		
				//document.getElementById("estado").innerHTML="led encedido";
		//document.getElementById("estado").innerHTML=document.getElementById("fname").value
        
		
		
}
function resta() {
	
	message = new Paho.MQTT.Message("resta"+" "+"5000"  +" "+ "3000");
	message.destinationName = "menalyluzuriaga@gmail.com/test1";
    client.send(message);
		
				//document.getElementById("estado").innerHTML="led encedido";
		//document.getElementById("estado").innerHTML=document.getElementById("fname").value
        
		
		
}
/*function LED1_Off(){	
	
	console.log("led off");
        message = new Paho.MQTT.Message("LED1_OFF")
        message.destinationName = "menalyluzuriaga@gmail.com/test1";
        client.send(message);
		document.getElementById("estado").innerHTML="led apagado";
}*/



// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "menalyluzuriaga@gmail.com",
    password: "1600482853mena",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("menalyluzuriaga@gmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "menalyluzuriaga@gmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("Nuevo mensaje:"+message.payloadString);
    document.getElementById("respuesta").innerHTML=message.payloadString;
	//document.getElementById("estado").innerHTML=message.payloadString.split("=")[2];
  }

