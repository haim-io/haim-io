import React, { useState } from 'react'
import Headroom from 'react-headroom'
import { Button, Box, Link as RebassLink, Flex, Image } from 'rebass/styled-components'
import styled from 'styled-components'
import Link from './Link'
import { useHelmetQuery } from '../queries/useHelmetQuery'
import { SECTION } from '../utils/constants'
import { getSectionHref } from '../utils/helpers'
import Modal from './Modal'
import { getIconDefinition } from '../utils/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const { profile } = useHelmetQuery()

  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
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

  const navIcon = getIconDefinition('bars')

  const mobileLinkClick = () => {
    setShowModal(false)
  }

  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <RebassLink href={`#${getSectionHref(SECTION.home)}`} variant="empty">
          <Flex justifyContent="center">
            <Image
              src={profile.bigIcon.src}
              height={['60px', '80px']}
              width={['60px', '80px']}
              alt="Portfolio Logo"
              p={2}
              css={{ borderRadius: '20px', cursor: 'pointer' }}
            />
          </Flex>
        </RebassLink>
        {showModal && <Modal onClose={handleClose} actionBar={actionBar}>
          <SectionLinks className='mobile-nav-links' onLinkClick={mobileLinkClick} />
        </Modal>}
        <Button color='background' className='nav-btn' onClick={handleClick}>
          {navIcon && <FontAwesomeIcon size='lg' icon={navIcon} title='Menu' />}
          {!navIcon && 'Menu'}
        </Button>
        <SectionLinks className='desktop-nav-links' />
      </Flex>
    </StyledHeadroom>
  )
}

const SectionLinks = ({ className, onLinkClick }: { className?: string, onLinkClick?: any }) => {
  return (
    <Box className={className} mr={[0, 3, 5]}>
      {(Object.keys(SECTION) as Array<keyof typeof SECTION>)
        .filter((id) => id !== 'home')
        .map((id) => (
          <Box key={id} ml={[2, 3]} color="background" fontSize={[2, 3]}>
            <Link href={`#${id}`} tabIndex={0} onClick={() => onLinkClick?.(id)}>
              {SECTION[id]}
            </Link>
          </Box>
        ))}
    </Box>
  )
}

const StyledHeadroom = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  position: absolute;
  width: 100%;
`

export default Header
