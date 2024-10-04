"use client";
import styled from "styled-components";
import Typography from "../Typography";
import { COLORS } from "@/constant";
import MainWrapper from "../MainWrapper";

export const Wrapper = styled.header`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  isolation: isolate;
  width: 100%;
`;

export const SubWrapper = styled(MainWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 35px;
  position: relative;
`;

export const Line = styled.hr`
  background-color: color-mix(in hsl, hsl(0, 0%, 100%) 20%, transparent);
  width: calc(100% - 50px);
  height: 1px;
  border: none;
  position: absolute;
  bottom: 0;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.img``;

export const Navigation = styled.nav``;

export const LinksWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 34px;
`;

export const LinksItem = styled.li``;

export const IconWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Icon = styled.img``;

export const LinkText = styled(Typography)`
  --color: ${COLORS["white"]};
  --letterSpacing: ${2 / 16}rem;

  text-decoration: none;
`;
