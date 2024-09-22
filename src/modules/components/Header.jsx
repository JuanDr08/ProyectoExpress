export function Header() {
    return(
        <header className="bg-[var(--color-2E1108)] flex justify-around h-[70px] items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="#FFA800" className="transform: ;msFilter:;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>

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
                className="flex-1 bg-transparent border-none outline-none"
            />
        </div>
        </header>
    )
}