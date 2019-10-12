import React from "react"
import { graphql } from "gatsby"
import { PropTypes } from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data }) => {
  const page = data.prismicPage.data
  return (
    <>
      <Layout>
        <SEO title={page.title.text} />
        <section>
          {/* Page heading */}
          <header
            dangerouslySetInnerHTML={{
              __html: page.title.html,
            }}
          />
          {/* Page content */}
          <p
            dangerouslySetInnerHTML={{
              __html: page.content.html,
            }}
          />
        </section>
      </Layout>
    </>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    prismicPage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.object.isRequired,
        content: PropTypes.object.isRequired,
      }),
    }),
  }).isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      tags
      data {
        title {
          text
          html
        }
        content {
          html
        }
      }
    }
  }
`
