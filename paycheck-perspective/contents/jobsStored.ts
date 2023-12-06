import React from "react";
//import * as fs from 'fs';
import { readFileSync } from 'fs';
import { join } from 'path';

import store from "./fileStorage";
//import {writeFileSync} from 'fs';
//import {appendFileSync} from 'fs';
//import { promises } from "fs";



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
   
	
	
	async addToJobs(job: string){
		
		//calling the checkForStorage function from fileStorage
		const [fileHandle] = await doingStorageStuff.checkForStorage();
		const file = await fileHandle.getFile()
		const writable = await fileHandle.createWritable();
		
		//next line contains an array of job strings
		let previousStuff = await file.text();
		previousStuff = (previousStuff + '\n' + job);
		await writable.write(previousStuff);
		await writable.close();
	} 
	
	removeFromJobs(job: string){
		//the splice is supposed to remove a specified index
		//the index of is getting that numerical value
		this.jobLinks.splice(this.jobLinks.indexOf(job));
	}
	
	getDaTextFileJobs(){
		const result = readFileSync(join(__dirname, '../background/UareLs.txt'), 'utf-8');
		  const resultInArr = result.split(/\r?\n/);

		return resultInArr;
	}
	
	getDaAppliedJobs(){
		const result = readFileSync(join(__dirname, '../data/UareLs.txt'), 'utf-8');
		  const resultInArr = result.split(/\r?\n/);

		return resultInArr;
	}
}
let doingStorageStuff = new store();