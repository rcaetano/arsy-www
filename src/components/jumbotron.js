import React from "react"

const Jumbotron = ({ title, content }) => (
  <div className="jumbotron bg-white px-0">
    <h1 className="display-3">{title}</h1>
    <p>{content}</p>
  </div>
)

export default Jumbotron
