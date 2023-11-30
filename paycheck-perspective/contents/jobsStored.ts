import React from "react";
//import * as fs from 'fs';
import { readFileSync } from 'fs';
import { join } from 'path';
import {writeFileSync} from 'fs';
import {appendFileSync} from 'fs';
import { promises } from "fs";



export default class JobsRah {
	//savedJobs:number;
	//jobLinks:string;
	//hardcoded testing
	jobLinks: string[] = [];

/*
	constructor(job: string) {
      	//this.jobLinks = jobLinks.push(job);
   }
*/  
   
	addToJobs(job: string){
		this.jobLinks.push(job);
	}
	
	
	//next function will eventually replace the function above
	/*
	addToJobs(job: string){
		writeFileSync(join(__dirname, '../background/UareLs.txt'), job, {
    flag: 'w',
  });

  const contents = readFileSync(join(__dirname, '../background/UareLs.txt'), 'utf-8');
  //console.log(contents); // 👉️ "One Two Three Four"
  alert(contents + "rah?");

  //return contents;
}
	//}
	*/
	
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
	}
	
	getDaTextFileJobs(){
		const result = readFileSync(join(__dirname, '../background/UareLs.txt'), 'utf-8');
		return result;

	}
}