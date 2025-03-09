import { containerCx, spinnerCx } from "./styles";

const Spinner = () => {
  return (
    <div css={containerCx}>
      <div css={spinnerCx} />
    </div>
  );
};

export default Spinner;
