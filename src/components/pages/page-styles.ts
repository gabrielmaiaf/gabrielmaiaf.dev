import styled from 'styled-components';

import { blinkTextCursor, hello, typewriter } from '../../helpers/keyframes';
import img from '../../data/images/computer-1209641_1280.jpg';

export const HomeStyles = styled.div`
  background-color: ${props => props.theme.background};

  .helloImage {
    background-image: url(${img});
    height: calc(100vh - 62px);
    display: flex;
    justify-content: flex-end;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .helloWorld {
    @media (max-width: 960px) {
      background-color: transparent;
    }
    background-color: ${props => props.theme.standard};
    color: #66b58f;
    font-family: 'Inconsolata', monospace;
    position: relative;
    margin: 0 4vw 0 auto;
    border-right: 2px solid #66b58f;
    font-size: 32px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
  }

  .oldComputer {
    @media (max-width: 860px) {
      background-image: linear-gradient(
        to bottom right,
        rgba(255, 0, 0, 0),
        #000 70%
      );
    }
    width: 55em;
    padding: 0 12px;
    display: flex;
    align-items: center;
    background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #000 70%);
  }

  .animTyping {
    animation: ${typewriter} 4s steps(14) 1s 1 normal both,
      ${blinkTextCursor} 800ms steps(14) infinite normal;
  }

  .presentationSection {
    padding: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 25px 0;

    img {
      border-radius: 20%;
    }
  }

  .presentationContact,
  .presentationTitle {
    color: ${props => props.theme.primaryContrast};
    text-align: center;
  }

  .presentationContact {
    padding: 40px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 25px 40px 0;
    border-top: 1px solid ${props => props.theme.primaryBorder};
  }

  .contactButton {
    cursor: pointer;
    background-color: ${props => props.theme.primaryGradient2};
    border: 2px solid ${props => props.theme.primaryGradient2};
    color: ${props => props.theme.standardBackground};
    padding: 10px 20px;
    border-radius: 4px;
  }

  /* Central idea from https://freefrontend.com/css-arrows/#arrows-down - John Urbank */
  .seeMoreContainer {
    @media (max-width: 960px) {
      top: 78%;
      left: 52%;
    }
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(0deg);

    &:hover {
      cursor: pointer;
      .arrow {
        top: 50%;
        &::before {
          transform: translate(-18%, -50%) rotateZ(-30deg);
        }

        &::after {
          transform: translate(-92%, -50%) rotateZ(30deg);
        }
      }
    }
  }

  .arrow {
    position: absolute;
    left: 50%;
    transition: all 0.4s ease;

    &::before,
    &::after {
      transition: all 0.4s ease;
      content: '';
      display: block;
      position: absolute;
      transform-origin: bottom right;
      background: #66b58f;
      width: 50px;
      height: 4px;
      border-radius: 10px;
      transform: translate(-33%, -50%) rotateZ(-45deg);
    }

    &:after {
      transform-origin: bottom left;
      transform: translate(-77%, -50%) rotateZ(45deg);
    }

    &:nth-child(1) {
      opacity: calc(0.3 * 1);
      top: calc(15px + (100% * 1 / 5));
      animation: ${hello} 0.75s linear infinite;
      animation-delay: calc(1 * 0.25s);
    }

    &:nth-child(2) {
      opacity: calc(0.3 * 2);
      top: calc(15px + (100% * 2 / 5));
      animation: ${hello} 0.75s linear infinite;
      animation-delay: calc(2 * 0.25s);
    }

    &:nth-child(3) {
      opacity: calc(0.3 * 3);
      top: calc(15px + (100% * 3 / 5));
      animation: ${hello} 0.75s linear infinite;
      animation-delay: calc(3 * 0.25s);
    }
  }
`;

export const BlogStyles = styled.div`
  padding: 20px 25px 0;
  background-color: ${props => props.theme.footer};
  min-height: 71vh;

  h1 {
    margin-top: 0;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
    text-align: start;
  }

  a {
    color: ${props => props.theme.primaryContrast};
    text-decoration: none;
  }

  header {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }

  .time {
    margin-top: 5px;
    font-size: 14px;
  }
`;
