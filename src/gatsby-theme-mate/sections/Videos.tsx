import React from "react"
import { Fade } from "react-awesome-reveal"
import Section from "../components/Section"
import { CardContainer } from "../components/Card"
import Triangle from "../components/Triangle"
import { Post } from "../components/Post"
import { SECTION } from "../utils/constants"
import { useStaticQuery, graphql } from "gatsby"

const Videos = () => {
  return (
    <Section.Container id={SECTION.videos} Background={Background}>
      <Fade direction="down" triggerOnce cascade damping={0.5}>
        <iframe className="youtube" width="560" height="315" src="https://www.youtube-nocookie.com/embed/htXe0ybca1U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Fade>
    </Section.Container>
  )
}

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={["15vh", "10vh"]}
      width={["100vw", "100vw"]}
      position="top-left"
    />

    <Triangle
      color="secondary"
      height={["50vh", "40vh"]}
      width={["70vw", "40vw"]}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={["40vh", "15vh"]}
      width={["100vw", "100vw"]}
      position="bottom-right"
    />
  </>
)

export default Videos
