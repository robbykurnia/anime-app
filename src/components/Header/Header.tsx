import { useNavigate } from "react-router-dom";

import ArrowLeft from "../ArrowLeft";

import { backCx, headerCx } from "./styles";

interface HeaderProps {
  back?: boolean;
}

const Header = (props: HeaderProps) => {
  const { back = false } = props;
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(-1);
  };

  return (
    <div css={headerCx}>
      {back && (
        <div css={backCx} onClick={onBackClick}>
          <ArrowLeft />
        </div>
      )}
      <div>My Anime List</div>
    </div>
  );
};

export default Header;
