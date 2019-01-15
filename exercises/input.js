

class Input{
	//constructor takes in a a target input element
	//should also construct variables for the range, the pattern, and the element that will hold the error message
	//range min and max should default to null
	constructor(input ){
		this.input=input;
		this.minRange=null;
		this.pattern=0;
		this.message= null;
		this.maxRange=null;
		this.newDomElement=null;
		this.newElement=null;
		this.error=null;
		 this.testResult={};
		 
		 this.messageDomElement=null;
	}
	
	setRange(min, max ){
	
		 this.min=min;
		 this.max=max;

	}
	getRange(){
		var storeMinAndMax= {
			min:this.min,
			max:this.max
		}
		return storeMinAndMax;
	}

	setPattern( regexPattern ){
			   this.pattern = regexPattern;
	}

	getPattern(){
		return this.pattern;
	}
	//test runs all current tests on the target input and returns an object with data about whether the input passed or not
	//returns: an object with a property of result (true/false), and an optional property of "error" if result was false
		//if the input's value failed because it didn't match the regex pattern, error will be "pattern"
		//if the input's value failed because it didn't match the range, error will be "range"
	/*notes:
		let's say your property for youregex pattren was this.regex, 
		and your property for your input was this.targetInput
		get the value from the targetInput (or example, this.targetInput.val()) and it put in a variable, 
		you would then use the test method to get true or false if the pattern matched
		https://www.w3schools.com/jsref/jsref_regexp_test.asp
		this.regex.test ( this.targetInput.val() )  would give you true or false

		also needs to test the range, but note that the range is null by default
		if it is still null, no range has been set, so don't test it
		
		
		
		if it is not null, then test the range */
	test(){
		var getInputVal= parseInt(this.input.val());
		
        if(!this.pattern.test(getInputVal)){
			this.testResult.error= 'pattern';
			this.testResult['result']=false;
			return this.testResult;
		}
			else if(getInputVal === null || getInputVal < this.min){
				this.testResult.error='range';
				this.testResult['result']=false;
			    return this.testResult;
			}
			else if(getInputVal ===null || getInputVal > this.max){
				this.testResult.error='range';
				this.testResult['error']=false;
			    return this.testResult;
			}
			else{
				this.testResult.result=true;
				return this.testResult;
			}
			
			
		}
		

		
	/*
	showError: takes in a message, creates a dom element, and then positions that dom Element directly below the input
	argument: message (a string)
	returns: nothing
	notes: should create an element and position it directly beneath the input
		you will need to get the position of the input  (https://www.w3schools.com/jquery/css_position.asp)
		also find the height of the element (https://www.w3schools.com/jquery/css_height.asp)
		make a new dom element
			give it a left CSS property the same as the input's left property
			give it a top property of the input's top property + the input's height (so it appears basically below it)
			give it a class of "inputError"
		make sure to set its text to the incoming text from the argument!
		go to the input's parent (https://www.w3schools.com/jquery/traversing_parent.asp)
		append the newly created element
		MAKE SURE TO STORE the reference to the dom element in the object for later use!
		Don't store the CSS selector, you made the element, store the direct dom object itself!
		*/

	showError( message ){
		 this.newElement =(".inputContainer");
		 var inputPosition= this.input.position();
		 var inputHeight= this.input.height();
		  
		 this.newElement.css("inputPosition.left").toString();
		 this.newElement.css("inputHeight + 1").toString();
		  
	   

	    this.newElement.parent().css({position:'relative'});
		this.newElement.css(inputPosition + "px");
		this.newElement.css(inputHeight + "px");
		this.newElement.addClass("inputError");
		this.newElement.text(message);

		this.input.parent().append(this.newElement);
	
	}		
			
	
	// hideError removes the error dom element from the DOM for the given input
	// arguments: none
	// returns: none
	// note: 
	// 	removes the dom element in question (https://www.w3schools.com/jquery/html_remove.asp)
	// 	*/
	hideError(){
		this.messageDomElement.remove();
	}
}