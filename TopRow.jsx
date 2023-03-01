import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/customDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Text from "../../components/Text/Text";
import { getScreenWidth } from "../../util/helpers";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";

const SocialIcons = () => (
  <>
    <TwitterIcon
      style={{
        fontSize: fontSize.normal,
        color: colors.gray,
        margin: "0px 10px",
      }}
    />
    <InstagramIcon
      style={{
        fontSize: fontSize.normal,
        color: colors.gray,
        margin: "0px 10px",
      }}
    />
    <FacebookIcon
      style={{
        fontSize: fontSize.normal,
        color: colors.gray,
        margin: "0px 10px",
      }}
    />
  </>
);

const TopRow = () => {
  const screenWidth = getScreenWidth();
  const alignItemsFirstDiv = screenWidth === "SM" ? "center" : "flex-start";
  const alignItemsSecondDiv = screenWidth === "SM" ? "center" : "flex-end";
  const paddingDiv = screenWidth === "SM" ? "15px 0px" : "0px";
  const topHeightDiv = screenWidth === "SM" ? "auto " : "30px";

  console.log(screenWidth);

  return (
    <CustomDiv
      bgColor={colors.secondColor}
      display="flex"
      width="100%"
      height={topHeightDiv}
      padding="0px 10%"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CustomDiv
            display="flex"
            alignItems="center"
            justifyContent={alignItemsFirstDiv}
            padding={paddingDiv}
          >
            <PhoneIcon
              style={{
                fontSize: fontSize.normal,
                color: colors.gray,
                marginRight: "3px",
              }}
            />
            <Text fontSize={fontSize.small} color={colors.gray} mr="15px">
              +381354897614
            </Text>
            <CustomDiv
              display="flex"
              alignItems="center"
              margin="0px 0px 0px 5px"
            >
              <EmailIcon
                style={{
                  fontSize: fontSize.normal,
                  color: colors.gray,
                  marginRight: "3px",
                }}
              />
              <Text fontSize={fontSize.small} color={colors.gray}>
                info@mail.com
              </Text>
            </CustomDiv>
          </CustomDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CustomDiv
            display="flex"
            alignItems="center"
            justifyContent={alignItemsSecondDiv}
            padding={paddingDiv}
          >
            <SocialIcons />
          </CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;
