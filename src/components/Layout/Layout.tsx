import { Outlet, ScrollRestoration } from "react-router-dom";
import { containerCx } from "./styles";

const Layout = () => {
  return (
    <div css={containerCx}>
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

export default Layout;
