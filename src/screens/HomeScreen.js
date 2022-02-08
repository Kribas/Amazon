import { Link } from "@material-ui/core";
import React from "react";
import Books from "../components/books/Books";
import Carousel from "../components/carousel/Carousel";
import Header from "../components/header/Header";
import MidBody from "../components/midBody/MidBody";
import requests from "../requests";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Header />
      <Carousel />
      <section className="midBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <Link className="text-decoration-none" to="">
                <MidBody
                  title="Shop by Category"
                  fetchUrl={requests.item1}
                  footer="Shop Now"
                />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link className="text-decoration-none" to="">
                <MidBody
                  title="Electronics"
                  fetchUrl={requests.item14}
                  footer="See More"
                />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link className="text-decoration-none" to="">
                <MidBody
                  title="AmazonBasics"
                  fetchUrl={requests.item16}
                  footer="See More"
                />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link className="text-decoration-none" to="">
                <MidBody
                  title="Computers & Accessories"
                  fetchUrl={requests.item13}
                  footer="Shop Now"
                />
              </Link>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-lg-3">
              <Link className="text-decoration-none" to="">
                <MidBody
                  title="Jewelery"
                  fetchUrl={requests.item6}
                  footer="Shop Now"
                />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link className="text-decoration-none" to="">
                <MidBody
                  title="Men's Clothing"
                  fetchUrl={requests.item4}
                  footer="Shop Now"
                />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link className="text-decoration-none" to="">
                <MidBody
                  title="Women's Clothing"
                  fetchUrl={requests.item18}
                  footer="Shop Now"
                />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link className="text-decoration-none" to="">
                <MidBody
                  title="Electronics"
                  fetchUrl={requests.item9}
                  footer="Shop Now"
                />
              </Link>
            </div>
          </div>

          <div className="books">
            <div className="row">
              <div className="col-12">
              <Books />
              <Books/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
