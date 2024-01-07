"use client";

import { styled } from "styled-components";
import React, { CSSProperties } from "react";
import DashBoardBlock from "@/components/DashBoardBlock";

const DashBoard = () => {
  return (
    <Container>
      <DashBoardTitle>
        <Rank>Rank</Rank>
        <UserProfile>User</UserProfile>
        <Inner>
          <Win>Win</Win>
          <Lose>Lose</Lose>
          <Reward>Reward</Reward>
        </Inner>
      </DashBoardTitle>
      <DashBoardWrapper>
        <DashBoardBlock
          rank={1}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={2}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={3}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={4}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={5}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={6}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={7}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={8}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={9}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={10}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={11}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={12}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={13}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={14}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
        <DashBoardBlock
          rank={15}
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          win={2}
          lose={3}
          reward={2}
        />
      </DashBoardWrapper>
    </Container>
  );
};

export default DashBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DashBoardWrapper = styled.div`
  width: 70%;
`;

const DashBoardTitle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
`;
const Rank = styled.div`
  width: 15%;
  font-size: 40px;
  color: #c7c7c7;
  text-align: center;
`;
const UserProfile = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
  color: #ffffff;
`;
const Inner = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Win = styled.div`
  font-size: 30px;
  color: #ffeed6;
`;
const Lose = styled.div`
  font-size: 30px;
  color: #ffeed6;
  margin-left: 10px;
`;
const Reward = styled.div`
  font-size: 30px;
  color: #ffeed6;
`;
