// import styled from "styled-components";
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import Menu from './Menu';
import User from './User';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} className="logo-img" alt="logo"/>
          <p className="logo-text">Calckee</p>
        </Link>
        <Menu />
        <User />
      </div>
    </div>
  );
}
