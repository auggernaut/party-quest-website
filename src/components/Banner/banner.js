import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Button from "../Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import heroshot from "../../images/monster-characters.png"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "clouds.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <BannerWrapper>
      <BackgroundImage
        Tag="section"
        className="hero-image"
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="hero-content">
					<img src={heroshot} alt="Pick a game" className="heroshot"/>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
          >
          	<span>Unleash</span> your imagination.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
          >
            The tabletop roleplay game that's fast, easy, and infinite.
          </motion.p>
          <Link to="about" smooth={true} duration={500}>
            <Button cta="Learn More" anchor={true} href="linking" />
          </Link>
        </div>
      </BackgroundImage>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.section`
  .gatsby-image-wrapper {
    height: 100vh;
    color: #fff;
    }

    .hero-content {
      text-align: center;
      height: 100%;
      width: 100%;
      max-width: 400px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;

			.heroshot {
				max-width: 500px;
				margin: 0 auto;
			}

      @media (min-width: 768px) {
        max-width: 650px;
      }

      h1 {
        font-size: 2.5rem;
        line-height: 1.2;

        span {
          background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      p {
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.2;
        font-size: 1.35rem;

        @media (min-width: 768px) {
          font-size: 1.45rem;
        }

        @media (min-width: 1200px) {
          font-size: 1.6rem;
        }
      }

      button,
      .anchor {
        margin: 0 auto;
      }

      @media (min-width: 768px) {
        max-width: 800px;

        h1 {
          font-size: 3rem;
        }
      }

      @media (min-width: 1200px) {
        h1 {
          font-size: 4rem;
        }
      }

			@media (max-width: 768px) {
				.heroshot {
					max-width: 300px;
					margin: 0 auto;
				}
    }
  }
`

export default Banner
