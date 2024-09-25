import { Muesca } from "../components/Muesca"


const tallerInfo = {
    img: '/img/oepe.png',
    name: 'Taller Awaq Ayllus',
    prdts: [
        {name: 'Tapiz Chumpi Andino III', price: 600, owner: 'Taller Awaq Ayllu', img: '/img/Rectangle41.png'},
        {name: 'Tapiz Porselani Cron III', price: 1600, owner: 'Taller Juan Ayllu', img: '/img/Rectangle41.png'},
        {name: 'Tapiz Barro Indio III', price: 100, owner: 'Taller Pepe Ayllu', img: '/img/Rectangle41.png'},
        {name: 'Tapiz Cuero de conejo III', price: 200, owner: 'Taller Camacho Ayllu', img: '/img/Rectangle41.png'},
        {name: 'Tapiz Pelaje de burro III', price: 500, owner: 'Taller Carlitos Ayllu', img: '/img/Rectangle41.png'},
        {name: 'Tapiz Cachos de toro III', price: 900, owner: 'Taller Postobon Ayllu', img: '/img/Rectangle41.png'},
        {name: 'Tapiz Pelaje de camello III', price: 3600, owner: 'Taller Esquinero Ayllu', img: '/img/Rectangle41.png'},
        {name: 'Tapiz Pezuña de yegua III', price: 2600, owner: 'Taller Grundpet Ayllu', img: '/img/Rectangle41.png'}
    ]
}

export const WorkshopPreview = () => {

    return (

        <>
        
            <Muesca/>
            <div className="flex items-center justify-center absolute top-0 left-0 right-0 m-auto w-[200px] h-[35px] bg-703A31 text-center text-blanco font-semibold">

                {tallerInfo.name}

            </div>
            <section className="w-full h-[300px] bg-2E1108">

                <div className="h-[80%] object-cover">
                    <img className="w-full h-full" src={tallerInfo.img} alt={tallerInfo.name} />
                </div>

                <div></div>

            </section>
            

        </>

    )

}