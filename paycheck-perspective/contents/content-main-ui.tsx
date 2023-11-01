import type { PlasmoCSConfig } from "plasmo"

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
        background: "purple",
        color: "white",
      }}>
      <h4>{`${window.mainMessage}`}</h4>
      <input size={50} type="text" id={window.id} placeholder="Would you like to save this job posting?" />


    </div>
  )
}
