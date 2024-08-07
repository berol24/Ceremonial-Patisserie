import React from 'react'
import "../../styles/Header_css/Navlinks.css"
import { Link } from 'react-router-dom'

function Navlinks() {
  return (
    <div className='navlinks'>
     <ul className='nav-items'>
      <li className='nav-item'> <Link to='/'> Accueil</Link> </li>
      <li className='nav-item'><Link to='/catalogues' > Catalogue</Link></li>
      <li className='nav-item'><Link to='/realisations'> Nos réalisations</Link></li>
      <li className='nav-item'><Link to='/apropos' > A propos</Link></li>
      <li className='nav-item'><Link to='/contact'> Contact</Link></li>
      <li className='nav-item'><Link to='/favoris'> Favoris</Link></li>
     </ul>
    </div>
  )
}

export default Navlinks
