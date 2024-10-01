import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom"
import { Muesca } from "../components/Muesca"
import { CategoryHeaders } from "../components/CategoryHeaders"
import { ProductCategoryCard } from "../components/ProductCategoryCard"
import { useState, useEffect } from "react"


const tallerInfo = {
    img: '/img/oepe.png',
    name: 'Taller Awaq Ayllus',
    prdts: [
        { name: 'Tapiz Chumpi Andino III', price: 600, owner: 'Taller Awaq Ayllu', img: '/img/Rectangle41.png' },
        { name: 'Tapiz Porselani Cron III', price: 1600, owner: 'Taller Juan Ayllu', img: '/img/Rectangle41.png' },
        { name: 'Tapiz Barro Indio III', price: 100, owner: 'Taller Pepe Ayllu', img: '/img/Rectangle41.png' },
        { name: 'Tapiz Cuero de conejo III', price: 200, owner: 'Taller Camacho Ayllu', img: '/img/Rectangle41.png' },
        { name: 'Tapiz Pelaje de burro III', price: 500, owner: 'Taller Carlitos Ayllu', img: '/img/Rectangle41.png' },
        { name: 'Tapiz Cachos de toro III', price: 900, owner: 'Taller Postobon Ayllu', img: '/img/Rectangle41.png' },
        { name: 'Tapiz Pelaje de camello III', price: 3600, owner: 'Taller Esquinero Ayllu', img: '/img/Rectangle41.png' },
        { name: 'Tapiz Pezuña de yegua III', price: 2600, owner: 'Taller Grundpet Ayllu', img: '/img/Rectangle41.png' }
    ]
}

export const WorkshopPreview = () => {
    const { id } = useParams();
    const [tallerData, setTallerData] = useState(null)
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const data = useLoaderData()


    useEffect(()=> {

        if (!data) navigate('/register')
        console.log(data.user)
        setUser([data.user])

        const fetchTallerData = async () => {
            try {
              const response = await fetch(`/api/workshops/${id}`); // API para obtener datos del taller
              const data = await response.json();
              console.log(data)
              //setTallerData(data);
            } catch (error) {
              console.error("Error fetching workshop data", error);
              navigate('/404'); // Redirigir si ocurre un error o no se encuentra el taller
            }
          };
      
          fetchTallerData();
    },[id])

    return (

        <>

            <Muesca />
            <div className="fixed z-[10] flex items-center justify-center top-0 left-0 right-0 m-auto w-[200px] h-[35px] bg-703A31 text-center text-blanco font-semibold">

                {tallerInfo.name}

            </div>
            <section className="w-full h-[300px] bg-2E1108">

                <div className="h-[80%] object-cover">
                    <img className="w-full h-full" src={tallerInfo.img} alt={tallerInfo.name} />
                </div>

                <div className="flex justify-center items-center relative text-center text-blanco underline h-[20%]">

                    <svg className="absolute left-0" width="20" height="40" viewBox="0 0 60 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-4.94975 2.94975C-2.21608 0.21608 2.21608 0.216077 4.94975 2.94975L57.8228 55.8228C60.5565 58.5565 60.5565 62.9886 57.8228 65.7223L4.72231 118.823C1.98864 121.556 -2.44352 121.556 -5.17719 118.823L-58.0503 65.9497C-60.7839 63.2161 -60.7839 58.7839 -58.0503 56.0503L-4.94975 2.94975Z" fill="#703A31" />
                    </svg>
                    <Link to={'/'}>Conoce la historia detrás de este taller artesanal y conoce como producen sus textiles</Link>
                    <svg className="absolute right-0" width="20" height="40" viewBox="0 0 62 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="63" width="88.7738" height="89.0955" transform="rotate(45 63 0)" fill="#703A31" />
                    </svg>

                </div>

            </section>

            <section className="flex items-center my-[15px] relative">

                <CategoryHeaders title={'Artesanias'} />

                <Link to={'/'} className="absolute right-2">
                    <svg width="45" height="43" viewBox="0 0 150 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M31.4882 18.5098C22.3585 18.5098 15 26.6185 15 36.679V92.3489C15 102.409 22.3585 110.518 31.4882 110.518H38.4786C39.8593 110.518 40.9786 111.752 40.9786 113.273V129.015L63.0723 111.056C63.5021 110.707 64.0222 110.518 64.5563 110.518H101.987C111.117 110.518 118.476 102.409 118.476 92.3489V55.6363C118.476 54.1148 119.595 52.8814 120.976 52.8814C122.356 52.8814 123.476 54.1148 123.476 55.6363V92.3489C123.476 105.452 113.878 116.028 101.987 116.028H65.3786L39.9627 136.687C39.2035 137.304 38.1938 137.398 37.3517 136.93C36.5096 136.461 35.9786 135.51 35.9786 134.47V116.028H31.4882C19.5971 116.028 10 105.452 10 92.3489V36.679C10 23.5755 19.5971 13 31.4882 13H81.6605C83.0412 13 84.1605 14.2334 84.1605 15.7549C84.1605 17.2764 83.0412 18.5098 81.6605 18.5098H31.4882Z" fill="#FFA800" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M122.611 8.12193L133.936 18.2224C138.752 22.5181 138.752 29.483 133.936 33.7787L122.611 43.8792C117.795 48.1749 109.986 48.1749 105.17 43.8792L93.8454 33.7787C89.0291 29.483 89.0291 22.5181 93.8454 18.2224L105.17 8.12193C109.986 3.82616 117.795 3.82616 122.611 8.12193ZM119.44 10.9504C116.375 8.21668 111.406 8.21668 108.341 10.9504L97.0166 21.0508C93.9516 23.7845 93.9516 28.2166 97.0166 30.9503L108.341 41.0507C111.406 43.7844 116.375 43.7844 119.44 41.0507L130.765 30.9503C133.83 28.2166 133.83 23.7845 130.765 21.0508L119.44 10.9504Z" fill="#FFA800" />
                    </svg>
                </Link>

            </section>

            <section className='sticky px-[20px] top-[-1px] flex w-full items-center mb-[15px] justify-center gap-2'>

                    <div className="flex w-full items-center bg-703A31 h-[40px] rounded-md p-2">
                        <svg
                            className="w-6 h-6 mr-4"
                            viewBox="0 0 62 75"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="1.26633"
                                y="34.3498"
                                width="34.5626"
                                height="34.5626"
                                rx="6"
                                transform="rotate(-75 1.26633 34.3498)"
                                stroke="#FFFFFF"
                                strokeWidth="4"
                            />
                            <path
                                d="M33.3945 40.7812L55.6657 72.6541"
                                stroke="#FFFFFF"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Buscar producto o tienda..."
                            className="flex-1 bg-transparent border-none outline-none text-white"
                        />
                    </div>
                    <button className='w-[10%]'>
                        <svg className='w-full' width="40" height="40" viewBox="0 0 69 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.25 0V100.214" stroke="#FFA800" strokeWidth="4" />
                            <path d="M51.7495 100.215L51.7495 0.000482202" stroke="#FFA800" strokeWidth="4" />
                            <circle cx="17.25" cy="66.5352" r="15.25" fill="#FFA800" stroke="#FFA800" strokeWidth="4" />
                            <circle cx="51.75" cy="29.5723" r="15.25" transform="rotate(-180 51.75 29.5723)" fill="#FFA800" stroke="#FFA800" strokeWidth="4" />
                        </svg>
                    </button>

                </section>

                <section className="overflow-y-scroll h-[45dvh] grid grid-cols-2 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-[40px] ">

                    {
                        tallerInfo.prdts.map(({name, price, owner, img}, i) => <ProductCategoryCard key={i} name={name} price={price} owner={owner} img={img} />)
                    }

                </section>


        </>

    )

}