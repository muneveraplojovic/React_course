import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/customDiv/CustomDiv";
import Logo from "../../assets/images/logo.png";
import Text from "../../components/Text/Text";
import { colors, fontSize } from "../../util/theme";
import React from "react";
//import { getScreenWidth } from "../../util/helpers";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { getScreenWidth } from "../../util/helpers";

const iconStyle = {
  fontSize: fontSize.medium,
  color: colors.gray,
};

const MainBar = () => {
  const screenWidth = getScreenWidth();
  const rightMenuMargin = screenWidth === "SM" ? "20px 5px" : "0px";
  const rightMenuJustify = screenWidth === "SM" ? "center" : "flex-end";
  const rightMenuItemMargin = screenWidth === "SM" ? "0px 5px" : "0px 10px";

  const RightMenu = () => (
    <CustomDiv
      display="flex"
      alignItems="center"
      justifyContent={rightMenuJustify}
      height="100%"
      width="100%"
      margin={rightMenuMargin}
    >
      <CustomDiv display="flex" margin={rightMenuItemMargin}>
        <PersonIcon style={iconStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Account
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightMenuItemMargin}>
        <StarIcon style={iconStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Wishlist
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightMenuItemMargin}>
        <LocationSearchingIcon style={iconStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Checkout
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightMenuItemMargin}>
        <ShoppingCartIcon style={iconStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Card
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightMenuItemMargin}>
        <LockIcon style={iconStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Login
        </Text>
      </CustomDiv>
    </CustomDiv>
  );
  const alignLogo = screenWidth === "SM" ? "center" : "left";
  const mainDivPadding = screenWidth === "SM" ? "20px 0px" : "20px 10% 10px";

  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="auto"
      padding={mainDivPadding}
      border="0px"
    >
      <Grid container direction="row">
        <Grid item sm={12} xs={12} md={6} lg={6}>
          <SimplifiedDiv
            style={{
              textAlign: alignLogo,
            }}
          />
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: 140,
              height: "auto",
            }}
          />
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={6}>
          <RightMenu />
        </Grid>
        <CustomDiv
          width="100%"
          height="2px"
          margin="20px 0px"
          borderBottom="0.2px solid #b3b1b1"
        />
      </Grid>
    </CustomDiv>
  );
};

export default MainBar;
