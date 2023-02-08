import { Grid } from "@mui/material";
import React from "react";
import CustomDiv from "../../components/customDiv/CustomDiv";

const Navigation = () => {
  return (
    <Grid container direction="row">
      <CustomDiv padding="0px 20px" border="1px solid white" width="100%">
        <Grid container direction="row"></Grid>
      </CustomDiv>  
    </Grid>
  );
};

export default Navigation;
