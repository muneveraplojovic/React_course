import React from "react";
import CustomDiv from "../../components/customDiv/CustomDiv";
import { getScreenWidth } from "../../util/helpers";
import { colors, fontSize } from "../../util/theme";
import Grid from "@mui/material/Grid";
import Logo from "../../assets/images/logo.png";

const MainBar = () => {
  return (
    <CustomDiv
      bgColor={colors.secondColor}
      display="flex"    
      width="100%"
      height="30px"
      padding="0px 5%"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item md={6} lg={6}>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: 100,
              height: 50,
            }}
          />
        </Grid>
        <Grid item md={6} lg={6}></Grid>
      </Grid>
    </CustomDiv>
  );
};

export default MainBar;
