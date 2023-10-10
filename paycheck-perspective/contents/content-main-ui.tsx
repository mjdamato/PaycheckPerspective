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
        padding: 8,
        background: "purple",
        color: "white"
      }}>
      <h1>{`Message: ${window.mainMessage}`}</h1>
    </div>
  )
}
