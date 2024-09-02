import React from 'react'
import "../../styles/Footer_css/Copyright.css"
import { Link } from 'react-router-dom'

function Copyright() {
  return (
    <div className='copyright'>
       <p>
       Copyright © 2024 - Tous droits réservés  - <span> ceremonial Patisserie /</span>
      
     <Link to='/mentions-legales' > mentions legales</Link>
       </p>
    </div>
  )
}

export default Copyright
