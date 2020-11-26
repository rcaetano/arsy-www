import { graphql, Link } from "gatsby"
import React from "react"
import style from "./style.css"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"

const Archives = ({ data, location }) => {
  const tags = data.allContentfulBlogPost

  return (
    <Layout location={location}>
      <Jumbotron
        className={style.jumbotron}
        title="What is the sound of mind at rest?"
      />
      <div className="row">
        <div className="col">This is one way ag</div>
        <div className="col">
          {tags.group.map(tag => (
            <span key={tag.fieldValue}>
              <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
              <b>{" - "}</b>
            </span>
          ))}
        </div>
      </div>
    </Layout>
  )
}

Archives.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default Archives

export const pageQuery = graphql`
  query {
    allContentfulBlogPost {
      group(field: tags) {
        field
        fieldValue
        totalCount
      }
    }
  }
`
