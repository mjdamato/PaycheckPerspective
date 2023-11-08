import type { PlasmoCSConfig } from "plasmo"
import React from "react";

 
export const config: PlasmoCSConfig = {
  //matches: ["<all_urls>"],
  matches: ["https://www.indeed.com/*"],
  world: "MAIN",
  run_at: "document_start"
}

window.mainMessage  = "Job Searching? :')"
//window.bmessage = "Would you like to save this job?"
window.saveM =  "Save this job for later?"
window.applyM = "Applied for this job?   "
window.shareM = "Share experience with this company?"
window.value = "The current URL: " + location.href
//window.onClick = alert('hello')


//window.func = function getURL(){
	//window.value = location.href
	//document.getElementById("msg").innerHTML = location.href
//}
/*
function addStuff(){
// 1. Select the div element using the id property
	const app = document.getElementById("onlyOne");
	// 2. Create a new <p></p> element programmatically
	const p = document.createElement("p");
	// 3. Add the text content
	p.textContent = "rah?";
	// 4. Append the p element to the div element
	app?.appendChild(p);
}
*/