// @ts-nocheck
// material-ui
import { Typography } from "@mui/material";

// project imports
import AuthLeft from "../../components/AuthLeft";
import { AuthForget } from "../../components/AuthForms";
import authLeftBg from "../../assets/images/auth/authLeftBg.png";
import SyndicateLogoIcon from "../../assets/icons/SyndicateLogoIcon";
import SyndicateLogoText from "../../assets/icons/SyndicateLogoText";

import { stylesMui } from "./styles";

const divStyle = {
  backgroundImage: `url(${authLeftBg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  borderRadius: "0rem 4.375rem 0rem 0rem",
};

const Forget = () => {
  return (
    <>
      <section className="w-full flex">
        <div
          className="w-full h-full md:w-1/2 hidden md:block"
          style={divStyle}
        >
          <AuthLeft variant="forgot" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="md:w-4/5 xl:w-7/12">
            <div className="my-4 flex flex-col justify-center items-center gap-2 md:hidden">
              <SyndicateLogoIcon color="#000" />
              <SyndicateLogoText color="#000" />
            </div>
            <div className="px-4 md:px-0 py-2 md:py-0">
              <Typography sx={stylesMui.headingPage}>
                Forget Password
              </Typography>
              <AuthForget />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forget;
