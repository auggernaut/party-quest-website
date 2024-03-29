import React from "react"
import styled from "styled-components"
import "typeface-londrina-solid"
import "./reset.css"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  font-family: "Londrina Solid", sans-serif;
  color: #fff;
  /* background-color: #060c21; */
  background: linear-gradient(45deg, #060c21, #0d0139);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
    line-height: 1.4;
  }

  h1,
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -1px;
    margin: 1rem 0;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.3;
    }

    @media (min-width: 1080px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.45;
    margin: 1rem 0;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1080px) {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }

  .content-container {
    margin: 0 auto;
    width: 100%;
    max-width: 500px;

    @media (min-width: 1080px) {
      max-width: 650px;
    }
  }

  .flex-container {
    display: flex;

    &.trio-block {
      flex-direction: column;
      justify-content: center;

      @media (min-width: 992px) {
        flex-direction: row;
      }
    }
  }

  .section-padding {
    padding: 100px 30px;
  }

  .text-center {
    text-align: center;
  }

	#deckCards {
		margin-left: auto;
    margin-right: auto;
		margin-bottom: 100px;
    display: block;
	}

	@media (max-width: 768px) {
		#deckCards {
			width: 350px;
		}
		#howToVid {
			width: 350px;
		}
	}
`

export default Layout
