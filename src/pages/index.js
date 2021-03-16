import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello,</h1>
      <h2>
        Im Cooper, a front end developer currently living in Denver, Colorado.
      </h2>
      <p>
        Need a developer? <Link to="/contact">contact me!</Link>
      </p>
    </div>
  )
}

export default IndexPage
