

/*var fizz =	i % 3; 
var buzz = x/5;
var fizzBuzz= x/3 && x/5;*/



var i=0;

function fizzbuzz() { 

	for (i=1; i<=100; i ++) {


		 if ( i% 5 == 0   && i% 3 == 0) {


			console.log('fizz buzz');
			document.write('fizz buzz');
			
			$(document).ready(function() {
			$('.drawingBoard').append('<li>' + 'fizz buzz' + '</li>')
			

			
		} else if ( i% 3 == 0 ) {

			
			console.log('fizz') ;
			document.write('fizz ,')

			$(document).ready(function() {
			$('.drawingBoard').append('<li>' + 'fizz' +'</li>')
			});




		
		} else if ( i% 5 == 0 ) {

			
			console.log('buzz');
			document.write('buzz ,')
			$(document).ready(function() {
			$('.drawingBoard').append('<li>' + 'buzz' + '</li>')
			});

		} else {

			var counter= i;
			console.log(i);
			document.write( i + ', ');

			$(document).ready(function() {
			$('.drawingBoard').append('<li>' + counter + '</li>' )
			});


			
		}
		

		
	};
};

fizzbuzz();




