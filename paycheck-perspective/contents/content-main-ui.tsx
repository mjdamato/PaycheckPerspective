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
      <h4>{`Message: ${window.mainMessage}`}</h4>
      <img src="/paycheck-perspective/assets/icon.png" height="2"/>
      <h4>{`Message: ${window.mainNum}`}</h4>

    </div>
  )
}
