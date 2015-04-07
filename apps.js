$(document).ready(function() {
   
    fizzbuzz();
});



function fizzbuzz() { 

	for (i=1; i<=100; i ++) {


		 if ( i% 5 == 0   && i% 3 == 0) {


			console.log('fizz buzz');
			
			
			
			$('.drawingBoard').append('<li>' + 'fizz buzz' + '</li>')
           
			

			
		} else if ( i% 3 == 0 ) {

			
			console.log('fizz') ;


            
			$('.drawingBoard').append('<li>' + 'fizz' +'</li>')
			
		
                




		
		} else if ( i% 5 == 0 ) {

			
			console.log('buzz');

			$('.drawingBoard').append('<li>' + 'buzz' + '</li>')
		

		} else {

			
			console.log(i);


			
			$('.drawingBoard').append('<li>' + i + '</li>' )
			

			
		}
		

		
	};
};


