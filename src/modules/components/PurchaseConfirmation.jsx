import React from "react";

export const PurchaseConfirmation = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">

            <div className="absolute inset-0 bg-[var(--color-2E1108)] opacity-70"></div>
            
            <dialog open className="relative bg-[var(--color-703A31)] rounded-lg text-white p-6 mx-auto z-10">
                <h2 className="mb-4">¿Seguro de realizar la compra?</h2>

                <div className="flex flex-col justify-around items-center gap-3">
                    <button className="flex items-center justify-center gap-2 bg-[var(--color-2E1108)] w-[100px] h-10 rounded-lg" onClick={onClose}>
                        <svg width="30" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="37.5" y="-1.24264" width="54.7903" height="54.7903" rx="12" transform="rotate(45 37.5 -1.24264)" stroke="white" stroke-width="6"/><path d="M20.9404 40.4898L29.4948 49.1655C30.278 49.9599 31.5598 49.9599 32.343 49.1655L53.3704 27.8398" stroke="white" stroke-width="5"/></svg>
                        <span>Si</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[var(--color-2E1108)] w-[100px] h-10 rounded-lg" onClick={onClose}>
                        <svg width="30" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="37.5" y="-1.24264" width="54.7903" height="54.7903" rx="12" transform="rotate(45 37.5 -1.24264)" stroke="white" stroke-width="6"/><path d="M26 26L49 49" stroke="white" stroke-width="6"/><path d="M49 26L26 49" stroke="white" stroke-width="6"/></svg>
                        <span>No</span>
                    </button>
                </div>

            </dialog>
        </div>
    );
};
