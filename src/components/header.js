/** @jsx jsx **/
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx, css } from '@emotion/core'
import { colors as c } from "../style/variables"

const style = css`
  padding: 15px;
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }

  &:hover {
    a {
      opacity: 1;
    }
  }


  a {
    transition: color .2s ease-in-out;
    color: ${c.text};
    opacity: .6;
    text-decoration: none;
    marginBottom: 1.45rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .headerLinks {
    margin-left: 20px;
  }
`

const Header = ({ siteTitle }) => (
  <header
    css={style}
  >
    <Link
      to="/"
    >
      <h1 style={{ margin: 0 }}>
        {siteTitle}
      </h1>
    </Link>
    <div className="headerLinks">
      <Link to="/blog">Blog</Link>
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
