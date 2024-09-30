import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios"; // Asegúrate de tener axios instalado

const numbers = [
  {
    value: "s",
    label: "S",
  },
  {
    value: "m",
    label: "M",
  },
  {
    value: "l",
    label: "L",
  },
  {
    value: "xl",
    label: "XL",
  },
];

const FbDefaultForm = () => {
  // Estados para cada campo
  const [productName, setProductName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [size, setSize] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");

  // Estado para almacenar los productos registrados
  const [products, setProducts] = React.useState([]);

  // Función para manejar el submit del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Crea el objeto con los datos del producto
    const newProduct = {
      name: productName,
      price: price,
      size: size,
      category: category,
      description: description,
    };

    try {
      // Llamada a la API para registrar el producto
      const response = await axios.post("/api/products/register", newProduct); // Cambia la URL según tu backend

      if (response.status === 201) {
        alert("Producto registrado con éxito");
        // Resetea el formulario después de registrar el producto
        setProductName("");
        setPrice("");
        setSize("");
        setCategory("");
        setDescription("");
        // Actualizar la lista de productos
        fetchProducts();
      } else {
        alert("Error al registrar el producto");
      }
    } catch (error) {
      console.error("Hubo un error al registrar el producto:", error);
      alert("Error al registrar el producto");
    }
  };

  // Función para obtener los productos
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products/list"); // Cambia la URL según tu backend
      setProducts(response.data); // Almacena los productos en el estado
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  // Llama a fetchProducts cuando el componente se monte
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: "15px 30px",
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Registrar Productos
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre del Producto"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
            <TextField
              label="Precio"
              type="number"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <TextField
              fullWidth
              variant="outlined"
              select
              label="Talla"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              sx={{ mb: 2 }}
              required
            >
              {numbers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Categoría"
              type="text"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />

            <TextField
              label="Descripción"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <div>
              <Button type="submit" color="primary" variant="contained">
                Registrar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Box mt={5}>
        <Typography variant="h6">Lista de Productos Registrados</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Talla</TableCell>
                <TableCell>Categoría</TableCell>
                <TableCell>Descripción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.size}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default FbDefaultForm;
