import React from "react";

export default class counterRah {
	savedJobs:number;

	constructor(count: number) {
      	this.savedJobs = 1 + count;
   }
  
   
   setCount(){
	return this.savedJobs;
}
}