import {
  LocationOnOutlined,
  SearchOutlined,
  ShoppingCart,
} from "@material-ui/icons";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "../header/Header.css";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";

function Header() {
  const [departments, setDepartments] = useState([]);

  const fetchDepartment = async () => {
    const url = "https://run.mocky.io/v3/8df49d1e-b3e7-471c-b4f5-8a483ed1f661";

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDepartments(data);
      });
  };

  fetchDepartment();

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__left">
          <Link to="/">
            <img
              className="amazon__logo"
              src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"
              alt="Amazon Logo"
            />
          </Link>

          <div className="header__location">
            <LocationOnOutlined className="header__location__icon" />
            <div className="header__location__details d-sm-none d-md-block">
              <p className="deliver__to">Deliver to</p>
              <p className="location fw-bold">Nepal</p>
            </div>
          </div>
        </div>
        <div className="header__top__middle">
          <div className="header__search">
            <select
              className="form-select d-sm-none d-md-block"
              aria-label="Default select example"
            >
              <option selected>All</option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>{department.name}</option>
              ))}
            </select>

            <input className="search__input" type="text" />
            <button className="search__button">
              <SearchOutlined />
            </button>
          </div>
        </div>
        <div className="header__top__right">
          <div className="header__signIn">
            <Dropdown />
          </div>
          <div className="returns__orders">
            <p className="returns">Returns</p>
            <p className="orders fw-bold">& Orders</p>
          </div>
          <div className="cart">
            <ShoppingCart className="cart__icon" />
            <p>0</p>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        {/* <Navbar/> */}
        <span className='header__bottom__text'>Today's Deals</span>
        <span className='header__bottom__text'>Customer Service</span>
        <span className='header__bottom__text'>Registry</span>
        <span className='header__bottom__text'>Gift Cards</span>
        <span className='header__bottom__text'>Sell</span>
      </div>
    </div>
  );
}

export default Header;
