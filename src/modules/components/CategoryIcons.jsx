import { useRef } from "react"


export const CategoryIcons =  ({icon, title}) => {

    const catRef = useRef(null)

    const handleCategory = () => {
        console.log('hola')
        console.log(catRef)
    }

    return (
        <div ref={catRef} onClick={() => handleCategory()} className=' flex flex-col justify-evenly items-center  min-w-[80px] h-full border-b-4 border-b-2E1108 '>
            <div className='flex justify-center min-w-[80%] h-[70%] bg-703A31 rounded-[100%]'>
                {icon}
            </div>
            <p className='p-0 m-0 min-h-max leading-none text-center'>{title}</p>
            <button onClick={() => handleCategory()}>click</button>
        </div>

    )
}