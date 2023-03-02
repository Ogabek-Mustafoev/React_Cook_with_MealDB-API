import { useContext, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Context } from "../../context";
import "./header.css";

export default function Header() {
  const [isDarkMode, setDarkMode] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { pathname } = useLocation();
  const { state, dispatch } = useContext(Context);
  const inputRef = useRef();

  const toggleDarkMode = (isDarkMode) => {
    setDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };
  const handleShowMenu = () => {
    showMenu && setShowMenu(false);
    showSearch && setShowSearch(false);
  };
  const handleActiveSearch = () => {
    inputRef.current.focus();
    showMenu && setShowMenu(false);
    setShowSearch(!showSearch);
  };
  const handleActiveMenu = () => {
    showSearch && setShowSearch(false);
    setShowMenu(!showMenu);
  };
  const setInputValue = (e) => {
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
  };
  const searchHandler = (e) => {
    if (e.key === "Enter") {
      getValueOnClick();
    }
  };
  const getValueOnClick = () => {
    inputRef.current.blur();
    dispatch({ type: "SET_REGIONAL_SEARCH", payload: state.search });
    setShowSearch(!showSearch);
  };

  return (
    <header className="header">
      <a href="/" className="logo"><i className="fas fa-utensils"></i> Cook</a>
      <div className={`event  ${showMenu || showSearch ? 'active' : ''}`} onClick={handleShowMenu} ></div>
      <nav className={`navbar ${showMenu && 'active'}`}>
        <Link onClick={handleShowMenu} to="/" className={`navLinks ${pathname === '/' && 'active'}`}>home</Link>
        <Link onClick={handleShowMenu} to="/category" className={`navLinks ${pathname.includes('category') || pathname.includes('meal') ? 'active' : ''}`}>Categories</Link>
        <Link onClick={handleShowMenu} to="/regional/Canadian" className={`navLinks ${pathname.includes('regional') && 'active'}`}>Regional Meals</Link>
        <Link onClick={handleShowMenu} to="/alphabetical" className={`navLinks ${pathname.includes('alphabetical') && 'active'}`}>Alphabetical</Link>
        <Link onClick={handleShowMenu} to="/about" className={`navLinks ${pathname.includes('about') && 'active'}`}>About</Link>
      </nav>
      <div className="icons">
        <div>
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={() => toggleDarkMode(isDarkMode)}
            size={window.innerWidth < 900 ? "35px" : '40px'}
            moonColor='black'
            sunColor="white"
          />
        </div>
        <div
          onClick={handleActiveSearch}
          style={{
            display:
              pathname.includes("category") ||
                pathname.includes("alphabetical") ||
                pathname.includes("regional") ? "block" : "none",
          }}
          className="fas fa-search"
          id="search-btn"
        ></div>
        <div onClick={handleActiveMenu} className="fas fa-bars" id="menu-btn"></div>
      </div>
      <div className={`search-form ${showSearch ? 'active' : ''}`}>
        <input
          ref={inputRef}
          onChange={setInputValue}
          value={state.search}
          type="search" id="search-box"
          placeholder="Search here..."
          onKeyDown={searchHandler}
        />
        <label onClick={getValueOnClick} htmlFor="search-box" className="fas fa-search"></label>
      </div>
    </header>
  )
}
