import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  //matches: ["https://www.indeed.com/*"],
  world: "MAIN",
  run_at: "document_start"
}

window.mainMessage  = "Yippee it works"
