import React from "react";
import count from "./count"; 
import jobs from "./jobsStored"; 



export default class savingAndGetting {
//class save2{
	savedJobs:number;
	names: string[] = [];


/*
	constructor(count: number) {
      	this.savedJobs = 1 + count;
   }
  */
   
   setCount(){
	return (this.savedJobs++);
}

	saveLink(){
		window.value = location.href;
		const count = 1;
		
		//adding to a count found in another file
		const addingToCount = doingCountStuff.setCount();
		
		//adding to the stored job array
		doingJobStuff.addToJobs(window.value);
  		//localStorage.setItem('greeting', 'hello');
		
		//if alert works then that means the function can execute well
		alert("The job posting: "+ window.value +" has been saved!");
}
	
	deleteLink(){
		const count = -1;
		//next line is wrong
		const addingToCount = doingCountStuff.setCount();
		doingJobStuff.removeFromJobs(window.value);
	}

//will need to adapt the following function to the new format
	
	setURL(){
	window.value = location.href;
	//alert("This job posting has been saved");
	alert("The job posting: "+ window.value +" has been saved!");
	window.savedN ++;
}
	
}

let doingCountStuff = new count(1);
let doingJobStuff = new jobs();

