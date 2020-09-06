const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require(`lodash`)

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve(`./src/templates/tags.js`)

  return graphql(`
    query {
      posts: allMdx(
        filter: {
          frontmatter: { published: { eq: true }, featured: { eq: true } }
        }
        limit: 1000
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
      tags: allMdx(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    const posts = result.data.posts.nodes

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      })
    })

    const tags = result.data.tags.group

    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
