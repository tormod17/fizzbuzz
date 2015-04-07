

/*var fizz =	i % 3; 
var buzz = x/5;
var fizzBuzz= x/3 && x/5;*/
function fizzbuzz() { 

	for (i=1; i<=100; i ++) {


		 if ( i% 5 == 0   && i% 3 == 0) {


			console.log('fizz buzz');
			document.write('fizz buzz ,');
		
		} else if ( i% 3 == 0 ) {

			
			console.log('fizz') ;
			document.write('fizz ,');


		
		} else if ( i% 5 == 0 ) {

			
			console.log('buzz');
			document.write ('buzz ,');
		
		} else {

			console.log(i);
			document.write(i + ',');
		}
		
	};
};

fizzbuzz();

