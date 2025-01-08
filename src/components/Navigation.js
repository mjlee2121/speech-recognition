import React from 'react'

const Navigation = () => {
  const navContents = ['Daily Task','Monthly Task']

  return (
    <nav className='navstyles.navbar'>
      <ul className='navstyles.navList'>
        {navContents.map((item, index)=>(
          <li key={index} className='navstyles.li'>
            <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className='navstyles.link'>
              {item}
            </a>
          </li>
        ))}

      </ul>
    </nav>
  )
}

export default Navigation