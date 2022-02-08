import React, { useEffect, useState } from "react";
import "./MidBody.css";
import axios from "axios";
import { Link } from "@material-ui/core";

function MidBody({ title, fetchUrl, footer }) {
  const [items, setItems] = useState([]);

  const axios = require("axios");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com${fetchUrl}`)
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="card">
      <h2 className="section__header">{title}</h2>
      <div className="section__body">
        <img
          className="section__body__image img-fluid"
          src={items.image}
          alt="Item Image"
        />
      </div>
      <div className="section__footer">
        <Link className="footer__inner" to="">{footer}</Link>
      </div>
    </div>
  );
}

export default MidBody;
