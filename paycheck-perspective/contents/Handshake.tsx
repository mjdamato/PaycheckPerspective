import type { PlasmoCSConfig } from "plasmo"
import React from "react";


export const config: PlasmoCSConfig = {
	//matches: ["<all_urls>"],
  matches: ["https://linkedin.com/jobs/*"],

  world: "MAIN"
}

export default function PlasmoMainUI() {
  return (
    <div
    id= "onlyOne"
      style={{
        padding: 15,
        position: "fixed",
        borderRadius: 25,
        background: "#3221de",
        color: "white",
        marginTop: 160,
        marginLeft: 5
       // textAlign: center
      }}>
      

      <h4 text-align="center">{`${window.mainMessage}`}</h4>
      
      <button type="button" id="URLbutton" onClick={setURL}>
         {window.saveM}
       </button>
       <p />
       <button type="button" id="applyButton" onClick={appliedRah}>
         {window.applyM}
       </button>
       <p />
       <a href="https://www.glassdoor.com/Reviews/index.htm" target="_blank">
       {window.shareM}
      </a>
       <p />
                    
    </div>
    
  )
}
function setURL(){
	window.value = location.href;
	alert("This job posting has been saved");
	
	/*
	// 1. Select the div element using the id property
	const app = document.getElementById("onlyOne");
	// 2. Create a new <p></p> element programmatically
	const p = document.createElement("p");
	// 3. Add the text content
	p.textContent = "rah?";
	// 4. Append the p element to the div element
	app?.appendChild(p);
	*/
	
//calls the next function
	//applicationStatus()
}
function getURL(){
	const newURL= window.value;
	return newURL;
}
function appliedRah(){
	alert('Good luck :), this posting has been saved');
}
/*
function applicationStatus(){
	const applicationCon = confirm("Did you apply?"); 
	if (applicationCon == true){
		alert("rah");
	}
	gooLuck();
}
function gooLuck(){
	alert('Good luck on your job searching journey :)');
}
*/