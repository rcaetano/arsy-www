import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function StaticImage({ src, alt, className }) {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)
  const image = allFile.edges.find(
    edge => edge.node.name === src
  )
  if (!image) {
    return <p>{"image not found:"}</p>
  }
  return <img className={className}  src={image.node.publicURL} alt={alt} />
}
