import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser, cilMail } from '@coreui/icons';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Asegúrate de crear este archivo CSS

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    console.log("Registro exitoso:", { username,password });
    navigate('/login');
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex justify-content-center align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4 shadow-lg">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1 className="text-center mb-4">Registro</h1>
                  <p className="text-body-secondary text-center">Crea tu cuenta</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                    </CInputGroupText>
                    
                    <CFormInput 
                      placeholder="Nombre de usuario" 
                      autoComplete="username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                    </CInputGroupText>
                    <CFormInput 
                      type="password" 
                      placeholder="Contraseña" 
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupText>   
                    </CInputGroupText>
                    <CFormInput 
                      type="password" 
                      placeholder="Repite la contraseña" 
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </CInputGroup>

                  {error && <p className="text-danger text-center">{error}</p>}

                  <div className="d-grid">
                    <CButton color="success" type="submit">Crear Cuenta</CButton>
                  </div>

                  <p className="mt-3 text-center">
                    ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
                  </p>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
