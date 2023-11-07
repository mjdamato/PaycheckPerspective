import type { PlasmoCSConfig } from "plasmo"

 
export const config: PlasmoCSConfig = {
  //matches: ["<all_urls>"],
  matches: ["https://www.indeed.com/*"],
  world: "MAIN",
  run_at: "document_start"
}

//window.mainMessage  = "Indeed has been reached"
window.bmessage = "Would you like to save this job?"
window.value = location.href
window.onClick = alert('hello')
