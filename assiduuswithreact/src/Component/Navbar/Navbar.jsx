import React, { useEffect, useRef } from 'react'

function Navbar() {
  
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 30px',background:'white',padding:'20px 25px'}}>
          <img src="assiduus.png" alt="" width={'150px'}/>
        <div style={{display:'flex',gap:'15px'}}>
      
       <div style={{border:'1px solid black',width:'200px',height:'23px',display:'flex',alignItems:'center',paddingLeft:'10px'}}>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCf2u42JfGhbzuj1ZLAjev1_pp0Q-Dd9rD5g&usqp=CAU" alt="" width={'20px'}/>
      
       <input type="text" style={{border:'none'}}/>
       </div>
       <img src="https://i.pinimg.com/474x/04/49/e8/0449e8016157e0274e22fcd193a82e4d.jpg" alt="" width={'20px'} height={'20px'}/>
       <img src="profile.jpg" alt="" style={{width:'20px',borderRadius:'50%',height:'20px'}}/>
        </div>
      

    </div>
  )
}

export default Navbar
