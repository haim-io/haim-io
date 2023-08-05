import React from "react";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import { CardContainer } from "../components/Card";
import Triangle from "../components/Triangle";
import { useMediumQuery } from "../queries/useMediumQuery";
import { Post } from "../components/Post";
import { SECTION } from "../utils/constants";
import { useStaticQuery, graphql } from "gatsby";

const Writing = () => {
  // const { posts } = useMediumQuery();
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            date
            title
          }
        }
      }
    }
  `);
  const posts = data?.allMarkdownRemark?.nodes
    ?.filter(({ frontmatter: { slug } }) => slug)
    ?.map(({ frontmatter }) => {
      return {
        title: frontmatter.title,
        text: "subtitle",
        cover: `123`,
        url: `/posts/${frontmatter.slug}`,
        date: frontmatter.date,
        time: "10min",
      };
    });

  return (
    <Section.Container id={SECTION.writing} Background={Background}>
      <Section.Header name={SECTION.writing} icon="✍️" label="writing" />
      <CardContainer minWidth="300px">
        <Fade direction="down" triggerOnce cascade damping={0.5}>
          {posts.map((p) => (
            <Post {...p} key={p.url} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={["15vh", "10vh"]}
      width={["100vw", "100vw"]}
      position="top-left"
    />

    <Triangle
      color="primary"
      height={["50vh", "40vh"]}
      width={["70vw", "40vw"]}
      position="bottom-left"
    />

    <Triangle
      color="secondary"
      height={["40vh", "15vh"]}
      width={["100vw", "100vw"]}
      position="bottom-right"
    />
  </>
);

export default Writing;
