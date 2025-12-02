front.send("hello from front");

front.on("hello from back", function(msg){
	console.log(msg);
	$('#msg').html(msg);
});

// Listen for automatic 20-sec messages
front.on("task-response", function(msg){	
	alert(msg.time);
	//document.getElementById("msg").innerHTML += `<br>⏳ ${msg.time}`;
	//document.getElementById("msg").innerHTML += `<br>⏳ ${msg.time}`;
	//document.getElementById("msg").innerHTML += `<br>⏳ ${msg.filePth}`;
	
	document.getElementById("msg").innerHTML += `
        <br> ⏳ <b>${msg.time}</b> <br>
        📄 JSON: ${JSON.stringify(msg.data)}
    `;
});


