import React from 'react'

const Logo = () => {

  return (
    <div style={styles.logo}>
      Mj Task Manager
    
    </div>
  )
}

// Inline styles for the table and cells
const styles = {
  logo: {
    position: "absolute",
    top:"10px",
    left:"10px",
    borderCollapse: "collapse",
    fontSize: "23px",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    color:"#062630",
    width: "580px",
    margin: "20px auto",
  },
}


export default Logo