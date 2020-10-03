const path = require("path")
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplateMarkdown = path.resolve("./src/templates/blogMarkdown.js")
  const blogTemplateContentful = path.resolve(
    "./src/templates/blogContentful.js"
  )
  const markdownRes = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  markdownRes.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplateMarkdown,
      path: `/markdownBlog/${edge.node.fields.slug}`,
      context: {
        id: edge.node.id,
        slug: edge.node.fields.slug,
      },
    })
  })

  // CONTENTFUL PAGES
  const contentfulRes = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
              id
              slug
          }
        }
      }
    }
  `)
  contentfulRes.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplateContentful,
      path: `/contentfulBlog/${edge.node.slug}`,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })
}
