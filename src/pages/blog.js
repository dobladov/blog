/** @jsx jsx */
// import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { css, jsx } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const style = css`
  ul {
    list-style-type: circle;
    padding: 0;
  };
`

const SecondPage = () => (
  <StaticQuery
  query={graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              date
            }
          }
        }
      }
    }
  `}
  render={data => {
    const posts = data.allMarkdownRemark.edges

    return (
    <Layout>
      <SEO title="Page two" />
      <div css={style}>
        <h1>List of blog posts</h1>
        {posts.length > 0 ? (
          <ul>
            {posts.map(post => (
              <li key={post.node.frontmatter.path}>
              <Link
                to={post.node.frontmatter.path}
              >
                {post.node.frontmatter.title}
              </Link> <br/>
              </li>
            ))}
          </ul>
        ) : (
          <div>No posts yet</div>
        )}
        <br/>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )}}
/>
)

export default SecondPage
