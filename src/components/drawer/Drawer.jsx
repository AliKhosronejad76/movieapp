

const items = ["Home","Series","Movies","Pages","Pricing","Contact"]
export default function Drawer({drawer}){
    return(
        <div className={`${drawer ? "translate-x-[0px] " : "translate-x-[-700px]" } visible lg:invisible  bg-[#141414] w-[77%] text-white absolute fixed z-20 bottom-0 left-0 top-0 transition-all duration-800 ease-in-out `}>
             <ul className="visible lg:invisible  mt-8  ">
                {items.map((item , index )=> (
                    <li key={index} className="w-full  h-[50px] pl-8 cursor-pointer flex items-center  text-bold  transition-all duration-600 hover:bg-red-600">{item}</li>
                ))}
             </ul>
        </div>

    )

}