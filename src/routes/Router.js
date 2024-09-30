import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

/**Login */
const Login = lazy(() => import("../views/login/login.js"));

const Register = lazy(() => import("../views/login/Register.js"));

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1.js"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable.js"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete.js")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton.js"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox.js"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio.js"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider.js"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch.js"));
// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts.js"));

/*****Product Components (Registro y Listado de Productos)******/
const ProductRegister = lazy(() =>
  import("../views/FormLayouts/fb-elements/FbDefaultForm.js")
);
const ProductList = lazy(() =>
  import("../views/dashboards/dashboard1-components/ExTable.js")
);

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },

      // Proteger rutas con el token JWT
      {
        path: "dashboards/dashboard1",
        element: (
          <ProtectedRoute>
            <Dashboard1 />
          </ProtectedRoute>
        ),
      },

      { path: "dashboards/dashboard1", exact: true, element: <Dashboard1 /> },
      { path: "tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/form-elements/button", element: <ExButton /> },
      { path: "/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "/form-elements/radio", element: <ExRadio /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/switch", element: <ExSwitch /> },
    ],
  },

  // Rutas para Productos
  {
    path: "/api/products/register",
    element: (
      <ProtectedRoute>
        <ProductRegister />
      </ProtectedRoute>
    ),
  },
  {
    path: "/api/products/register",
    element: (
      <ProtectedRoute>
        <ProductList />
      </ProtectedRoute>
    ),
  },

  // Nueva ruta para login
  {
    path: "/login",
    element: <Login />, // Aquí se añade la ruta del componente Login
  },
  {
    path: "/register",
    element: <Register />, // Aquí debes tener el componente de registro
  },
];

export default ThemeRoutes;
