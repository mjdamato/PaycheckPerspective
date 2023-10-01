import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
    
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        flexGrow: 1,
        padding: 16,
        backgroundColor: "#f5e6f2"
      }}>
      
      <h2>
        PaycheckPerspective
      </h2>
      <p> Here to aid you in your job searching needs </p>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
