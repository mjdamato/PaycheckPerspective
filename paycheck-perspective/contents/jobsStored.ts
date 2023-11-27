import React from "react";

export default class JobsRah {
//class save2{
	//savedJobs:number;
	//jobLinks:string;
	jobLinks: string[] = [];

/*
	constructor(job: string) {
      	//this.jobLinks = jobLinks.push(job);
      	//names.push("Dylan");
   }
*/  
   
	addToJobs(job: string){
	//this.savedJobs 
		this.jobLinks.push(job);
	}
	
	removeFromJobs(job: string){
		//the splice is supposed to remove a specified index
		//the index of is getting that numerical value
		this.jobLinks.splice(this.jobLinks.indexOf(job));
	}
}