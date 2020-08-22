import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Header extends React.Component {

    state = { cartCount: 0, wishCount: 0 };

    componentDidMount() {
        axios
            .get("http://localhost:8000/user/userA2")
            .then((data) =>
                this.setState({
                    cartCount: data.data.usercart.length,
                    wishCount: data.data.wishList.length,
                })
            )
            .catch((err) => console.log(err));
    }


    componentDidUpdate() {
        if (this.state.cartCount !== -1) {
            axios
                .get("http://localhost:8000/user/userA2")
                .then((data) => {
                    this.setState({
                        cartCount: data.data.usercart.length,
                        wishCount: data.data.wishList.length,
                    });
                })
                .catch((err) => console.log(err));
        }
    }

    render() {
        return (
            <header id="header">
                <nav id="header-nav" className="navbar navbar-expand-lg navbar-light ">
                    <a href="/" className="navbar-brand">
                        Mirror
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Trending
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Customize
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Shop
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    href="/"
                                >
                                    Account
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/">
                                        My account
                                    </a>
                                    <a className="dropdown-item" href="/">
                                        returns and orders
                                    </a>

                                    <a className="dropdown-item" href="/">
                                        Settings
                                    </a>
                                    <a className="dropdown-item" href="/">
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </ul>

                        <form method="POST" action="/products">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button type="submit">
                                <i className="fa fa-search" />
                            </button>
                        </form>

                        <div className="icons container-fluid">
                            <a href="/" className="fa fa-bell">
                                {""}
                            </a>
                            <a
                                href="/"
                                className="fa fa-heart"
                                style={{ position: "relative" }}
                            >
                                {" "}
                                <span className="badge badge-pill badge-light">
                                    {this.state.wishCount}
                                </span>
                            </a>

                            <Link to="/userA2/cart">
                                <i
                                    className="fa fa-shopping-cart"
                                    style={{ position: "relative" }}
                                >
                                    {" "}
                                    <span className="badge badge-pill badge-light">
                                        {this.state.cartCount}
                                    </span>
                                </i>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
