import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
// import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
// import Contact from "../components/Contact/contact"
// import { Link } from "react-scroll"

import perk1Img from "../images/monster.png"
import perk2Img from "../images/character.png"
import perk3Img from "../images/emojis.png"
import screenshot1 from "../images/games_list.jpg"
import screenshot2 from "../images/screenshot5.jpg"
import screenshot3 from "../images/screenshot4.jpg"
import appStore from "../images/app-store-badge.png"
import playStore from "../images/google-play-badge-1.png"
import SEO from "../components/SEO"

import { IconContext } from "react-icons"

export default () => (
  <>
    <Layout>
      <SEO />
      <Banner />
      <TextBlock
        id="about"
        title="At the heart of tabletop roleplaying is storytelling."
        paragraph="Sometimes you need a little nudge, a story prompt, some structure, and... monsters. Party Quest gets out of the way so you can focus on what matters: your story."
      >
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="What is your role?"
        subtitle="Whether you have an adventure in mind, a character with a wild backstory, or an itch to read along and react... there's a role for you."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Gamemaster creates the game."
            title="Gamemaster"
            content="Get the story started and describe what happens next."
          />
          <Perk
            img={perk2Img}
            alt="Characters take actions."
            title="Character"
            content="Design a character, take actions, and stay alive."
          />
          <Perk
            img={perk3Img}
            alt="Applaud the players."
            title="Reactor"
            content="Read along with the players and react to the story."
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Our Packages"
        para="Choose the perfect solution for you. With benefits to suit all budgets Startup can offer amazing value and expert advice"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Standard">
            <img src={screenshot3} alt="Pick a game" className="screenshot"/>
          </Package>
          <Package title="Hyper" active={true}>
            <img src={screenshot1} alt="Pick a game" className="screenshot"/>
          </Package>
          <Package title="Super">
          <img src={screenshot2} alt="Pick a game" className="screenshot"/>
          </Package>
        </IconContext.Provider>
      </Packages>
      <TextBlock
        id="download"
        title="Download the App"
        paragraph="Available for Free on iOS and Android."
      >
        {/* <Link to="perks" smooth={true} duration={500}>
          <Button cta="Tell Me More!" />
        </Link> */}
        <img src={appStore} alt="Download on the AppStore" className="appStoreButton"/>
        <img src={playStore} alt="Download on Google Play" className="appStoreButton"/>
      </TextBlock>
      {/* <Contact
        id="contact"
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      /> */}
    </Layout>
  </>
)
