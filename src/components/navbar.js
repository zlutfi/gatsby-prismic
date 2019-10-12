import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      prismicMenu(uid: { eq: "main" }) {
        data {
          menu_title {
            text
          }
          menu_items {
            menu_link_title {
              text
            }
            menu_link {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <nav>
      <ul>
        {/* Homepage Link */}
        <li>
          <Link to="/" alt="Home" activeClassName="active">
            <strong>Home</strong>
          </Link>
        </li>
        {/* Page 2 Link */}
        <li>
          <Link to="/page-2" alt="Page 2" activeClassName="active">
            <strong>Page 2</strong>
          </Link>
        </li>
        {/* Dynamic links from CMS */}
        {data.prismicMenu.data.menu_items.map((menu, index) => (
          <li key={index}>
            <Link
              to={menu.menu_link.url}
              alt={menu.menu_link_title.text}
              activeClassName="active"
            >
              <strong>{menu.menu_link_title.text}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
