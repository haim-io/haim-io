import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import ScrollIcon from '../components/ScrollIcon';
import Triangle from '../components/Triangle';
import { useSiteQuery } from '../queries/useSiteQuery';
import { SECTION } from '../utils/constants';
import { getSectionHref } from '../utils/helpers';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  const { name, roles, socialLinks, deterministic } = useSiteQuery();
  const subheader = "Boosting your continuous integration, delivery infrastructure to increase your release pace."
  const subheaderParagraph = `The name Haim has its origins in Hebrew and translates to "life." At our company, we hold the belief that software engineering plays a fundamental role in the success of an organization, and it is therefore imperative to treat it as a living organism that can adapt, improve, and evolve.`

  return (
    <Section.Container id={SECTION.home} Background={Background}>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[5, 6]}
        mb={[3, 4, 5]}
      >
        {`${name}!`}
      </Heading>

      <Heading
        as="h2"
        color="primary"
        fontSize={[3, 4]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        {/* <TextLoop interval={5000}>
          {roles
            .sort(() => (deterministic ? 1 : Math.random() - 0.5))
            .map((text) => (
              <Text width={[300, 500]} key={text}>
                {text}
              </Text>
            ))}
        </TextLoop> */}
        <Text width={[500, 800]} key={subheader}>
          {subheader}
        </Text>
      </Heading>

      <Heading
        as="h3"
        color="primary"
        fontSize={[2, 3]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        <Text width={[500, 800]} key={subheaderParagraph}>
          {subheaderParagraph}
        </Text>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {socialLinks.map((sl) => (
          <Box mx={3} fontSize={[4, 5, 5]} key={sl.name}>
            <SocialLink {...sl} />
          </Box>
        ))}
      </Flex>

      <ScrollIcon href={`#${getSectionHref(SECTION.about)}`} />
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default LandingPage;
