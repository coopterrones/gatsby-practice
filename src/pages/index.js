import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Hello,</h1>
        <h2>
          Im Cooper, a front end developer currently living in Denver, Colorado.
        </h2>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
