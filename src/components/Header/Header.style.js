"use client";
import { MEDIA_QUERIES } from "@/constant";
import styled from "styled-components";

export const Wrapper = styled.header`
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: var(--position);
  background-color: var(--backgroundColor);
  z-index: 1;
  isolation: isolate;
  width: 100%;
  top: 0;
  transition: background-color 0.5s ease-in-out;
`;

export const Line = styled.hr`
  background-color: color-mix(in hsl, hsl(0, 0%, 100%) 20%, transparent);
  width: calc(100% - 50px);
  height: 1px;
  border: none;
  position: absolute;
  bottom: 0;

  ${MEDIA_QUERIES["tablet"]} {
    width: calc(100% - 80px);
    background-color: color-mix(in hsl, hsl(0, 0%, 100%) 10.4%, transparent);
  }

  ${MEDIA_QUERIES["mobile"]} {
    width: calc(100% - 48px);
  }
`;

export const LogoWrapper = styled.div`
  ${MEDIA_QUERIES["tablet"]} {
    margin-right: auto;
  }

  ${MEDIA_QUERIES["mobile"]} {
    margin-left: auto;
  }
`;

export const Logo = styled.img``;

export const IconWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const Icon = styled.img``;
