import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { scroller } from "react-scroll";

import { colors } from "../../color";

type item = {
  title: string;
  to: string;
};
type Props = {
  data: item[];
  toggleOpen: Function;
};

const Items = ({ data, toggleOpen }: Props) => {
  return (
    <Container>
      <ItemsContainer>
        <Divider className="divider" />
        {data.map((el, i) => (
          <React.Fragment key={i}>
            <Item
              onClick={() => {
                toggleOpen();
                scroller.scrollTo(el.to, {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuad",
                });
              }}
            >
              <span>{el.title.toLowerCase()}</span>
            </Item>
            <Divider className="divider" />
          </React.Fragment>
        ))}
      </ItemsContainer>
      <SNSContainer>
        <AiFillGithub />
        <AiFillInstagram />
        <AiFillFacebook />
      </SNSContainer>
    </Container>
  );
};

export default Items;

const SNSContainer = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: ${colors.darkGray};
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 13rem);
`;

const Item = styled.div`
  padding: 1.3rem 0;
  display: flex;
  font-size: 1rem;
  color: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.span`
  border-bottom: 1px solid #aaa;
  height: 1px;
  width: 100%;
  transform: scaleY(0.5);
`;
