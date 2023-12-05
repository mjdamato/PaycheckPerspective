import React from "react";
//import * as fs from 'fs';
import { readFileSync } from 'fs';
import { join } from 'path';
//import {storage} from './fileStorage';
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
		//if ([fileHandle] == null)
		const [fileHandle] = await showOpenFilePicker();
		const file = await fileHandle.getFile()
		//alert(fileHandle);
		//const [fileHandle] = doingStorageStuff.choseBasicLocalStorage(fileHandle)
		const writable = await fileHandle.createWritable();
		
		//next line contains an array of job strings
		let previousStuff = await file.text();
		previousStuff = (previousStuff + '\n' + job);
		//this.jobLinks.push(job);
		await writable.write(previousStuff);
		await writable.close();
	//alert(file);
		//await alert("yippee");
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
	}
	
	getDaTextFileJobs(){
		const result = readFileSync(join(__dirname, '../background/UareLs.txt'), 'utf-8');
		  const resultInArr = result.split(/\r?\n/);

		return resultInArr;

	}
}
//let doingStorageStuff = new storage();