import { useState,useContext } from "react";
import { CartContext } from "../Context/CartContext";
import {NavLink} from 'react-router-dom';
import CartWidget from "./CartWidget";
import Cart from "./Cart";
import FilterSection from "./FilterSection";

const NavBar = ({setSearchValue,search}) => {
  const [openCart, setOpenCart] = useState(false);
  const [cart] = useContext(CartContext);

  const showCart = () => {
    setOpenCart(!openCart);
  }

  return (
    <>
      <div className='header'>
        <div className='NavBar'>
          <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/pokemons">POKEDEX</NavLink>
          <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/pokeitems">POKE ITEMS</NavLink>
          <input style={{fontSize:'20px', width:'600px',height:'40px',padding:'5px'}} onKeyUp={(event) => setSearchValue(event.target.value)} id="searchInput" name="searchInput" placeholder="SEARCH POKEMON" type="text" />
          <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/login">LOG IN</NavLink>
          <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/signup">SIGN UP</NavLink>
          <div onClick={showCart} className={openCart ? 'navActive' : 'navInactive'}>
            <CartWidget  />
          </div>
            {
              openCart ?
              <>
                <div className="backgroundModal" onClick={showCart}></div>
                <Cart setOpenCart={setOpenCart}/>
              </>
              :
              null
            }
        </div>
      </div>
    </>
  )
}

export default NavBar;