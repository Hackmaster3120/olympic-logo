var canvasVar= document.getElementById("myCanvas");
var canvasCtx= canvasVar.getContext("2d");

canvasCtx.beginPath();
canvasCtx.strokeStyle="blue";
canvasCtx.lineWidth= 1;
canvasCtx.arc(10,10,10,0,2*Math.PI);
canvasCtx.stroke();

canvasCtx.beginPath();
canvasCtx.strokeStyle="black";
canvasCtx.lineWidth= 1;
canvasCtx.arc(35,10,10,0,2*Math.PI);
canvasCtx.stroke();

canvasCtx.beginPath();
canvasCtx.strokeStyle="red";
canvasCtx.lineWidth= 1;
canvasCtx.arc(60,10,10,0,2*Math.PI);
canvasCtx.stroke();

canvasCtx.beginPath();
canvasCtx.strokeStyle="yellow";
canvasCtx.lineWidth= 1;
canvasCtx.arc(22.5,20,10,0,2*Math.PI);
canvasCtx.stroke();

canvasCtx.beginPath();
canvasCtx.strokeStyle="green";
canvasCtx.lineWidth= 1;
canvasCtx.arc(48,20,10,0,2*Math.PI);
canvasCtx.stroke();
