import type { PlasmoCSConfig } from "plasmo"
import React from "react";
import savingAndGetting from "./savingAndGetting"; 

export const config: PlasmoCSConfig = {
  matches: ["https://app.joinhandshake.com/*"],

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
        backgroundColor: 'black',
        color: '#03fcec',
        marginTop: 330,
        marginLeft: 5
      }}>
      
		<h4>{`${window.mainMessage}`}</h4>
      
      <button type="button" id="URLbutton" onClick={savingAndApplying.saveLink}>
         {window.saveM}
       </button>
       <p />
       <button type="button" id="applyButton" onClick={savingAndApplying.appliedRah}>
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
let savingAndApplying = new savingAndGetting();