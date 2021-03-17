import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>650.759.0103</p>
      <p>cooper.terrones@outlook.com</p>
      <p>
        Check out my <Link to="https://www.twitter.com">twitter!</Link>
      </p>
    </Layout>
  );
};

export default ContactPage;
