

export const CategoryHeaders = ({title}) => {

    return (
        <header className="flex w-full items-center justify-center m-[5px]">
            <svg width="80" height="80" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="169.706" height="169.706" rx="7" transform="matrix(0.707107 0.707107 0.707107 -0.707107 -2 118)" fill="#703A31" fill-opacity="0.38" />
            </svg>
            <p className="absolute text-center w-[100px] font-bold text-xl text-[var(--color-9D1A1A)]"> { title } </p>
        </header>
    )

}