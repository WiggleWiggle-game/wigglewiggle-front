"use client";

import colors from "@/styles/color";
import { styled } from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

import PremiumCharacterModal from "@/components/modal/market-place-modal/character-modal/PremiumCharacterModal";
import PremiumClothesModal from "@/components/modal/market-place-modal/clothes-modal/PremiumClothesModal";
import PremiumCharacterBlock from "@/components/PremiumCharacterBlock";
import PremiumClothesBlock from "@/components/PremiumClothesBlock";

const MarketPlacePremium = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [openedModal, setOpenedModal] = useState("");

  return (
    <>
      {openedModal === "character" && (
        <PremiumCharacterModal
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          tokenId={"dksfldkfsdlkfkdjf"}
          price={"$000"}
          onClose={() => setOpenedModal("")}
        />
      )}
      {openedModal === "clothes" && (
        <PremiumClothesModal
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          tokenId={"dksfldkfsdlkfkdjf"}
          price={"$000"}
          onClose={() => setOpenedModal("")}
        />
      )}

      <Container>
        <Header>
          <FreeOrPremium
            onClick={() => router.push("/market-place/free")}
            $isClicked={pathname === "/market-place/free"}
          >
            Free
          </FreeOrPremium>
          <Item style={{ fontSize: "50px", margin: "0" }}>|</Item>
          <FreeOrPremium
            onClick={() => router.push("/market-place/premium")}
            $isClicked={pathname === "/market-place/premium"}
          >
            Premium
          </FreeOrPremium>
        </Header>
        <MyProperty>
          <MyCharacterContainer>
            <Title style={{ marginTop: "0px" }}>
              <Item>Character</Item>
            </Title>
            <MyCharacter style={{ marginLeft: "40px" }}>
              <PremiumCharacterBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("character")}
              />
              <PremiumCharacterBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("character")}
              />
              <PremiumCharacterBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("character")}
              />
              <PremiumCharacterBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("character")}
              />
            </MyCharacter>
          </MyCharacterContainer>

          <MyClothesContainer>
            <Title style={{ marginTop: "0px" }}>
              <Item>Clothes</Item>
            </Title>
            <MyClothes style={{ marginLeft: "40px" }}>
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"B+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"C+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
            </MyClothes>
          </MyClothesContainer>
        </MyProperty>
      </Container>
    </>
  );
};

export default MarketPlacePremium;

const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 30px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
`;
const FreeOrPremium = styled.button<{ $isClicked: boolean }>`
  font-size: 45px;
  color: #dbd8cf;
  height: fit-content;
  width: fit-content;
  border: 0;
  background: transparent;
  padding: 0 19px;
  float: left;
  color: ${(props) => (props.$isClicked ? colors.primary : colors.button)};
  cursor: pointer;
`;

const MyProperty = styled.section`
  display: flex;
  flex-direction: row;
`;
const MyCharacterContainer = styled.div`
  width: auto;
  height: auto;
`;
const MyClothesContainer = styled.div`
  width: auto;
  height: auto;
`;

const MyCharacter = styled.div``;
const MyClothes = styled.div``;

const Title = styled.div`
  width: 100%;
  height: fit-content;
  padding: 35px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Item = styled.div`
  color: #d3d3d3;
  font-size: 37px;
  line-height: 90%;
  margin-bottom: 25px;
  margin-left: 35px;
`;
