import React, { useState } from 'react'
import { Card, Box, Image, Flex, Button, Text, Heading } from 'rebass/styled-components'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import Section from '../components/Section'
import Triangle from '../components/Triangle'
import { SECTION } from '../utils/constants'
import filippo from '../../../media/filippo.jpg'
import sam from '../../../media/sam.jpg'
import furlan from '../../../media/furlan.jpeg'
import SocialLink, { SocialLinkProps } from '../components/SocialLink'
import Modal from '../components/Modal'

const CardContainer = styled(Box)`
/* Add your styles for the card container here */
`

const PeopleCard = styled(Card).attrs({
  bg: '#333333',
  boxShadow: 0,
})`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  border-radius: 8px;

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`


const Team = () => {
  const peopleData = [
    {
      name: 'Filippo Raimondi',
      profileImage: filippo,
      title: 'Founder & CEO',
      description: 'With over 16 years of experience in software engineering, I have specialized in revolutionizing testing practices within complex organizational structures. An alumni of ThoughtWorks, IBM, and ASOS, my expertise is further underscored by significant contributions to open-source testing, most notably with Cypress. My leadership embodies a combination of strategic vision and deep technical insight, ensuring high-performing teams that deliver excellence in testing processes and methodologies.',
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
    },
    {
      name: 'Sam Taylor',
      profileImage: sam,
      title: 'Founder & CTO',
      description: 'Experienced technical leader adept at accelerating delivery in complex regulated organisations, startups, and media. With a proven track record spanning 16+ years, Sam has the experience to lead strategic planning and the technical insight to enable high-performing teams.',
      socialLinks: [{
        icon: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/samjltaylor/', invert: false
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
      <Flex justifyContent="center" alignItems="stretch" flexWrap="wrap">
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
            <Fade style={{ height: '100%' }} direction="down" triggerOnce>
              <PeopleCard>
                <ProfilePicture
                  ml="auto"
                  mr="auto"
                  src={person.profileImage}
                  alt={person.name}
                />
                <h3 style={{ minHeight: '46px' }}>{person.name}</h3>
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
              </PeopleCard>
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
  height: 150px;
  object-fit: cover;
  object-position: top;
  
  &:hover {
    border-radius: 10%;
  }
  
  @media screen and (min-width: 350px) and (max-width: 725px) {
    height: 350px;
  }
  @media screen and (min-width: 726px) {
    height: 450px;
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
