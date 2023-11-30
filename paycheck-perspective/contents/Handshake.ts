import type { PlasmoCSConfig } from "plasmo"
import React from "react";

 
export const config: PlasmoCSConfig = {
    matches: ["https://www.linkedin.com/jobs*"],

  world: "MAIN",
  run_at: "document_start"
}

window.mainMessage  = "Job Searching? :')"
window.saveM =  "Save this job for later?"
window.applyM = "Applied for this job?   "
window.shareM = "Share your experience with this company?"
window.value = "The current URL: " + location.href