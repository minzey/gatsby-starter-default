import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { DEFAULT_BREAKPOINTS } from "gatsby-plugin-image/dist/src/image-utils"
import "./index_layout.scss"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      textAlign: `center`
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
            color: `var(--slate)`,
            textDecoration: `none`,
            textTransform: `uppercase`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
