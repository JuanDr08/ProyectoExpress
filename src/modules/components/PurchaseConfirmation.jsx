import React from "react";
import { useNavigate } from "react-router-dom";

export const PurchaseConfirmation = ({ productos,onClose }) => {

    const navigate = useNavigate()

    const handlePayment = async () => {
        console.log(productos)

        try {    
            for (let id of productos) {
                console.log(id.carrito._id)
                let query = await fetch(`http://localhost:3000/user/purchases/${id.carrito._id}`, {method: 'POST', credentials: "include"})
                let res = await query.json()
                console.log(res)
                if (res.status == 200) {
                    let deleteQuery = await fetch(`http://localhost:3000/user/cart/${id.carrito._id}`, {method: 'DELETE', credentials: "include"})
                    let res2 = deleteQuery.json()
                    console.log(res2)
                }
                console.log(res)
            }
        } catch (error) {
            console.error('Error inesperado', error)
        }

        onClose()
        navigate('/payment/success')

    }

    return (
        <div className="fixed inset-0 flex items-center justify-center">

            <div className="absolute inset-0 bg-[var(--color-2E1108)] opacity-70"></div>
            
            <dialog open className="relative bg-[var(--color-703A31)] rounded-lg text-white p-6 mx-auto z-10">
                <h2 className="mb-4">¿Seguro de realizar la compra?</h2>

                <div className="flex flex-col justify-around items-center gap-3">
                    <button className="flex items-center justify-center gap-2 bg-[var(--color-2E1108)] w-[100px] h-10 rounded-lg" onClick={handlePayment}>
                        <svg width="30" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="37.5" y="-1.24264" width="54.7903" height="54.7903" rx="12" transform="rotate(45 37.5 -1.24264)" stroke="white" strokeWidth="6"/><path d="M20.9404 40.4898L29.4948 49.1655C30.278 49.9599 31.5598 49.9599 32.343 49.1655L53.3704 27.8398" stroke="white" strokeWidth="5"/></svg>
                        <span>Si</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[var(--color-2E1108)] w-[100px] h-10 rounded-lg" onClick={onClose}>
                        <svg width="30" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="37.5" y="-1.24264" width="54.7903" height="54.7903" rx="12" transform="rotate(45 37.5 -1.24264)" stroke="white" strokeWidth="6"/><path d="M26 26L49 49" stroke="white" strokeWidth="6"/><path d="M49 26L26 49" stroke="white" strokeWidth="6"/></svg>
                        <span>No</span>
                    </button>
                </div>

            </dialog>
        </div>
    );
};
