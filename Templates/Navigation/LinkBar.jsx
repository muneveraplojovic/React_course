import React from "react";
import CustomDiv from "../../components/customDiv/CustomDiv";
import { Grid } from "@mui/material";
import { colors, fontSize } from "../../util/theme";
import Text from "../../components/Text/Text";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { getScreenWidth } from "../../util/helpers";
import MenuIcon from "@mui/icons-material/Menu";

const styles = {
  navBar: {
    display: "flex",
    gap: "30px",
    height: "40px",
    alignItems: "center",
  },
  hamburgerButton: {
    display: "grid",
    border: "solid 1px",
    borderColor: colors.accentColor,
    width: "38px",
    borderRadius: "10px",
    height: "38px",
    alignContent: "center",
    placeContent: "center",
  },
};

const LinkBarLG = () => (
  <CustomDiv display="flex" padding="0px 10%" width="100%">
    <Grid container direction="row">
      <Grid item sm={6} md={6} lg={6}>
        <SimplifiedDiv style={styles.navBar}>
          <Text fontSize={fontSize.normal} color={colors.accentColor}>
            Home
          </Text>
          <Text fontSize={fontSize.normal} color={colors.gray}>
            Shop
          </Text>
          <Text fontSize={fontSize.normal} color={colors.gray}>
            Blog
          </Text>
          <Text fontSize={fontSize.normal} color={colors.gray}>
            About
          </Text>
          <Text fontSize={fontSize.normal} color={colors.gray}>
            Kontakt
          </Text>
        </SimplifiedDiv>
      </Grid>
      <Grid item sm={6} md={6} lg={6}>
        <CustomDiv display="flex" alignItems="center" justifyContent="flex-end">
          <TextField
            size="small"
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </CustomDiv>
      </Grid>
    </Grid>
  </CustomDiv>
);
const LinkBarSM = () => {
  <SimplifiedDiv
    style={{
      display: "block",
      width: "100%",
      justifyContent:"flex-end",

    }}
  >
    <SimplifiedDiv
      style={{  
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item xs={6} sm={6} md={6}>
        <TextField
          size="small"
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid xs={6} sm={6} md={6}>
        <SimplifiedDiv
          style={{
            display: "flex",

            width: "100%",
            placeContent: "flex-end",
          }}
        >
          <SimplifiedDiv style={styles.hamburgerButton}></SimplifiedDiv>
        </SimplifiedDiv>
        <MenuIcon style={{ color: colors.accentColor }} />
      </Grid>
    </SimplifiedDiv>
  </SimplifiedDiv>;
};

const LinkBar = () => {
  const screenWidth = getScreenWidth();
  return screenWidth === "SM" || screenWidth === "MD" ? (
    <LinkBarSM />
  ) : (
    <LinkBarLG />
  );
};

export default LinkBar;
