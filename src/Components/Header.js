import React from 'react'
const hd={
    backgroundColor: "white",
    boxSizing: "borderbox",
    color:"#fdfdfd",backgroundColor:"#2f303a",
   position:"relative",top:"80%",fontSize:"22px",fontWeight:"600"
}
function Header() {
    return (
        <div style={{textAlign:"center"}}>
            <div className="bgimg" style={{
                height: "7.2vh", backgroundSize:"cover"}}><span style={hd} className="px-5 py-3">Priority Pulse</span></div>
           
        </div>
    )
}

export default Header
