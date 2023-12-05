import type { PlasmoCSConfig } from "plasmo"
import React from "react";
import savingAndGetting from "../contents/savingAndGetting"; 
import jobsStored from "../contents/jobsStored";


export default function DeltaFlyerPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        backgroundColor: 'black',
        color: '#03fcec'
      }}>
      <h2>Paycheck Perspective</h2>

      <p>Welcome to Your application page</p>
      <button onClick={seePostings}>See saved postings </button>
      <div id="countRah"> </div>
      <button onClick={pickFile}>Choose your storage File</button>

    </div>
  )
}
let doingStuff = new savingAndGetting();
let doingJobStuff = new jobsStored();
function seePostings(){
	const jobLinks: string[] = doingJobStuff.getDaTextFileJobs();
	let rah = '';
	jobLinks.forEach((line) => {
    rah = rah + '<br>' + '<a href=' + line +' target="_blank">' + line + '</a>';
  });
  	document.getElementById("countRah").innerHTML = rah;
}


async function pickFile(){
	const [fileHandle] = await showOpenFilePicker();
	const file = await fileHandle.getFile()
	
	const writable = await fileHandle.createWritable();
	await writable.write(fileHandle.name);
	await writable.close();
	//alert(file);
	await alert("yippee");
}
