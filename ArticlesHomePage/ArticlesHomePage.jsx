import React, { useContext } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product2.jpg";
import article3 from "../../assets/images/home/product3.jpg";
import { CartContext } from "../../context/CartContext";
import { generateId } from "../../util/helpers";

const loremText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const articles = [
  {
    id: generateId(5),
    title: "Article 1",
    description: loremText,
    image: article1,
    price: 13,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 2",
    description: loremText,
    image: article2,
    price: 21,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 3",
    description: loremText,
    image: article3,
    price: 43,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 4",
    description: loremText,
    image: article2,
    price: 62,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 5",
    description: loremText,
    image: article1,
    price: 54,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 3",
    description: loremText,
    image: article3,
    price: 43,
    qty: 1,
  },
];

const ArticlesHomePage = () => {
  //Postaviti funkcije koje ce izlistavati artikle

  const { setItems } = useContext(CartContext);

  // function addArticleHandler(article) {
  //   let existingIndex = items.findIndex((item) => item.id === article.id);
  // }
 
  return (
    <SimplifiedDiv style={{}}>
      <Grid container direction="row" spacing={3}>
        {articles.map((article) => {
          return (
            <Grid item md={4} lg={4}>
              <ArticleCard
                title={article.title}
                description={article.description}
                image={article.image}
                price={article.price}
                article={article}
                onClickButton={(value) => setItems((prev) => [...prev, value])}
              />
            </Grid>
          );
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;
