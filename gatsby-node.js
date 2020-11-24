const _ = require(`lodash`)
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // The “graphql” function allows us to run arbitrary
  // queries against the local Contentful graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  return graphql(
    `
      {
        allContentfulProofOfProcess(limit: 1000) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log(result)
    // Create  pages
    const popTemplate = path.resolve(`./src/templates/pop-section.js`)
    // We want to create a detailed page for each
    // section node. We'll just use the Contentful id for the slug.
    _.each(result.data.allContentfulProofOfProcess.edges, edge => {
      // Gatsby uses Redux to manage its internal state.
      // Plugins and sites can use functions like "createPage"
      // to interact with Gatsby.
      createPage({
        // Each page is required to have a `path` as well
        // as a template component. The `context` is
        // optional but is often necessary so the template
        // can query data specific to each page.
        path: `/proof-of-process/${edge.node.slug}/`,
        component: slash(popTemplate),
        context: {
          id: edge.node.id,
        },
      })
    })
  })
}
