import React from "react";
//import * as fs from 'fs';
import { readFileSync } from 'fs';


export default class JobsRah {
	//savedJobs:number;
	//jobLinks:string;
	//hardcoded testing
	jobLinks: string[] = ["ah", "plese", "help"];

/*
	constructor(job: string) {
      	//this.jobLinks = jobLinks.push(job);
   }
*/  
   
	addToJobs(job: string){
		this.jobLinks.push(job);
	}
	
	removeFromJobs(job: string){
		//the splice is supposed to remove a specified index
		//the index of is getting that numerical value
		this.jobLinks.splice(this.jobLinks.indexOf(job));
	}
	
	getDaJobs(){
		//if element is left not initialized then its undefined
		//currently testing
		var element:string = "mmm maybe ";
		this.jobLinks.push("rah");
		for (let i = 0; i < this.jobLinks.length; i++) {
  			element += this.jobLinks[i] + "--";
  // Code to execute with 'element' in each iteration
}
		return element;
		 //const greetingValue = localStorage.getItem('greeting');
		 //return greetingValue; 
	}
	
	getDaTextFileJobs(){
		var words:string = readFileSync('../background/UareLs.txt', 'utf-8');
		//const words = readFileSync('../background/UareLs', 'utf-8');
		//const words = "mmm mmaybe";
		return words;

	}
}