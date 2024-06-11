import React from 'react'
import "../../styles/Footer_css/Contact.css";
import icon_whatsapp from "../../assets/icons/icon_whatsapp.png";
import icon_facebook from "../../assets/icons/icon_facebook.png";
import icon_instagram from "../../assets/icons/icon_instagram.png";
import icon_youtube from "../../assets/icons/icon_youtube.png";
import logo_ceremonial from "../../assets/images/logo_footer.png";


function Contact() {
  return (
    <div>
      <div className="logo_footer">
        <img src={logo_ceremonial} alt="logo_ceremonial" />
      </div>
      <div className="mail">
        <span>giresdjomo@yahoo.fr</span>
      </div>
      <div className="number">
        <span>+237 655810768</span>
      </div>
      <div className="icon_reseau">
        <div>
          <a href="#">
            <img src={icon_whatsapp} />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/profile.php?id=100076282001637">
            <img src={icon_facebook} />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/ceremonialpatisserie?igsh=MWltcG02dGwwZjd3OQ==">
            <img src={icon_instagram} />
          </a>
        </div>
        <div>
          <a href="https://youtube.com/@ceremonialpatisserie?si=VzO2dmN460n-IIY-">
            <img src={icon_youtube} />
          </a>
        </div>

        {/* <div> <a href='#'><img src= {icon_whatsapp} /> </a></div>
<div> <a href='https://www.facebook.com/profile.php?id=100076282001637' target='blank'><img src={icon_facebook} /> </a></div>
<div> <a href='https://www.instagram.com/ceremonialpatisserie?igsh=MWltcG02dGwwZjd3OQ==' target='blank'><img src={icon_instagram} /></a> </div>
<div> <a href='https://youtube.com/@ceremonialpatisserie?si=VzO2dmN460n-IIY-' target='blank'><img src={icon_youtube} /> </a></div> */}
      </div>
    </div>
  );
}

export default Contact
