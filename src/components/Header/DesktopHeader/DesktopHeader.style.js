"use client";
import styled from "styled-components";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import MainWrapper from "@/components/MainWrapper";
import Typography from "@/components/Typography";

export const Wrapper = styled(MainWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 35px;
  position: relative;

  ${MEDIA_QUERIES["tablet"]} {
    display: none;
  }
`;


export const Navigation = styled.nav``;

export const LinksWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 34px;
`;

export const LinksItem = styled.li``;

export const LinkText = styled(Typography)`
  --color: ${COLORS["white"]};
  --letterSpacing: ${2 / 16}rem;

  text-decoration: none;
`;
