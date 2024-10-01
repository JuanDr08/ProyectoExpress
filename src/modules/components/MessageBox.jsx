export const MessageBox = ({transmitter, texto}) => {

    return (

        <div className={`bg-${transmitter == 'server' ? '9D1A1A' : '703A31'}  break-words p-4 relative rounded-lg max-w-[70%] text-blanco font-bold ${transmitter == 'cliente' ? 'self-end' : '' }`}>
            { texto }
        </div>

    )

}