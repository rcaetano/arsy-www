import { graphql, Link } from "gatsby"
import React from "react"
import style from "./style.css"
import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"

const Index = ({ data, location }) => {
  const posts = data.allMdx.edges
  console.log(posts)

  return (
    <Layout location={location}>
      <Jumbotron  className={style.jumbotron} title="What is the sound of mind at rest?" />
      <p className="lead">Projects and Activities</p>
      <Link to="/proof-of-process" >Proof of Process</Link>
      {posts.map((post, i) => (
        <Link to={post.node.slug}>
        <div key={i}>{post.node.frontmatter.title}</div>
        </Link>
        // <Post
        //   data={post}
        //   options={{
        //     isIndex: true,
        //   }}
        //   key={i}
        // />
      ))}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`
