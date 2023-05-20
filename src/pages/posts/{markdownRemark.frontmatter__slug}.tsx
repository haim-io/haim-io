import React from "react";
import { graphql } from "gatsby";
import { Heading, Flex, Box, Text } from "rebass/styled-components";
import Layout from "../../gatsby-theme-mate/components/Layout";

const Post = ({ data }) => {
  // console.log(data);
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: 'clamp(26ch, 50%, 52ch)',
          mx: "auto",
          px: 3,
        }}
      >
        <Heading fontSize={[5, 6, 7]} color="primary" as="h1">
          {frontmatter.title}
        </Heading>
        <Heading fontSize={[2, 3, 4]} color="primary" as="h2">
          {frontmatter.date}
        </Heading>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
    </Layout>
  );
};

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
`;

export default Post;
