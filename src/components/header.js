import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {

  const links = useStaticQuery(graphql`
  query linkQuery {
    allLinks {
      nodes {
        url
        title
        id
      }
    }
  }
`)

  return(
    <header
      style={{
        background: `#303030`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>

        <ul>
          { 
            links.allLinks.nodes.map((link) =>
            <li className="link" key={link.id}><Link to={link.url}>{link.title}</Link></li>
          )}          
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `helloHackers Site`,
}

export default Header
