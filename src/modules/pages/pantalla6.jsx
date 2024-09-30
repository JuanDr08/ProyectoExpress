import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import '../../css/pantalla6.css';

export function Pantalla6() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [countries, setCountries] = useState([]);

  const handleDayChange = (e) => setDay(e.target.value);
  const handleMonthChange = (e) => setMonth(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);

  useEffect(() => {
    const fetchCountries = async () => {
    const response = await fetch('https://gist.githubusercontent.com/brenes/1095110/raw/c8f208b03485ba28f97c500ab7271e8bce43b9c6/paises.csv');
    const reader = response.body.getReader();
    const result = await reader.read(); 
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value); 
    let phoneCode = ' phone_code'
      Papa.parse(csv, {
        header: true,
        complete: (results) => {
          const formattedCountries = results.data.map(country => ({
            code: country,
            name: country.name,
          }));
          setCountries(formattedCountries);
        },
      });
    };
    

    fetchCountries();
  }, []);

  return (
    <div className='body'>
      <header>
        <div className="box-atras">
          <img src=".././../../../public/img/Group 53.png" alt="triangulo" />
          <a href="#"><i className='bx bx-arrow-back' style={{ color: '#ffa800' }}></i></a>
        </div>
        <div className="box-texto">
          <h2>Nombre de usuario*</h2>
          <p>*Crea un nombre de usuario de mínimo 5 y máximo de 12 carácteres</p>
        </div>
      </header>
      <form>
        <div className="box-nombre">
          <input type="text" placeholder="Nombre de usuario" />
        </div>
        <div className="box-numCelu">
          <h2>Número de celular*</h2>
          <div className="box-numeros">
            <div className="codigo">
              <select id="select-number" className="clase-numero">
                {countries.map((country, index) => (
                  <option key={index} value={country.code}>
                   +{country.code[' phone_code']}
                  </option>
                ))}
              </select>
            </div>
            <div className="num-celular"><input type="text" placeholder="Número de celular" /></div>
          </div>
        </div>
        <div className="box-numCelu">
          <h2>Confirma tu celular*</h2>
          <div className="box-numeros">
            <div className="codigo">
            <select id="select-number" className="clase-numero">
                {countries.map((country, index) => (
                  <option key={index} value={country.code[' phone_code']}>
                    +{country.code[' phone_code']}
                  </option>
                ))}
              </select>
            </div>
            <div className="num-celular"><input type="text" placeholder="Confirma tu número" /></div>
          </div>
        </div>
        <div className="box-contraseña">
          <h2>Contraseña*</h2>
          <p>Recuerda crear una contraseña difícil de adivinar</p>
          <div className="container-contraseña"><input type="password" placeholder="Contraseña" /></div>
        </div>
        <div className="box-contraseña">
          <h2>Confirma tu contraseña*</h2>
          <p>Recuerda crear una contraseña difícil de adivinar</p>
          <div className="container-contraseña"><input type="password" placeholder="Confirma tu contraseña" /></div>
        </div>
        <div className="box-sexo">
          <h2>Sexo</h2>
          <select className="opciones-sexo">
            <option value=""></option>
            <option value="femenino">femenino</option>
            <option value="masculino">masculino</option>
            <option value="indefinido">Otro</option>
          </select>
        </div>
        <div className="box-fecha-nacimiento">
          <h2>Fecha de nacimiento</h2>
          <div className="container-fechas">
            <select value={day} onChange={handleDayChange} className='box-dia'>
              <option value="">DD</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select value={month} onChange={handleMonthChange} className='box-dia'>
              <option value="">MM</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select value={year} onChange={handleYearChange} className='box-dia'>
              <option value="">YY</option>
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i} value={2024 - i}>{2024 - i}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <footer>
        <div className="box-adelante">
          <i className='bx bx-chevron-right'></i>
          <a href="#">Continuar</a>
        </div>
      </footer>
    </div>
  );
}
