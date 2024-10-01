export const MessageBox = ({transmitter, texto}) => {

    return (

        <div className={`bg-${transmitter == 'server' ? '9D1A1A' : '703A31'}  break-words p-4 relative rounded-lg max-w-[70%] text-blanco font-bold ${transmitter == 'cliente' ? 'self-end' : '' }`}>
            <div className={` absolute bottom-[-20px] ${transmitter == 'server' ? 'left-0' : 'right-0'} h-6 w-8 ${transmitter == 'server' ? 'bg-9D1A1A border-t-9D1A1A' : 'bg-703A31 border-t-703A31'} `}></div>
            { texto }
        </div>

    )

}