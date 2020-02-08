var brian = {};

brian.fartNoise = "PFFT!";

brian.fart = function(){
	console.log(this.fartNoise);
}

function newBrian(){
	var test = JSON.parse(JSON.stringify(brian));
	console.log(test);
}

newBrian();