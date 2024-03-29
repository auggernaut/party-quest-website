import React, { useState } from "react"
import links from "../../constants/links"
import styled from "styled-components"
import Logo from "../../images/party-quest-logo.png"
import { Link } from "react-scroll"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavWrapper>
      <div className="masthead flex-container">
        <a href="/"><img src={Logo} alt="Party Quest logo" /></a>
        <button
          className={
            isOpen
              ? `${"toggle-btn"} ${"toggle-btn-active"}`
              : `${"toggle-btn"}`
          }
          type="button"
          aria-label="Menu Hamburger"
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul
        className={isOpen ? `${"nav-links"} ${"show-nav"}` : `${"nav-links"}`}
      >
        {links.map((item, index) => {
          return (
						!item.path ?
							<li key={index}>
								<Link
									activeClass="active"
									to={item.text}
									spy={true}
									smooth={true}
									duration={500}
									offset={-50}
								>
									{item.text}
								</Link>
							</li>
						:
						<li key={index}><a href={item.path}>{item.text}</a></li>
          )
        })}
      </ul>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;

  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;

    img {
      width: 200px;

      @media (min-width: 768px) {
        width: 200px;
      }

      @media (min-width: 1200px) {
        width: 200px;
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: center;
    background: linear-gradient(45deg, #060c21, #0d0139);
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;

    li {
      list-style: none;
      font-size: 1.25rem;
      font-weight: 400;
      margin-left: 0;
      padding: 0.75rem 0;
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: #fff;
        transition: 0.3s;

        &.active {
          color: #e609b5;
        }
      }
      &:hover {
        cursor: pointer;
        a {
          color: #e609b5;
        }
      }
    }

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    border: none;

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      transition: 0.2s ease-in;

      &:nth-child(1) {
        transform: translateY(-5px);
      }

      &:nth-child(3) {
        transform: translateY(5px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;

      li {
        margin-left: 1rem;
      }
    }
  }
`

export default Navbar
