import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppStore from "../assets/app.png";
import GooglePlay from "../assets/googleplay.png";
import AppGallery from "../assets/appgallery.png";
import CocaCola from "../assets/cocacola.png";
import '../styles/Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
           

            <div className="socialMedia">
            <InstagramIcon className="instagram" />
            <FacebookIcon className="facebook" />
            <TwitterIcon className="twitter" />
            </div>

            <div className="descarregar"> 
            <img className="appstore" src={AppStore} />
            <img className="googleplay" src={GooglePlay} />
            <img className="appgallery" src={AppGallery} />
            <img className="cocacola" src={CocaCola} />
            </div>

            <div classname="opcoes"> 
            <h1>
             Internacional |
                    Tabela de Alergénios |
                Tabela Nutricional |
                        MENU |
                    Cookies | 
                    Contacte-nos |
                    Polit. Privacidade Google |
                    Termos de Utilização Bing |
                Política de Privacidade |
                    Franchising |
                    Livro de Reclamações |
                    Termos & Condições </h1>  </div>

            <p> &copy; 2021 dominospizza.pt</p>
        </div>
    )
}

export default Footer
