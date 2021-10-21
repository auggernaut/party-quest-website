import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
// import Contact from "../components/Contact/contact"
// import { Link } from "react-scroll"

import partyquestCardsDeck from "../images/partyquest-cards-deck.png"
import SEO from "../components/SEO"

import { IconContext } from "react-icons"

export default () => (
  <>
    <Layout>
      <SEO />
      <Banner />
      <TextBlock
        id="about"
        title="Go on epic adventures without all the fuss."
        paragraph="Let's face it, you and your friends can't meet every week to dig through manuals and check stats. But your imagination yearns to be free! That's why we took the essence of tabletop roleplay games, threw out most of the complexity, and put it all in a little box so you can go on a quest with anyone in record time."
      >
      </TextBlock>
			<img src={partyquestCardsDeck} alt="Scene Cards" id="deckCards"/>
      <TextBlockImg
        id="how-to-play"
        title="How to Play"
        subtitle="Party Quest is designed to be as easy to learn as possible. Watch this video to get started quickly."
      >
        <iframe width="560" height="315" id='howToVid' src="https://www.youtube.com/embed/Knau88eqNfM" title="How to play Party Quest" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<p>
          Read the full up-to-date <a href="https://docs.google.com/document/d/1fTr2XkiEnA0suVHdzazEPj3fywvVE2qd/edit?usp=sharing&ouid=106580776012275822055&rtpof=true&sd=true" class="rules">rules</a>.
        </p>
			</TextBlockImg>
      <TextBlock
        id="playtesting"
        title="Interested in Playtesting?"
        paragraph="We're looking for individuals and groups who would would like to try out the game and help with it's development."
      >
        {/* <Link to="perks" smooth={true} duration={500}>
          <Button cta="Tell Me More!" />
        </Link> */}
        <p>Fill out <a href="https://forms.gle/tbXakeUiS3m7fQFP6">
          this form</a> and we'll contact you shortly.</p>
      </TextBlock>
      {/* <Contact
        id="contact"
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      /> */}
    </Layout>
  </>
)
