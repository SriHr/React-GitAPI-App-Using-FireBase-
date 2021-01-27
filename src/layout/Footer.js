import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center text-white bg-info text-uppercase fixed-bottom p-3"
    >
      HR GitHub Search App with Firebase
    </Container>
  );
};

export default Footer;
