import React from "react";
import ArticleCard from "../ArticlesCard/ArticlesCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product2.jpg";
import article3 from "../../assets/images/home/product3.jpg";
import Recommendes from "../Recommendes/Recommendes";

export const loremDescription =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse saepe, ad fugiat a pariatur corrupti dolorem aliquam praesentium voluptates sed sit enim, laudantium repellat consequuntur animi rem atque dolor ullam. Esse?";

  export const articles = [
  {
    title: "Tetka",
    description: loremDescription,
    image: article1,
    price: "13$",
  },
  {
    title: "Midzo",
    description: loremDescription,
    image: article2,
    price: "45$",
  },
  {
    title: "Hala",
    description: loremDescription,
    image: article3,
    price: "65$",
  },
  {
    title: "Hala",
    description: loremDescription,
    image: article3,
    price: "65$",
  },
  {
    title: "Aamidzinica",
    description: loremDescription,
    image: article1,
    price: "53$",
  },
  {
    title: "Tetak",
    description: loremDescription,
    image: article2,
    price: "13$",
  },
];
const ArticlesHomePage = () => {
  //Postaviti funkcije koje ce izlistavati artikle

  return (
    <SimplifiedDiv style={{}}>
      <Grid container direction="row" spacing={3}>
        {articles.map((article) => {
          return (
            <Grid item md={4} lg={4}>
              <ArticleCard
                title={article.title}
                image={article.image}
                description={article.description}
                price={article.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;
