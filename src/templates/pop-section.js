import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class POPTemplate extends React.Component {
  renderSectionLinkItem(section, forward) {
    if (section) {
      if (forward) {
        return (
          <p>
            <span>Continue reading the next section</span>
            <Link to={`/proof-of-process/${section.slug}`}>
              {section.title}
            </Link>
          </p>
        )
      } else {
        return (
          <li>
            <Link to={`/proof-of-process/${section.slug}`}>
              {section.title}
            </Link>
          </li>
        )
      }
    } else {
      return <p>{"No link"}</p>
    }
  }

  render() {
    const section = this.props.data.contentfulProofOfProcess
    const { title, body, slug, prevSection, nextSection } = section
    return (
      <Layout>
        <Link to="/proof-of-process" className={'float-right pt-3'}>Table of Contents</Link>
        <h1>{title}</h1>        
        <div
          className={"contenful"}
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.html,
          }}
        />
        <div>
          <ul>
            {this.renderSectionLinkItem(prevSection)}
            <li>
              
            </li>
            {this.renderSectionLinkItem(nextSection)}
          </ul>
        </div>
      </Layout>
    )
  }
}

POPTemplate.propTypes = propTypes

export default POPTemplate

export const pageQuery = graphql`
  query($id: String!) {
    contentfulProofOfProcess(id: { eq: $id }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
      prevSection {
        title
        slug
      }
      nextSection {
        title
        slug
      }
    }
  }
`
