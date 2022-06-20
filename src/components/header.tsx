import React from "react";
import '../styles/header.scss'
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import logo from "../images/shopee-logo.png"
const Header = () => {

    return (
        <Navbar className="nav-header">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="link-help">
                        <a href="#login">Bạn cần giúp đỡ?</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;