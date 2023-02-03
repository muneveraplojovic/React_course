import React from "react";
import CustomDiv from "../customDiv/CustomDiv";
import Grid from "@mui/material/Grid";

const Gridmui = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        spacing={1}
      >
        <CustomDiv width="30%"> xs=8 </CustomDiv>
        <CustomDiv width="30%"> xs=8 </CustomDiv>
        <CustomDiv width="30%"> xs=8 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width="100%"> xs=2 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width="100%"> xs=2 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width="100%"> xs=2 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width="100%"> xs=2 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width="100%"> xs=2 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width="100%"> xs=2 </CustomDiv>
      </Grid>
    </Grid>
  );
};

export default Gridmui;
