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
	return this.savedJobs++;
}

	saveLink(){
		window.value = location.href;
		const count = 1;
		
		//adding to a count found in another file
		const addingToCount = doingStuff.setCount();
		
		//adding to the stored job array
		doingJobStuff.addToJobs(window.value);
		
		//if alert works then that means the function can execute well
		alert("The job posting: "+ window.value +" has been saved!");
}

//will need to adapt the two following functions to the new format
	deleteLink(){
	this.savedJobs--;
	}
	
	
	setURL(){
	window.value = location.href;
	//alert("This job posting has been saved");
	alert("The job posting: "+ window.value +" has been saved!");
	window.savedN ++;
}
	
}

let doingStuff = new count(1);
let doingJobStuff = new jobs();

