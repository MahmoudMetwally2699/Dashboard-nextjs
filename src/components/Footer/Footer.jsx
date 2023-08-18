"use client"
import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../../../public/Logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Image src={Logo} className="logo" alt="logo" />
        <Row>
          <Col className="custom__col">
            <Link href="/">Home</Link>
            <Link href="/">Payments</Link>
            <Link href="/">Balances</Link>
          </Col>
          <Col className="custom__col">
            <Link href="/">Customers</Link>
            <Link href="/">Products</Link>
            <Link href="/">Billing</Link>
          </Col>
          <Col className="custom__col">
            <Link href="/">Reports</Link>
            <Link href="/">Connect</Link>
            <Link href="/">Balances</Link>
          </Col>
        </Row>
      </Container>
      <div className="socialMedia">
        <i className="bi bi-facebook custom__icon"></i>
        <i className="bi bi-instagram custom__icon"></i>
        <i className="bi bi-twitter custom__icon"></i>
      </div>
      <p className="copyRights">
        &copy;{new Date().getFullYear()} All rights reserved to IZO
      </p>
    </footer>
  );
};

export default Footer;
