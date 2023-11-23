import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
    
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        flexGrow: 2,
        padding: 25,
        backgroundColor: "#a7d9b8"
      }}>
      
      <h1>
       PaycheckPerspective
      </h1>
         <script defer src="/reading.ts"></script>
      <p><i> Here to aid you in your job searching needs. </i></p>
      <br />
      
      <a href="hi.html">
        See your saved jobs :^)
      </a>
            
      <a href="https://github.com/mjdamato/PaycheckPerspective" target="_blank">
        Learn more about our project!
      </a>
      
    </div> 
  )
}

export default IndexPopup
