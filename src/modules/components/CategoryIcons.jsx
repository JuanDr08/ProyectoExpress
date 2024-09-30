import { useRef } from "react"


export const CategoryIcons =  ({icon, title, changeCat}) => {

    const catRef = useRef(null)

    return (
        <div ref={catRef} onClick={() => changeCat(catRef.current)} className=' flex flex-col justify-evenly items-center  min-w-[80px] h-full '>
            <div className='flex justify-center min-w-[60px] h-[60px] bg-703A31 rounded-[100%]'>
                {icon}
            </div>
            <p className='p-0 m-0 min-h-max leading-none text-center'>{title}</p>
        </div>

    )
}