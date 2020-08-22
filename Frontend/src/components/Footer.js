import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {

    return (
        <footer>
            <div id="footer-main">
                <div id="site-desc">
                    <h1>Mirror</h1>
                    <p>
                        laoreet non curabitur gravida arcu ac. Laoreet non curabitur gravida
                        arcu ac tortor.El Pueblo De nuestra senora la reina de los angeles.
                    </p>
                </div>

                <div id="footer-table">
                    <div className="table-rows">
                        <Link to="/">Menu</Link>
                        <Link to="/">Shop</Link>
                        <Link to="/">About</Link>
                        <Link to="/blog">Blogs</Link>
                        <Link to="/">Features</Link>
                    </div>
                    <div className="table-rows">
                        <Link to="/">Help</Link>
                        <Link to="/">Shipping Information</Link>
                        <Link to="/">Returns and exchange</Link>
                        <Link to="/">Terms and Conditions</Link>
                        <Link to="/">Privacy policy</Link>
                    </div>
                    <div className="table-rows">
                        <Link to="/">Contact</Link>
                        <Link to="/">17-29 Taxicab numbers</Link>

                        <Link to="/">621 0001000</Link>

                        <Link to="/">mirror@gmail.com</Link>
                    </div>
                </div>
            </div>
            <div id="copyright-div">
                <p>copyright © 2020 | All rights reserved | Mirror</p>
            </div>
        </footer>
    );
}

export default Footer;
