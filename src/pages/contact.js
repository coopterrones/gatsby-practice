import React from "react"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>650.759.0103</p>
      <p>cooper.terrones@outlook.com</p>
      <p>
        Check out my <Link to="https://www.twitter.com">twitter!</Link>
      </p>
      <p>You can't have my address!</p>
    </div>
  )
}

export default Contact
