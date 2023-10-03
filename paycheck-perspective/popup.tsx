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
        backgroundColor: #009933"
      }}>
      
      <h2>
        PaycheckPerspective
      </h2>
      <p> Here to aid you in your job searching needs </p>
      <h3> 
      	Job Title:
      </h3>
      <h3> 
      	Average Salary:
      </h3>
      
      	
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
