function publishResult(){
	const maths = document.getElementById("maths").value;
	const english = document.getElementById("english").value;
	const kiswahili = document.getElementById("kiswahili").value;
	const physics = document.getElementById("physics").value;
	const computer= document.getElementById("computer").value;
	const chemistry = document.getElementById("chemistry").value;
	const history = document.getElementById("history").value;
	const geography = document.getElementById("geography").value;

	let total = parseFloat(maths) + parseFloat(english) + parseFloat(kiswahili) + parseFloat(physics) + parseFloat(computer) + parseFloat(chemistry) + parseFloat(history) + parseFloat(geography);
	document.getElementById("sum").innerHTML = `The sum is: ` + total;
	let percentage = (total * 100) / 800;
	document.getElementById("percentage").innerHTML = `The Percentage is: ${percentage}%`;

	if(percentage >= 79){
		document.getElementById("grade").innerHTML = 'You have passed! Your grade is an A! Excellent work! 0w0'
	}
	else if(percentage >= 60 && percentage <= 78){
		document.getElementById("grade").innerHTML = 'You have passed! Your grade is B! :0'
	}
	else if(percentage >= 49 && percentage <=59){
		document.getElementById("grade").innerHTML = 'You have passed! Your grade is C! :)'
	}
	else if(percentage >= 40 && percentage <= 48){
		document.getElementById("grade").innerHTML = 'You have passed! Your grade is D! :|'
	}
	else if(percentage < 40){
		document.getElementById("grade").innerHTML = 'You failed! Your grade is E! Better luck next time! <3'
	}
}