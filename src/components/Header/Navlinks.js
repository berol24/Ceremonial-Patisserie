import React from 'react'
import "../../styles/Header_css/Navlinks.css"
import { Link } from 'react-router-dom'

function Navlinks() {
  return (
    <div className='navlinks'>
     <ul className='nav-items'>
      <li className='nav-item'> <Link> Accueil</Link> </li>
      <li className='nav-item'><Link> Catalogue</Link></li>
      <li className='nav-item'><Link> Nos réalisations</Link></li>
      <li className='nav-item'><Link> A propos</Link></li>
      <li className='nav-item'><Link> Contact</Link></li>
     </ul>
    </div>
  )
}

export default Navlinks
