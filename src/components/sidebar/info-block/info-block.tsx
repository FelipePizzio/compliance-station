import React, { useEffect, useState } from "react";
import { Container, Item, Spacer, Title } from "./style";

interface InfoBlockProps {
  title?: string;
  secondTitle?: string;
  content: ContentProps[];
  hide?: boolean;
}

interface ContentProps {
  imgSrc: any;
  alt: string;
  name?: string;
  url: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  secondTitle,
  content,
  hide
}) => {
  const [urlAtual, setUrlAtual] = useState('');

  useEffect(() => {
    const index = window.location.href.lastIndexOf('/'); 
    const url = window.location.href.slice(index+1);
    setUrlAtual(url);
  }, []);

  const redirect = url => {
    window.location.href = url;
    setUrlAtual(url);
  };
  
  return (
    <Container>
      {hide ? (secondTitle && <Title>{secondTitle}</Title>) : (title && <Title>{title}</Title>)}
      {content.map(c => 
        <Item 
          onClick={() => redirect(c.url)}
          className={urlAtual === c.url ? 
            'active' : ''}
          >
          <img alt={c.alt} src={c.imgSrc} />
          {!hide && <p>{c.name}</p>}
        </Item>
      )}
      <Spacer />
    </Container>
  );
}

export default InfoBlock;