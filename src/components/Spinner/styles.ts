import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const spinnerCx = css`
  width: 24px;
  height: 24px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const containerCx = css`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
