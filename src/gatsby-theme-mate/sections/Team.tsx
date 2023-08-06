import React from 'react'
import { Box, Image, Flex } from 'rebass/styled-components'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import Section from '../components/Section'
import Triangle from '../components/Triangle'
import { SECTION } from '../utils/constants'
import profile from '../../../media/icon.png'
import SocialLink, { SocialLinkProps } from '../components/SocialLink'
import { Card } from '../components/Card'

const CardContainer = styled(Box)`
  /* Add your styles for the card container here */
`

const Team = () => {
  const peopleData = [
    {
      name: 'Filippo Raimondi',
      profileImage: profile,
      description: 'Principle Software Engineer in Test, QA Lead',
      socialLinks: [{
        icon: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/filippo-raimondi-84836938/', invert: false
      }] as SocialLinkProps[]
    },
    {
      name: 'Furlan',
      profileImage: profile,
      description: 'Experienced professional',
      socialLinks: [{
        icon: 'linkedin', name: 'LinkedIn', url: '', invert: false
      }] as SocialLinkProps[]
    },
    // Add more people data here
  ]

  return (
    <Section.Container id={SECTION.team} Background={Background}>
      <Section.Header name={SECTION.team} label="team" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        {peopleData.map((person, index) => (
          <CardContainer
            key={index}
            width={[1, 1 / 2, 1 / 3]} // Adjust the width for different screen sizes
            pr={[1, 2, 4]}
            mt={2}
          >
            <Fade direction="down" triggerOnce>
              <Card>
                <ProfilePicture
                  mt={[4, 4, 0]}
                  ml="auto"
                  mr="auto"
                  src={person.profileImage}
                  alt={person.name}
                />
                <h3>{person.name}</h3>
                <p>{person.description}</p>
                <Flex alignItems="center" justifyContent="start" flexWrap="wrap">
                  {person.socialLinks.map((sl) => (
                    <Box gap={3} fontSize={[4, 5, 5]} key={sl.name}>
                      <SocialLink {...sl} />
                    </Box>
                  ))}
                </Flex>

              </Card>
            </Fade>
          </CardContainer>
        ))}
      </Flex>
    </Section.Container>
  )
}

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.4s ease-out;

  &:hover {
    border-radius: 20%;
  }
`

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="bottom-right"
    />

    <Triangle
      color="primary"
      height={['10vh', '30vh']}
      width={['75vw', '50vw']}
      position="bottom-left"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </>
)

export default Team
