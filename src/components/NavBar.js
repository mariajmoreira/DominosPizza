import React, { useState, useEffect } from "react";
import Logo from "../assets/dominosLogo.png";
import User from "../assets/user-icon.png";
import Cart from "../assets/cart-icon.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {

    const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  let navbarClasses=['navbar'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
  


  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className={navbarClasses.join(" ")}>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
          <Link to="/home"> 
          <img src={Logo} />
          </Link>

        <Link className="logo" to="/home"> </Link>

        <div className="hiddenLinks">
        <Link to="/encomenda"> ENCOMENDA ONLINE </Link>
            <Link to="/menu"> MENU </Link>
            <Link to="/promocoes"> PROMOÇÕES </Link>
            <Link to="/lojas"> LOJAS </Link>
            <Link to="/seguepedido"> SEGUE O TEU PEDIDO </Link>
          <Link to="/login"> LOG IN </Link>
          <Link to="/carrinho"> CARRINHO </Link>
        </div>
      </div>

      <div className="rightSide">
          <div className="links">
            <Link to="/encomenda"> ENCOMENDA ONLINE </Link>
            <Link to="/menu"> MENU </Link>
            <Link to="/promocoes"> PROMOÇÕES </Link>
            <Link to="/lojas"> LOJAS </Link>
            <Link to="/seguepedido"> SEGUE O TEU PEDIDO </Link>
          </div>

        <div className="login">
          
          <Link className="userlink" to="/login"> <img src={User} /> </Link>
          <Link className="user" to="/login"> LOG IN </Link>
        </div>

        <div className="carrinho">
        
        <Link className="linkcarrinho" to="/carrinho"> <img src={Cart} /> </Link>
        <Link to="/carrinho"> CARRINHO </Link>
        </div>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
export default Navbar;