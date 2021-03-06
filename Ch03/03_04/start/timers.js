var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

var percentWaited = 0;

console.log("Wait for it");

function writeWaitingPercent(p){
	
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`espera... ${p}%`);
	
}

var interval = setInterval(function(){
	
	currentTime += waitInterval;
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	writeWaitingPercent(percentWaited);
	
}, waitInterval);

setTimeout(function(){
	
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log("\n\n\n done\n\n\n");
	
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);