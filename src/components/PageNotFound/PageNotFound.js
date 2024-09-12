import React from 'react'
import "../../styles/PageNotFound_css/PageNotFound.css";
import cake from "../../assets/images/cake.webp";
import logo_ceremonial from "../../assets/images/logo_ceremonial.svg";




function PageNotFound() {
  return (
    <div class="container_found">
    <img src={logo_ceremonial} alt="Logo Cérémonial" class="logo"/>
    <h1 className='title_found'>Oups ! On dirait que vous êtes perdu...</h1>
    
   
    <div class="cake-image">
      <img src={cake} alt="404 Gâteau"/>
    </div>

    <p className='para_found'>On n'a pas pu trouver cette page, mais ne vous inquiétez pas, nos pâtisseries sont toujours aussi délicieuses !</p>
    <a href="/" class="btn_found">Retourner à la boutique</a>
  </div>
  )
}

export default PageNotFound
