import { useState, useEffect } from 'react';

// import DatePicker from 'react-datepicker';

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useLoaderData, useNavigate, Form } from 'react-router-dom';

export function Profile() {
    const navigate = useNavigate();
    const data = useLoaderData();
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState({ nick: false, email: false }); 
    const [formData, setFormData] = useState({ nick: '',  email: ''});

    useEffect(() => {
        if (!data || !data.user) {
            navigate('/register');
        } else {
            setUser(data.user[0]);
            setFormData({
                nick: data.user[0].nick,
                email: data.user[0].email,
            });
        }
        console.log(data)
    }, [data, navigate]);

    const handleEdit = (field) => {
        setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('nick', formData.nick);
        formDataToSend.append('email', formData.email);
    
        try {
            const response = await fetch('http://localhost:3000/user/edit', {
                method: 'PUT',
                body: formDataToSend,
            });
            const data = await response.json();
            console.log(data)
            console.log('Resultado fetch: ', response);
            console.log('Respuesta del servidor:', data);
    
            // Actualizar el estado de user y formData para reflejar el cambio
            setUser((prev) => ({ ...prev, nick: formData.nick, email: formData.email }));
            setFormData({
                nick: data.name.nick,
                email: data.name.email,
            });
    
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
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
                        <img className='w-full h-full object-cover' src={user.photo} alt="Perfil" />
                    ) : (
                        <p>Cargando...</p> // Mensaje mientras se carga
                    )}
                </div>
            </div>

            <Form onSubmit={handleSubmit} className="userdata flex flex-col justify-center items-center mt-10 gap-5">
                <div className="fila w-[100vw] flex items-center justify-around">
                    <div className="user">
                        <p className="text-[var(--color-9D1A1A)] text-xl">Usuario:</p>
                    </div>
                    <div className="userplaceholder flex bg-[var(--color-703A31)] text-white w-[60%] h-10 rounded-lg justify-center items-center">
                        {isEditing.nick ? (
                                <>
                                    <input
                                        type='text'
                                        name='nick'
                                        value={formData.nick}
                                        onChange={handleChange}
                                        className="h-10 w-full bg-[var(--color-703A31)] text-white rounded-lg"
                                    />
                                    <button type="submit" className="ml-2 bg-blue-500 text-white rounded-lg px-2">Submit</button>
                                </>
                            ) : (
                                <>
                                    <p>{user ? formData.nick : 'Cargando...'}</p>
                                    <svg onClick={() => handleEdit('nick')} xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 32 32">
                                        <path fill="#fff" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"/>
                                    </svg>
                                </>
                            )}
                    </div>
                </div>

                <div className="fila w-[100vw] flex items-center justify-around">
                    <div className="correo">
                        <p className="text-[var(--color-9D1A1A)] text-xl">Correo:</p>
                    </div>
                    <div className="correoplaceholder flex bg-[var(--color-703A31)] text-white w-[60%] h-10 rounded-lg justify-center items-center">
                        {isEditing.email ? (
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="h-10 w-full bg-[var(--color-703A31)] text-white rounded-lg"
                            />
                        ) : (
                            <p>{user ? user.email : 'Cargando...'}</p>
                        )}
                        <svg onClick={() => handleEdit('email')} xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 32 32">
                            <path fill="#fff" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"/>
                        </svg>
                    </div>
                </div>

                <div className="fila w-[100vw] flex items-center justify-around">
                    <div className="phone">
                        <p className="text-[var(--color-9D1A1A)] text-xl">Celular:</p>
                    </div>
                    <div className="phoneplaceholder flex bg-[var(--color-703A31)] text-white w-[50%] h-10 rounded-lg justify-center items-center">
                        {user ? (
                            <p>{user.phone}</p>
                        ) : (
                            <p>Cargando...</p>
                        )}
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 32 32">
                            <path fill="#9d1a1a" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"/>
                        </svg>
                    </div>
                </div>

                <div className="genero fila w-[100vw] flex items-center justify-around">
                    <div className="genre">
                        <p className="text-[var(--color-9D1A1A)] text-xl">Género:</p>
                    </div>

                    <div className="relative">
                        <button
                            type='button'
                            onClick={toggleGenderDropdown}
                            className="gender bg-[var(--color-703A31)] w-[100px] flex items-center justify-center text-white rounded-lg"
                        >
                            {genders.find(gender => gender.code === selectedGender).name}
                        </button>
                        {isGenderOpen && (
                            <div className="absolute left-0 mt-1 bg-white shadow-md rounded-md w-[150px] z-10">
                                {genders.map(gender => (
                                    <button
                                        type="button" // Agregar este atributo también
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
                            type="button" // Agregar este atributo también
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

            <button type="submit" className="mt-5 bg-[var(--color-9D1A1A)] text-white rounded-lg p-2">Guardar Cambios</button>
            </Form>
            <Footer />
        </main>
    );
}
