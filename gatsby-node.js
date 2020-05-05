const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/eventTemplate.js`),
    })
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const links = [
    { title: "Events", url: "/events" },
    { title: "Team", url: "/team" },
  ]
  links.forEach(link => {
    const node = {
      id: createNodeId(link.title),
      title: link.title,
      url: link.url,
      internal: {
        type: "Links",
        contentDigest: createContentDigest(link),
      },
    }
    actions.createNode(node)
  })
}