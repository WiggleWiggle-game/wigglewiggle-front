"use client";
import PaintBoard from "@/components/paintBoard/PaintBoard";
import { styled } from "styled-components";
const Editor = () => {
  return (
    <Container>
      <PaintBoard />
    </Container>
  );
};

export default Editor;

const Container = styled.div`
  height: calc(100vh - 100px);
`;
