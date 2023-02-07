import React from "react";
import CustomDiv from "../customDiv/CustomDiv";
import Grid from "@mui/material/Grid";

const Gridmui = () => {
  return (
    <Grid container spacing={3}>
      {/* <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        spacing={1}
      >
        <CustomDiv width="30%"></CustomDiv>
        <CustomDiv width="30%"> xs=8 </CustomDiv>
        <CustomDiv width="30%"> xs=8 </CustomDiv>
      </Grid> */}
      <Grid item xs={3}>
        <CustomDiv width="100%">Artikal 1</CustomDiv>
      </Grid>
      <Grid item xs={3}>
        <CustomDiv width="100%"> Artikal 2 </CustomDiv>
      </Grid>
      <Grid item xs={3}>
        <CustomDiv width="100%"> Artikal 3</CustomDiv>
      </Grid>
      <Grid item xs={3}>
        <CustomDiv width="100%">Artikal 4 </CustomDiv>
      </Grid>
      <Grid item xs={3}>
        <CustomDiv width="100%">Artikal 5</CustomDiv>
      </Grid>
      <Grid item xs={3}>
        <CustomDiv width="100%">Artikal 6</CustomDiv>
      </Grid>
      <Grid item xs={3}>
        <CustomDiv width="100%">Artikal 7</CustomDiv>
      </Grid>
      <Grid item xs={3}>
        <CustomDiv width="100%">Artikal 8</CustomDiv>
      </Grid>
    </Grid>
  );
};

export default Gridmui;
