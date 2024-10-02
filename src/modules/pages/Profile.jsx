import { useState, useEffect } from 'react';

// import DatePicker from 'react-datepicker';

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LeftMenu } from '../components/Leftmenu';
import { PurchaseConfirmation } from '../components/PurchaseConfirmation';
import { useLoaderData, useNavigate } from 'react-router-dom';

export function Profile() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const navigate = useNavigate();
    const data = useLoaderData()
    const [user, setUser] = useState(null)
    
    useEffect(()=> {

        if (!data || !data.user) {
            navigate('/register'); // Redirige si no hay datos de usuario
        } else {
            console.log(data.user[0]);
            setUser([data.user[0]]); // Almacena el objeto user en un array
        }
    },[])

    const handleOpenDialog = () => {
        setIsDialogOpen(true); // Abre el diálogo
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false); // Cierra el diálogo
    };

    const [selectedCountry, setSelectedCountry] = useState('CO');

    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú

    const [selectedGender, setSelectedGender] = useState('M'); // Estado para el género
    const [isCountryOpen, setIsCountryOpen] = useState(false); // Estado para el menú de país
    const [isGenderOpen, setIsGenderOpen] = useState(false); // Estado para el menú de género
    const [isBirthdayOpen, setIsBirthdayOpen] = useState(false); // Estado para el selector de cumpleaños


    const countries = [
        { code: 'CO', name: 'Colombia', dialCode: '+57' },
        { code: 'US', name: 'Estados Unidos', dialCode: '+1' },
        { code: 'MX', name: 'México', dialCode: '+52' },
    ];

    const genders = [
        { code: 'M', name: 'Masculino' },
        { code: 'F', name: 'Femenino' },
    ];


    const toggleCountryDropdown = () => setIsCountryOpen(!isCountryOpen);
    const toggleGenderDropdown = () => setIsGenderOpen(!isGenderOpen);
    const toggleBirthdayDropdown = () => setIsBirthdayOpen(!isBirthdayOpen);

    const toggleDropdown = () => setIsOpen(!isOpen); // Función para alternar el menú desplegable

    return (
        <main>
            <Header />
            <div className="profile flex flex-col items-center gap-5 mt-5">
                <span className="text-lg font-bold text-[var(--color-9D1A1A)]">Foto de perfil</span>
                <div className="profileimg rounded-full outline w-[200px] h-[200px] overflow-hidden">
                    {user ? (
                        <img className='w-full h-full object-cover' src={user[0].photo} alt="Perfil" />
                    ) : (
                        <p>Cargando...</p> // Mensaje mientras se carga
                    )}
                </div>
            </div>

            <section className="userdata flex flex-col justify-center items-center mt-10 gap-5">
                <div className="fila w-[100vw] flex items-center justify-around">
                    <div className="user">
                        <p className="text-[var(--color-9D1A1A)] text-xl">Usuario:</p>
                    </div>
                    <div className="userplaceholder flex bg-[var(--color-703A31)] text-white w-[60%] h-10 rounded-lg justify-center items-center">
                            {user && user.length > 0 ? (
                            <p>{user[0].names}</p> 
                        ) : (
                            <p>Cargando...</p>
                        )}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 32 32">
                        <path fill="#9d1a1a" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"/>
                    </svg>
                </div>

                <div className="fila w-[100vw] flex items-center justify-around">
                    <div className="correo">
                        <p className="text-[var(--color-9D1A1A)] text-xl">Correo:</p>
                    </div>
                    <div className="correoplaceholder flex bg-[var(--color-703A31)] text-white w-[60%] h-10 rounded-lg justify-center items-center">
                        {user && user.length > 0 ? (
                                <p>{user[0].email}</p> 
                            ) : (
                                <p>Cargando...</p>
                            )}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 32 32">
                        <path fill="#9d1a1a" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"/>
                    </svg>
                </div>

                <div className="fila w-[100vw] flex items-center justify-around">
                    <div className="phone">
                        <p className="text-[var(--color-9D1A1A)] text-xl">Celular:</p>
                    </div>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="phonecountry bg-[var(--color-703A31)] w-[50px] flex items-center justify-center text-white rounded-lg"
                        >
                            {countries.find(country => country.code === selectedCountry).dialCode}
                        </button>
                        {isOpen && (
                            <div className="absolute left-0 mt-1 bg-white shadow-md rounded-md w-[150px] z-10">
                                {countries.map(country => (
                                    <button
                                        key={country.code}
                                        onClick={() => {
                                            setSelectedCountry(country.code);
                                            setIsOpen(false); // Cerrar el menú al seleccionar
                                        }}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                    >
                                        {country.name} ({country.dialCode})
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="phoneplaceholder flex bg-[var(--color-703A31)] text-white w-[50%] h-10 rounded-lg justify-center items-center">
                        {user && user.length > 0 ? (
                                <p>{user[0].phone}</p> // Asegúrate de que user[0] existe
                            ) : (
                                <p>Cargando...</p> // Mensaje mientras se carga
                            )}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 32 32">
                        <path fill="#9d1a1a" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"/>
                    </svg>
                </div>

                <div className="genero fila w-[100vw] flex items-center justify-around">
            <div className="genre">
                <p className="text-[var(--color-9D1A1A)] text-xl">Género:</p>
            </div>

            <div className="relative">
                <button
                    onClick={toggleGenderDropdown}
                    className="gender bg-[var(--color-703A31)] w-[100px] flex items-center justify-center text-white rounded-lg"
                >
                    {genders.find(gender => gender.code === selectedGender).name}
                </button>
                {isGenderOpen && (
                    <div className="absolute left-0 mt-1 bg-white shadow-md rounded-md w-[150px] z-10">
                        {genders.map(gender => (
                            <button
                                key={gender.code}
                                onClick={() => {
                                    setSelectedGender(gender.code);
                                    setIsGenderOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                            >
                                {gender.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="birthday w-[90px]">
                <p className="text-[var(--color-9D1A1A)] text-l">Fecha de Nacimiento:</p>
            </div>

            <div className="relative">
                <button
                    onClick={toggleBirthdayDropdown}
                    className="birthday bg-[var(--color-703A31)] w-[100px] flex items-center justify-center text-white rounded-lg"
                >
                    Selecciona Fecha
                </button>
                {isBirthdayOpen && (
                    <div className="absolute left-[-50px] mt-1 bg-white shadow-md rounded-md w-[150px] z-10">
                        {/* Aquí vamos a agregar un componente de selección de fecha */}
                        <p className="p-4">Selecciona tu fecha de nacimiento</p>
                        {/* Agregamos logica para seleccionar la fecha, esto es solo un ejemplo */}
                    </div>
                )}
            </div>
        </div>



                <div className="fila w-[100vw] flex pl-5 gap-2 flex-col">
                    <div className="PaymentMethods">
                        <p className="text-[var(--color-9D1A1A)] text-xl">Metodos de pago</p>
                    </div>
                    <div className="cardplaceholder flex bg-[var(--color-703A31)] text-white w-[90%] h-10 rounded-lg p-2 items-center">
                        <p>Visa Mastercard</p>
                    </div>

                    <div className='flex items-center bg-[var(--color-703A31)] h-[40px] w-[90%] rounded-md p-2'>
                        <input
                            type="text"
                            placeholder="Añadir método de pago"
                            className="flex-1 bg-transparent border-none outline-none text-white"
                        />
                    </div>
                </div>

            </section>

            {/* <div>
                <button onClick={handleOpenDialog}>Realizar compra</button>

                {isDialogOpen && (
                    <PurchaseConfirmation onClose={handleCloseDialog} />
                )}
            </div> */}

            <Footer />
        </main>
    );
}
