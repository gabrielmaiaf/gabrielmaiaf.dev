import { keyframes } from 'styled-components';

export const typewriter = keyframes`
  from {
    width: 0;
  }

  to {
    width: 6.5em;
  }
`;

export const blinkTextCursor = keyframes`
  from {
    border-right-color: #66B58F;
  }
  to {
    border-right-color: transparent;
  }
`;

export const hello = keyframes`
  0% {opacity: .3;}
  25% {opacity: .5;}
  50% {opacity: .8;}
  75% {opacity: 1;}
`;
