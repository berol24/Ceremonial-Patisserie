import React, { useState } from 'react'
import "../../styles/Header_css/Navlinks.css"
import { Link ,useLocation ,useNavigate} from 'react-router-dom'

function Navlinks() {

  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();
  const navigate = useNavigate(); // Hook pour la navigation

  // Met à jour l'état dès que la route change
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleClick = (link) => {
    setActiveLink(link); // Met à jour l'état
    navigate(link); // Navigue vers la nouvelle page
  };

  return (
 

    <div className='navlinks'>
      <ul className='nav-items'>
      <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
          <Link to='/' onClick={() => handleClick('/')}>Accueil</Link>
        </li>
        <li className={`nav-item ${activeLink === '/catalogues' ? 'active' : ''}`}>
          <Link to='/catalogues' onClick={() => handleClick('/catalogues')}>Catalogue</Link>
        </li>
        <li className={`nav-item ${activeLink === '/realisations' ? 'active' : ''}`}>
          <Link to='/realisations' onClick={() => handleClick('/realisations')}>Nos réalisations</Link>
        </li>
        <li className={`nav-item ${activeLink === '/apropos' ? 'active' : ''}`}>
          <Link to='/apropos' onClick={() => handleClick('/apropos')}>A propos</Link>
        </li>
        <li className={`nav-item ${activeLink === '/contacts' ? 'active' : ''}`}>
          <Link to='/contacts' onClick={() => handleClick('/contacts')}>Contact</Link>
        </li>
        <li className={`nav-item ${activeLink === '/favoris' ? 'active' : ''}`}>
          <Link to='/favoris' onClick={() => handleClick('/favoris')}>Favoris</Link>
        </li>
        {/* <li className={`nav-item ${activeLink === '/contact' ? 'active' : ''}`}>
          <Link to='/myFormular' onClick={() => handleClick('/myFormular')}>Formulaire</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default Navlinks
