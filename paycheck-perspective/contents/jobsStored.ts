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
}