import type { PlasmoCSConfig } from "plasmo"
import React from "react";
import ReactDOM from "react-dom";

 
export const config: PlasmoCSConfig = {
  //matches: ["<all_urls>"],
  matches: ["https://www.indeed.com/*"],
  world: "MAIN",
  run_at: "document_start"
}

window.mainMessage  = "Indeed has been reached"
window.bmessage = "Would you like to save this job?"
window.value = "The current URL: " + location.href
//window.onClick = alert('hello')


//window.func = function getURL(){
	//window.value = location.href
	//document.getElementById("msg").innerHTML = location.href
//}
