import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import PxtoRem from "../../modules/PxtoRem";
import Themes from "../../styled-components/themes";

const Item = styled(Link)`
  display: block;
  width: 100%;
  position: relative;
  padding: ${PxtoRem(25)};
  ${props => props.theme.Media.xlarge`padding-left: ${PxtoRem(200)};`}
  ${props => props.theme.Media.large`padding-left: ${PxtoRem(200)};`}
  ${props => props.theme.Media.desktop`padding-left: ${PxtoRem(200)};`}
  ${props => props.theme.Media.tablet`padding-left: ${PxtoRem(175)};`}
  background-color: white;
  margin-bottom: ${PxtoRem(10)};
`;

const Thumbnail = styled.div(props => {
  return css`
    width: ${PxtoRem(100)};
    height: ${PxtoRem(200)};
    transition: all 0.2s;
    margin-right: ${PxtoRem(50)};
    float: left;
    top: ${PxtoRem(25)};
    left: ${PxtoRem(25)};
    position: absolute;
    ${props.theme.Media.xlarge`width: ${PxtoRem(125)}; height: ${PxtoRem(
      230
    )};`}
    ${props.theme.Media.large`width: ${PxtoRem(125)}; height: ${PxtoRem(230)};`}
    ${props.theme.Media.desktop`width: ${PxtoRem(125)}; height: ${PxtoRem(
      230
    )};`}
    ${props.theme.Media.phone`
    width: 100%; 
    padding-top: 70%;
    margin-left: 0;
    margin-bottom: ${PxtoRem(15)}
    position: relative;
    top: 0;
    left: 0;
    `}
    ${props.image ? `background-image: url("${props.image}");`: null}
    background-size: cover;
    background-position: center;
    `;
});

const ItemContent = styled.div`
  float: left;
`;

class ContentItem extends React.Component {
  render() {
    console.log("item", this.props.item);
    let {node} = this.props.item;
    let {frontmatter, excerpt} = node;
    let { thumbnail, date, title, category, path } = frontmatter;
    return (
      <li>
        <ThemeProvider theme={Themes}>
          <Item className="clearFix" to={path}>
            <Thumbnail image={thumbnail}/>
            <ItemContent className="clearFix">
            <span>{category}</span>
            <h1>{title}</h1>
            <p>{excerpt}</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              ipsam rem sed! A ex illum cumque fuga nam facere illo minima
              nesciunt, aliquid similique, ut et ratione blanditiis harum
              explicabo incidunt maxime alias beatae corrupti quia earum rerum
              doloribus. Labore, recusandae voluptatem nobis excepturi, nemo, ex
              doloribus modi numquam quasi fuga enim reprehenderit ipsam animi
              assumenda vitae! Magni, repellat? Dolor esse architecto
              consectetur eum expedita dolorum numquam soluta sed, earum a error
              asperiores neque, assumenda tenetur culpa. Soluta dolor accusamus
              laboriosam accusantium, incidunt molestiae laborum maiores hic
              quod repellendus laudantium possimus quos nobis dolores? Vel autem
              tempore architecto doloribus magni.
              <p>{date}</p>
            </ItemContent>
          </Item>
        </ThemeProvider>
      </li>
    );
  }
}

export default ContentItem;
