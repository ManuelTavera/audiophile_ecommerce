"use client";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${250 / 16}rem;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <Title>404</Title>
      <p>The page you are looking for does not exist.</p>
    </Wrapper>
  );
}
