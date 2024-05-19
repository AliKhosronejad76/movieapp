
const items = ["Home","Series","Movies","Pages","Pricing","Contact"]

export default function Menu(){
    return(
        <ul className="invisible lg:visible flex items-center ml-6 h-full">
            {items.map((item , index )=> (
                <li key={index} className="w-[90px]  h-full cursor-pointer flex items-center justify-center text-bold  transition-all duration-400 hover:text-red-700">{item}</li>
            ))}
        </ul>
    )
}


