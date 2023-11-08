import type { PlasmoCSConfig } from "plasmo"
import React from "react";

 
export const config: PlasmoCSConfig = {
  //matches: ["<all_urls>"],
  //matches: ["https://www.indeed.com/*"],
    matches: ["https://www.indeed.com/*"],
    // matches: ["https://app.joinhandshake.com/*"],


  world: "MAIN",
  run_at: "document_start"
}

window.mainMessage  = "Job Searching? :')"
//window.bmessage = "Would you like to save this job?"
window.saveM =  "Save this job for later?"
window.applyM = "Applied for this job?   "
window.shareM = "Share your experience with this company?"
window.value = "The current URL: " + location.href