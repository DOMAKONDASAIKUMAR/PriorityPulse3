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
            <div style={{
                height: "7.2vh", backgroundImage: "url('https://files.123freevectors.com/wp-content/original/128896-red-and-blue-abstract-curve-background.jpg')",backgroundSize:"cover"}}><span style={hd} className="px-5 py-3">Priority Pulse</span></div>
            
        </div>
    )
}

export default Header
