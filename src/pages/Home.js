import React from 'react'
import {Link} from "react-router-dom";
import Promo1 from "../assets/promo1.png";
import Promo2 from "../assets/promo2.png";
import Promo3 from "../assets/promo3.png";
import Promo4 from "../assets/promo4.png";


import '../styles/Home.css'

function Home() {
    return (
        <div className="home">

            <div className="comecarPedido">

                <div className="comecar"> <h1>COMEÇAR PEDIDO</h1> </div>

                <Clickable>
                <Link to="/menu">
                <button className="button1">ENTREGA</button>
                </Link>
                </Clickable>

                <div className="ou"> <p> OU </p> </div>

                <Link to="/menu">
                <button className="button2">PARA LEVAR</button>
                </Link>

                <hr className="hr3"></hr>

            </div>

             <div className="fotos">
                    <div className="foto1">
                        <Link to="/home"> 
                             <img src={Promo1} />
                        </Link>
                    </div>

                    <div className="foto2">
                    <Link to="/home"> 
                             <img src={Promo2} />
                        </Link>
                    </div>

                    <div className="foto3">
                    <Link to="/home"> 
                             <img src={Promo3} />
                        </Link>
                    </div>

                    <div className="foto4">
                    <Link to="/home"> 
                             <img src={Promo4} />
                        </Link>
                    </div>

            </div>

        </div>
    )
}

export default Home
