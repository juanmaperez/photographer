
const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
          "TweenLite": path.resolve('node_modules', 'gsap/src/minified/TweenLite.min.js'),
          "TweenMax": path.resolve('node_modules', 'gsap/src/minified/TweenMax.min.js'),
          "TimelineLite": path.resolve('node_modules', 'gsap/src/minified/TimelineLite.min.js'),
          "TimelineMax": path.resolve('node_modules', 'gsap/src/minified/TimelineMax.min.js'),
          "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
          "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
          "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js')
      },
    },
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post.js');

  return graphql (
    `{
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              date
              path
              title
              description
              thumbnail {
                childImageSharp {
                    fluid(maxWidth: 1500) {
                        src
                    }
                }
              }
              images {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 1500) {
                        src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`
  ).then( result => {
    if (result.errors) {
      return Promise.reject (result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }, index ) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })

}
