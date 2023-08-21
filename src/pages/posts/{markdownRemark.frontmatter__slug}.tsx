import React from "react"
import { graphql } from "gatsby"
import { Heading, Flex, Box, Text } from "rebass/styled-components"
import Layout from "../../gatsby-theme-mate/components/Layout"
import { IconLink } from "../../gatsby-theme-mate/components/SocialLink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getIconDefinition } from "../../gatsby-theme-mate/utils/icons"

const Post = ({ data }) => {
  // console.log(data);
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const iconDefinition = getIconDefinition('arrow-left')
  return (
    <Layout>
      <Flex flexDirection='column' py="4">
        <Box
          sx={{
            maxWidth: 'min(98%, 60ch)',
            mx: "auto",
            px: 3,
          }}
        >
          <Box
            sx={{
              mb: 3
            }}
          >
            {iconDefinition && <IconLink
              href={'/'}
              invert={false}
              aria-label={'Homepage'}
            >
              <FontAwesomeIcon icon={iconDefinition} title={'Homepage'} />
            </IconLink>}
          </Box>
          <Heading fontSize={[5, 6, 7]} color="primary" as="h1">
            {frontmatter.title}
          </Heading>
          <Heading fontSize={[2, 3, 4]} color="primary" as="h2">
            {frontmatter.date}
          </Heading>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Box>

      </Flex>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default Post
