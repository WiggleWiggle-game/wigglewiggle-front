"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";
import colors from "@/styles/color";

interface ModalProps {
  onClose: () => void;
}

type Props = {
  URI: string;
  name: string;
  tokenId: string;
  price: string;
};

const PremiumCharacterModal = ({
  onClose,
  URI,
  name,
  tokenId,
  price,
}: ModalProps & Props) => {
  return (
    <>
      <ModalOverlay>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex" }}>
            <CloseButton onClick={onClose}>X</CloseButton>
          </div>
          <Inner>
            <CharacterImg src={"https://ipfs.io/ipfs/" + URI} alt={name} />
            <Information>
              <Name>{name}</Name>
              <TokenId>{tokenId}</TokenId>
              <Price>{price}</Price>
              <Purchase>Purchase</Purchase>
            </Information>
          </Inner>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default PremiumCharacterModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: lightgray;
  padding: 20px;
  border: 3px solid #bb9f00;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  font-family: "ABeeZee";
  width: fit-content;
  height: fit-content;
  padding: 5px;
  background: none;
  border: none;
  font-size: 40px;
  color: ${colors.black};
  margin-left: auto;
  cursor: pointer;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
`;

const CharacterImg = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 18px;
  margin: 20px;
  margin-top: 0;
`;

const Information = styled.div`
  margin: 20px;
  margin-top: 0;
`;
const Name = styled.p`
  color: ${colors.black};
  font-size: 35px;
  margin-top: 25px;
  margin-bottom: 10px;
`;
const TokenId = styled.p`
  color: #726755;
  font-size: 17px;
  margin-top: 8px;
  margin-bottom: 15px;
`;
const Price = styled.p`
  color: #bb9f00;
  font-size: 28px;
  margin-top: 35px;
  margin-bottom: 0px;
`;
const Purchase = styled.button`
  font-family: "ABeeZee";
  font-size: 30px;
  color: ${colors.black};
  height: fit-content;
  width: fit-content;
  border-radius: 18px;
  border-color: ${colors.primary};
  background: ${colors.primary};
  padding: 0 20px;
  float: left;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 20px;
`;
