import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import tw from "twin.macro"

const Image = ({ filename, className, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n =>
        n.node.relativePath.includes(filename)
      )
      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.sizes
      return (
        <Img
          alt={alt}
          fluid={imageSizes}
          tw="relative w-full max-w-full max-h-full"
          className={className}
        />
      )
    }}
  />
)

export default Image
