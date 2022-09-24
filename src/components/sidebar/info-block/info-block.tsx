import React from "react";
import { Container, Item, Spacer, Title } from "./style";

interface InfoBlockProps {
  title?: string;
  content: ContentProps[];
}

interface ContentProps {
  imgSrc: any;
  alt: string;
  name: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  title, content
}) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {content.map(c => 
        <Item>
          <img alt={c.alt} src={c.imgSrc} />
          <p>{c.name}</p>
        </Item>
      )}
      <Spacer />
    </Container>
  );
}

export default InfoBlock;