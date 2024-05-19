export default function ActionItem({icon}){
    return(
        <button
         className="w-[40px] h-[40px] mx-2 rounded-full flex items-center justify-center border border-white"
        >
            {icon}
        </button>
    )
}