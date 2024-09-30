import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

import user1 from "../../../assets/images/products/p1.jpg";
import user2 from "../../../assets/images/products/p4.jpg";
import user3 from "../../../assets/images/products/p5.jpg";
import user4 from "../../../assets/images/products/p2.jpg";
import user5 from "../../../assets/images/products/p3.jpg";
import user6 from "../../../assets/images/products/p6.jpg";
import user7 from "../../../assets/images/products/p7.jpg";
import user8 from "../../../assets/images/products/p9.jpg";
import user9 from "../../../assets/images/products/p8.jpg";


const blogs = [
  {
    img: user1,
    title: "precio 28 BOB",
    subtitle:
      "pantalon.",
    btncolor: "error",
  },
  {
    img: user2,
    title: "Precio 25 BOB",
    subtitle:
      "pantalon",
    btncolor: "warning",
  },
  {
    img: user3,
    title: "precio 30 BOB",
    subtitle:
      "pantalon",
    btncolor: "primary",
  },
  {
    img: user4,
    title: "Precio 15 BOB",
    subtitle:
      "Polera Blanca",
    btncolor: "primary",
  },
  {
    img: user5,
    title: "Precio 10 BOB",
    subtitle:
      "Polera Negra",
    btncolor: "primary",
  },
  {
    img: user6,
    title: "Precio 12 BOB",
    subtitle:
      "Polera Amarillo",
    btncolor: "primary",
  },
  {
    img: user7,
    title: "Precio 30 BOB",
    subtitle:
      "chamarra",
    btncolor: "primary",
  },
  {
    img: user8,
    title: "Precio 25 BOB",
    subtitle:
      "chamarra",
    btncolor: "primary",
  },
  {
    img: user9,
    title: "Precio 30 BOB",
    subtitle:
      "chamarra",
    btncolor: "primary",
  },
];

const BlogCard = () => {
  return (
    <Grid container>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <img src={blog.img} 
            alt="img" 
            style={{
            width: "150px",
            height:"auto",
            display: "block", 
            margin: "auto", 
            }}
            />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  fontWeight: "500",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {blog.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: "15px",
                }}
                color={blog.btncolor}
              >
                Añadir Carrito
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
