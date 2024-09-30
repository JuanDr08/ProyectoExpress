import React, { useState } from 'react';
import '../../css/pantalla7.css';

export default function Pantalla7() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const isRegisterButtonDisabled = !checkbox1 || !checkbox2;
  const isSubrayado = checkbox1 && checkbox2; // Verificar si ambas condiciones se cumplen

  return (
    <div>
      <header>
        <div className="box-atras">
          <img src=".././../../../public/img/Group 53.png" alt="triangulo" />
          <a href="#"><i className='bx bx-arrow-back' style={{ color: '#ffa800' }}></i></a>
        </div>
        <div className="box-img">
          <img src="../../../../public/img/triangulo_2.png" alt="triangulo_2" />
        </div>
      </header>
      <main>
        <article>
          <div className="box_1">
            <input 
              type="checkbox" 
              checked={checkbox1} 
              onChange={() => setCheckbox1(!checkbox1)} 
              id="checkbox_1" 
            />
            <label htmlFor="checkbox_1"></label>
            <p>
              He leído y acepto la <span><a href="#">Política de privacidad*</a></span>
            </p>
          </div>
          <div className="box_2">
            <input 
              type="checkbox" 
              checked={checkbox2} 
              onChange={() => setCheckbox2(!checkbox2)} 
              id="checkbox_2" 
            />
            <label htmlFor="checkbox_2"></label>
            <p>
              He leído y acepto los <span><a href="#">Términos y condiciones*</a></span>
            </p>
          </div>
          <div className="box_3">
            <input type="checkbox" id="checkbox_3" />
            <label htmlFor="checkbox_3"></label>
            <p>Acepto que me envíen promociones y eventos a mi número de celular</p>
          </div>
        </article>
      </main>
      <footer>
        <div className="box-adelante">
          <i className='bx bx-chevron-right'></i>
          <a 
            href={isRegisterButtonDisabled ? undefined : "#"} 
            id="registerButton" 
            className={`${isRegisterButtonDisabled ? "disabled" : ""} ${isSubrayado ? "subrayado" : ""}`} 
          >
            Registrarse
          </a>
        </div>
      </footer>
    </div>
  );
}
