// import { graphql } from "gatsby"
import React from "react"

// import Post from '../templates/post/post'
// import Meta from '../components/meta/meta'
import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"

const POPIndex = ({ data, location }) => {
  // const posts = data.remark.posts

  return (
    <Layout location={location}>
      <Jumbotron title="projects" />
      <div className="row">
        <div className="col">
          Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.

Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.

Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.
        </div>
        <div className="col">
          This is the other
        </div>
      </div>
      {/* //   {posts.map((post, i) => (
    //     <Post
    //       data={post}
    //       options={{
    //         isIndex: true,
    //       }}
    //       key={i}
    //     />
    //   ))} */}
    </Layout>
  )
}

export default POPIndex

// export const pageQuery = graphql`
//   query IndexQuery {
//     remark: allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       posts: edges {
//         post: node {
//           html
//           frontmatter {
//             layout
//             title
//             path
//             category
//             tags
//             description
//             date(formatString: "YYYY/MM/DD")
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 500) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
