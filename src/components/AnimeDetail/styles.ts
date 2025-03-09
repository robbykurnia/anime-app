import { css } from "@emotion/react";

export const titleContainerCx = css`
  background: #e1e7f5;
  padding: 16px 32px 16px 12px;

  h1 {
    font-size: 18px;
    margin: unset;
  }
  h2 {
    font-size: 16px;
    color: #777;
    margin: unset;
  }
`;

export const descCx = css`
  margin: 16px;
`;

export const detailCx = css`
  margin: 16px;
  display: flex;
`;

export const ratingCx = css`
  font-weight: 600;
  font-size: 20px;
  padding-right: 8px;
`;

export const counterCx = css`
  font-size: 14px;
`;

export const ratingContainerCx = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const imgCx = css`
  padding-right: 8px;
  width: 140px;
  height: 200px;
`;
