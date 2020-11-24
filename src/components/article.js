import React from "react"
import Layout from "./layout"

const Article = ({ children, location, context }) => (
  <Layout location={location}>
    <div className="row">
      <div className="col my-5">
        Hello
        {context}
        {children}
      </div>
    </div>
  </Layout>
)

export default Article
