import React from 'react'
import loading from "./../loading.gif"
export default function Spinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop:"50px" }} >
      <img src={loading} alt="Loading..."  />
    </div>
  )
}
