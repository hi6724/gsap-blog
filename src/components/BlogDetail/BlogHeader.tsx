import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../color";

import { getTypeColor } from "../Home/Blog";

function BlogHeader({ info }: any) {
  const [icon, setIcon] = useState("");
  const url =
    info.title.replaceAll(" ", "-") + "-" + info.id.replaceAll("-", "");
  useEffect(() => {
    const iconType = info.icon.type;
    console.log(info.icon.type);
    if (info.icon.type === "file") {
      setIcon(info.icon.file.url);
    } else {
      setIcon(info.icon[iconType]);
    }
    console.log(icon);
  });
  return (
    <Container>
      <Header type={info.type}>
        <h3>{info.type}</h3>
        <CreatedAt>{info.createdAt.split("T")[0]}</CreatedAt>
      </Header>
      <a target="_blank" href={"https://wakeful-tax-728.notion.site/" + url}>
        show in Notion
      </a>
      <Title>
        <Icon>{icon.length > 10 ? <img src={icon} /> : icon}</Icon>
        <h1>{info.title}</h1>
      </Title>
    </Container>
  );
}

export default BlogHeader;

const Container = styled.div<any>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

const Header = styled.div<any>`
  display: flex;
  justify-content: space-between;
  font-family: "BM-Jua";
  border-bottom: 2px solid ${(p) => getTypeColor(p.type)};
  h3 {
    color: ${(p) => getTypeColor(p.type)};
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

const CreatedAt = styled.span`
  color: ${colors.darkGray};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-family: "BM-Pro";
  color: ${colors.lightGray};
  gap: 1rem;
`;
const Icon = styled.span`
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
