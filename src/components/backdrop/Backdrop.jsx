export default function Backdrop({ drawer , setDrawer }){
    return(
        <div onClick={()=>setDrawer(false)} className={`${drawer ? " opacity-80 visible" : "opacity-0 invisible"} w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-[#000] overflow-hidden `}>

        </div>
    )
}