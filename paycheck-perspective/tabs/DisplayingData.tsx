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
      <p id="countRah"> </p>
    </div>
  )
}
let doingStuff = new savingAndGetting();
let doingJobStuff = new jobsStored();
function seePostings(){
  document.getElementById("countRah").innerHTML = doingJobStuff.getDaTextFileJobs();

}
