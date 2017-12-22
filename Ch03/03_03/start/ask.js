var questions = [
	"Cual es tu nombre?",
	"Cual es tu hobby?",
	"Cual es tu lenguaje preferido?"
];

var answers = [];

function ask(i) {
	
	process.stdout.write(`\n\n\n\n ${questions[i]}`);
	process.stdout.write("  >  ");
	
}

process.stdin.on('data', function(data) {
	
	answers.push(data.toString().trim());
	
	if(answers.length < questions.length){
		
		ask(answers.length);
		
	}else{
		
		process.exit();
		
	}
	
});

process.on('exit', function(){
	
	process.stdout.write("\n\n\n\n");
	
	process.stdout.write(`Ve a ${answers[1]} ${answers[0]} luego haces ${answers[2]}`);
	
	process.stdout.write("\n\n\n\n");
	
});

ask (0);

