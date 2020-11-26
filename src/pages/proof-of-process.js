import { graphql, Link } from "gatsby"
import React from "react"
import style from "./style.css"
import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"

const Index = ({ data, location }) => {
  const posts = data.allContentfulProofOfProcess.edges
  console.log(posts)

  return (
    <Layout location={location} className={style}>
      <Jumbotron title="Proof of Process" />
      <h3>Table of Contents</h3>
      <p class="lead">
        Proof of Process is a protocol designed to meet data integrity and
        privacy requirements between multiple parties. It was developed in
        collaboration between Anuj Das Gupta, Stephan Florquin and Richard
        Caetano.
      </p>
      <ol>
        {posts.slice(0, 10).map((post, i) => (
          <li>
            <Link to={"/proof-of-process/" + post.node.slug}>
              <div key={i}>{post.node.title}</div>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  {
    allContentfulProofOfProcess(sort: { fields: index, order: ASC }) {
      edges {
        node {
          title
          slug
          id
        }
      }
    }
  }
`
