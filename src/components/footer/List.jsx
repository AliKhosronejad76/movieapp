const items=["Terms of Use","Privicy-Policy","Blog","FAQ","Watch List",]
export default function List(){
    return(
        <ul className="flex justify-around lg:justify-between text-white  w-full lg:w-max ">
            {items.map((item , index )=> (
                <li key={index} className="w-[max] px-2 cursor-pointer text-center  lg:mx-2 transition-all duration-500 hover:text-red-700 ">{item}</li>
            ))}
        </ul>
    )
}