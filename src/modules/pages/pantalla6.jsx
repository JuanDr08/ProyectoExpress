import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Papa from 'papaparse';
import '../../css/pantalla6.css';

export function Pantalla6() {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    confirmPhone: '',
    password: '',
    confirmPassword: '',
    sex: '',
    day: '',
    month: '',
    year: '',
    countryCode: '', 
    numeroCelular: '',
  });
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        'https://gist.githubusercontent.com/brenes/1095110/raw/c8f208b03485ba28f97c500ab7271e8bce43b9c6/paises.csv'
      );
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);

      Papa.parse(csv, {
        header: true,
        complete: (results) => {
          const formattedCountries = results.data.map((country) => ({
            code: country,
            name: country.name,
          }));
          setCountries(formattedCountries);
        },
      });
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (e) => {
    const selectedPhoneCode = e.target.value;
    console.log(selectedPhoneCode)
    const selectedCountry = countries.find(country => country.code[' phone_code'] === selectedPhoneCode);
      console.log(selectedCountry)
    setFormData((prevData) => ({
      ...prevData,
      countryCode: selectedCountry || {}, // Guarda el objeto completo del país o un objeto vacío
      numCelular: prevData.numCelular, // Mantén el número de celular actual
    }));
  
    console.log("Código de país:", selectedPhoneCode);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const numeroCelularCompleto = `+${formData.countryCode[' phone_code']}${formData.phone}`;
    
    // Validación de campos vacíos
    if (
      !formData.username ||
      !formData.phone ||
      !formData.confirmPhone ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.sex ||
      !formData.day ||
      !formData.month ||
      !formData.year ||
      !formData.countryCode
    ) {
      setErrorMessage('Todos los campos deben estar llenos.');
      return;
    }

    // Validar que los números de teléfono coincidan
    if (numeroCelularCompleto !== `+${formData.countryCode[' phone_code']}${formData.confirmPhone}`) {
      setErrorMessage('El número de teléfono y la confirmación deben ser iguales.');
      return;
    }

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('La contraseña y la confirmación deben ser iguales.');
      return;
    }

    // Si todo está bien, concatenamos el número de celular y redirigimos
    setFormData((prevFormData) => ({
      ...prevFormData,
      numeroCelular: numeroCelularCompleto,
    }));

    // Redirigir a la siguiente página
    navigate('/register/TermsAndConditions', {
      state: { ...formData, numeroCelular: numeroCelularCompleto },
    });
  };

  return (
    <div className="body">
      <header>
        <div className="box-atras">
          <img src=".././../../../public/img/Group 53.png" alt="triangulo" />
          <Link to={-1}><i className='bx bx-arrow-back' style={{ color: '#ffa800' }}></i></Link>
        </div>
        <div className="box-texto">
          <h2>Nombre de usuario*</h2>
          <p>*Crea un nombre de usuario de mínimo 5 y máximo de 12 carácteres</p>
        </div>
      </header>
      <form>
        <div className="box-nombre">
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="box-numCelu">
          <h2>Número de celular*</h2>
          <div className="box-numeros">
            <div className="codigo">
              <select
                id="select-number"
                className="clase-numero"
                name="countryCode"
                onChange={handleCountryChange}
              >
                <option value="">Codigo</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.code}>
                    +{country.code[' phone_code']}
                  </option>
                ))}
              </select>
            </div>
            <div className="num-celular">
              <input
                type="text"
                name="phone"
                placeholder="Número de celular"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="box-numCelu">
          <h2>Confirma tu celular*</h2>
          <div className="box-numeros">
            <div className="codigo">
              <select
                id="select-number"
                className="clase-numero"
                name="countryCodeConfirm"
                onChange={handleCountryChange}
              >
                <option value="">Codigo</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.code}>
                    +{country.code[' phone_code']}
                  </option>
                ))}
              </select>
            </div>
            <div className="num-celular">
              <input
                type="text"
                name="confirmPhone"
                placeholder="Confirma tu número"
                value={formData.confirmPhone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="box-contraseña">
          <h2>Contraseña*</h2>
          <p>Recuerda crear una contraseña difícil de adivinar</p>
          <div className="container-contraseña">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="box-contraseña">
          <h2>Confirma tu contraseña*</h2>
          <p>Recuerda crear una contraseña difícil de adivinar</p>
          <div className="container-contraseña">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirma tu contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="box-sexo">
          <h2>Sexo</h2>
          <select
            className="opciones-sexo"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="femenino">femenino</option>
            <option value="masculino">masculino</option>
            <option value="indefinido">Otro</option>
          </select>
        </div>
        <div className="box-fecha-nacimiento">
          <h2>Fecha de nacimiento</h2>
          <div className="container-fechas">
            <select
              value={formData.day}
              name="day"
              onChange={handleChange}
              className="box-dia"
            >
              <option value="">DD</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              value={formData.month}
              name="month"
              onChange={handleChange}
              className="box-dia"
            >
              <option value="">MM</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              value={formData.year}
              name="year"
              onChange={handleChange}
              className="box-dia"
            >
              <option value="">YY</option>
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i} value={2024 - i}>
                  {2024 - i}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <footer>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="box-adelante" onClick={handleSubmit}>
          <i className='bx bx-chevron-right'></i>
          <a href="/register/TermsAndConditions">Continuar</a>
        </div>
      </footer>
    </div>
  );
}
