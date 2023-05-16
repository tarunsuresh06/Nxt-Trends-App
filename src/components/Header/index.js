import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      className="nav-logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />

    <div className="nav-items-container">
      <li className="nav-item-box">
        <Link className="nav-item" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item-box">
        <Link className="nav-item" to="/products">
          Products
        </Link>
      </li>
      <li className="nav-item-box">
        <Link className="nav-item" to="/cart">
          Cart
        </Link>
      </li>
      <button className="logout-btn" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
