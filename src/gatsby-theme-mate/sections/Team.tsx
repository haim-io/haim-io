import React, { useState } from 'react'
import { Box, Image, Flex, Button, Text, Heading } from 'rebass/styled-components'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import Section from '../components/Section'
import Triangle from '../components/Triangle'
import { SECTION } from '../utils/constants'
import filippo from '../../../media/filippo.jpeg'
import furlan from '../../../media/furlan.jpeg'
import SocialLink, { SocialLinkProps } from '../components/SocialLink'
import { Card } from '../components/Card'
import Modal from '../components/Modal'

const CardContainer = styled(Box)`
/* Add your styles for the card container here */
`

const Team = () => {
  const peopleData = [
    {
      name: 'Filippo Raimondi',
      profileImage: filippo,
      title: 'Founder & CEO',
      description: 'With 16+ Years in Software Engineering | CI/CD Strategist | Alumni of ThoughtWorks, IBM, ASOS & More | Open Source Testing Pioneer for Cypress | Metrocamp Graduate.',
      socialLinks: [{
        icon: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/filippo-raimondi', invert: false
      }] as SocialLinkProps[]
    },
    {
      name: 'Felipe Furlan',
      profileImage: furlan,
      title: 'Founder & COO & CFO',
      description: 'With extensive knowledge in technology, Felipe Furlan led the digital transformation process of different companies. Its mission is effectively constructing Strategies and Organization of Products and Technology. Felipe has been living in Germany since 2019 and serves as CIO at MZ and VP of Engineering at Jimdo, both companies in the Information Technology sector. Felipe holds a Systems Analysis degree from PUC Campinas and an MBA in Strategic IT Management from FIAP.',
      socialLinks: [{
        icon: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/ffurlansilva/', invert: false
      }] as SocialLinkProps[]
    }
  ]
  const [showModal, setShowModal] = useState(false)
  const [modalPerson, setModalPerson] = useState(peopleData[0])

  const handleClick = (person) => {
    console.log(person)
    setModalPerson(person)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
    <div>
      <Button color='#000000' className='modal-btn' onClick={handleClose} primary>
        Close
      </Button>
    </div>
  )


  return (
    <Section.Container id={SECTION.team} Background={Background}>
      <Section.Header name={SECTION.team} label="team" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        {showModal && <Modal onClose={handleClose} actionBar={actionBar}>
          <Flex maxWidth={'52ch'} alignSelf='center' flexDirection='column' justifyContent="center" alignItems="center" flexWrap="wrap">
            <ModalPicture
              mt={[4, 4, 0]}
              ml="auto"
              mr="auto"
              src={modalPerson.profileImage}
              alt={modalPerson.name}
            />
            <Heading mt={4} mb={3} color="black" fontSize={['2rem', '2.5rem', '3rem']} as="h2">
              {modalPerson.name}
            </Heading>
            <Heading mb={3} color="black" fontSize={['1.3rem', '1.6rem', '2rem']} as="h3">
              {modalPerson.title}
            </Heading>
            <Text><p>{modalPerson.description}</p></Text>
          </Flex>
        </Modal>}
        {peopleData.map((person, index) => (
          <CardContainer
            key={index}
            width={[1 / 2, 1 / 2, 1 / 3]} // Adjust the width for different screen sizes
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
                <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
                  <div>
                    {person.socialLinks.map((sl) => (
                      <Box gap={3} fontSize={[4, 5, 5]} key={sl.name}>
                        <SocialLink {...sl} />
                      </Box>
                    ))}
                  </div>
                  <Button color='#000000' className='modal-btn' onClick={() => handleClick(person)}>
                    <Text>Show more</Text>
                  </Button>
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
  border-radius: 0;
  transition: all 0.4s ease-out;
  width: 100%;
  aspect-ratio: auto;

  &:hover {
    border-radius: 50%;
  }
`

const ModalPicture = styled(Image)`
  border-radius: 0;
  transition: all 0.4s ease-out;
  width: auto;
  max-height: 35vh;
  aspect-ratio: auto;
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
