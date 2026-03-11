import { useState } from "react"

import KhavdaDashboard from "./Dashboards/KhavdaDashboard"
import AvaadaDashboard from "./Dashboards/AvaadaDashboard"

export default function App() {

  const [page,setPage] = useState("khavda")

  return (

    <div>

      <div style={{
        padding:"12px",
        borderBottom:"1px solid #ddd",
        display:"flex",
        gap:"20px"
      }}>

        <button onClick={()=>setPage("khavda")}>
          Khavda Transmission
        </button>

        <button onClick={()=>setPage("avaada")}>
          Avaada Intelligence
        </button>

      </div>

      {page === "khavda" && <KhavdaDashboard />}

      {page === "avaada" && <AvaadaDashboard />}

    </div>

  )
}
