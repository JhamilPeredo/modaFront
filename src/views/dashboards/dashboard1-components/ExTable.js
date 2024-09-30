import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";

const ExTable = () => {
  const [products, setProducts] = useState([]);

  // Llama al backend para obtener los productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products/list"); // Ajusta la URL según tu backend
        const fetchedProducts = response.data;

        // Agrega un ID incremental a cada producto
        fetchedProducts.forEach((product, index) => {
          product.localId = index + 1;
        });

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Nombre
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Precio
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Talla
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Categoria
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.localId}>
            <TableCell>
              <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                {product.localId}
              </Typography>
            </TableCell>
            <TableCell>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  {product.name}
                </Typography>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.price}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.size}
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                {product.category}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExTable;
