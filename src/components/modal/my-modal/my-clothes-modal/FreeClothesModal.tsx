"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";
import colors from "@/styles/color";

interface ModalProps {
  onClose: () => void;
}

type Props = {
  imgSrc: string;
  name: string;
  tokenId: string;
  price: string;
};

const FreeClothesModal = ({
  onClose,
  imgSrc,
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
            <ClothesImg src={imgSrc} alt={name} />
            <Information>
              <Name>{name}</Name>
              <TokenId>{tokenId}</TokenId>
              <Price>{price}</Price>
              <ChangeOwner>ChangeOwner</ChangeOwner>
              <SellorSend>
                <Sell>Sell</Sell>
                <Send>Send</Send>
              </SellorSend>
            </Information>
          </Inner>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default FreeClothesModal;

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
  background: ${colors.white};
  padding: 20px;
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

const ClothesImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 18px;
  margin: 20px;
`;

const Information = styled.div`
  margin: 20px;
  margin-top: 0;
`;
const Name = styled.p`
  color: ${colors.black};
  font-size: 35px;
  margin: 0;
  margin-top: 5px;
`;
const TokenId = styled.p`
  color: #726755;
  font-size: 17px;
  margin-top: 5px;
`;
const Price = styled.p`
  color: #6b6b6b;
  font-size: 25px;
`;
const ChangeOwner = styled.button`
  font-family: "ABeeZee";
  font-size: 30px;
  color: ${colors.black};
  height: fit-content;
  width: fit-content;
  border-radius: 18px;
  border-color: ${colors.primary};
  background: ${colors.primary};
  padding: 0 20px;
  margin-bottom: 1px;
  cursor: pointer;
`;
const SellorSend = styled.div`
  display: flex;
  flex-direction: row;
`;
const Sell = styled.button`
  font-family: "ABeeZee";
  font-size: 28px;
  color: ${colors.black};
  height: fit-content;
  width: fit-content;
  border-radius: 18px;
  border-color: ${colors.primary};
  background: ${colors.primary};
  padding: 0 30px;
  margin-right: 2px;
  cursor: pointer;
`;
const Send = styled.button`
  font-family: "ABeeZee";
  font-size: 28px;
  color: ${colors.black};
  height: fit-content;
  width: fit-content;
  border-radius: 18px;
  border-color: ${colors.primary};
  background: ${colors.primary};
  padding: 0 30px;
  float: left;
  cursor: pointer;
`;
