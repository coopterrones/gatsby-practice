import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        I am Cooper Terrones. Originally from the San Francisco Bay Area, I
        currently live in Denver, Colorado. I recently. I have a media design
        degree from CU Boulder and recently graduated from the Turing School of
        Software and Design studying Front-End Web Development. I am currently
        looking for work trying to blend my unique knowledge from past work in
        the Men's Clothing Industry. Check out my CV here!
      </p>
      <p>
        Feel free to <Link to="/contact">reach out!</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
