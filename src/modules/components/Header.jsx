import { useState, useRef, useEffect } from "react"
import { LeftMenu } from "./Leftmenu"

export function Header({searchTerm, handleSearch}) {

    const [menuchange, setMenuChange] = useState(false)

    const menuRef = useRef(null)
    
    useEffect(()=> {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuChange(false)
                // console.log(menuRef.current)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    return(
        <header className="bg-[var(--color-2E1108)] w-full flex justify-around h-[70px] items-center">
            
            <div
                ref={menuRef}
                className={`leftmenu flex flex-col w-[70vw] h-[100%] bg-[var(--color-2E1108)] z-20 absolute text-white p-5 gap-5 justify-around left-0 top-0 transition-transform duration-300 ease-in-out ${
                    menuchange ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <LeftMenu />
            </div>

            <svg onClick={()=> setMenuChange(!menuchange)} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="#FFA800" className="transform: ;msFilter:;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>

            <div className="flex items-center bg-[var(--color-703A31)] h-[40px] rounded-md p-2">
            <svg
                className="w-6 h-6 text-gray-500 mr-2"
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
                    stroke="#FFA800"
                    strokeWidth="4"
                />
                <path
                    d="M33.3945 40.7812L55.6657 72.6541"
                    stroke="#FFA800"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>
            <input
                type="text"
                placeholder="Buscar producto o tienda..."
                className="flex-1 bg-transparent border-none outline-none text-white"
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
        </header>
    )
}