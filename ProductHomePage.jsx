import React from "react";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import CategoryTab from "../CategoryTab/CategoryTab";

const ProductHomePage = () => {
  const styles = {
    container: {
      padding: "0px 10%",
    },
  };
  return (
    <SimplifiedDiv style={styles.container}>
      <Grid container direction="row">
        <Grid item md={3} lg={3}>
          <CategoryTab>hihi</CategoryTab>
        </Grid>
        <Grid item md={9} lg={9}>
        <CategoryTab>huhu</CategoryTab>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default ProductHomePage;
