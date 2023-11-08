import type { PlasmoCSConfig } from "plasmo"
import React from "react";
import ReactDOM from "react-dom";


export const config: PlasmoCSConfig = {
	//matches: ["<all_urls>"],
  matches: ["https://www.indeed.com/*"],
  world: "MAIN"
}

export default function PlasmoMainUI() {
  return (
    <div
      style={{
        padding: 4,
        background: "#3221de",
        color: "white",
        marginTop: 160,
        marginLeft: 920
      }}>

      <h4>{`${window.mainMessage}`}</h4>
      
      <button type="button" id="URLbutton" onClick={setURL}>
         {window.bmessage}
       </button>
              
      <h4>{`${window.value}`}</h4>
      
    </div>
  )
}
function setURL(){
	window.value = location.href;
	//document.getElementById("msg").innerHTML = location.href;
	alert("This job posting has been saved");
	applicationStatus()
}
function getURL(){
	const newURL= window.value;
	return newURL;
}
function applicationStatus(){
	alert("yippe the nested one works");
	gooLuck()
}
function gooLuck(){
	alert('Good luck on your job searching journey :)');
}
