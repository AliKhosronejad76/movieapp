export default function Item({img}){
    return(
        <div className="relative h-[400px] lg:h-[500px]">
            <div className="bg-[#000] opacity-50 absolute top-0 bottom-0 right-0 left-0 z-40 w-full h-full"></div>
            <img src={img} className="relative h-full w-full object-cover bg-center " />

            <div className="absolute z-50 top-16 lg:top-20 bottom-0 left-0 right-0  flex items-start justify-start px-2 md:px-4 lg:px-12">
                
                <div className="w-full text-white ">
                    <h1 className="text-3xl  lg:text-5xl mb-4">Lord of Rings III</h1>

                    <p className="mt-5 text-justify md:px-2 leading-loose text-sm lg:text-lg w-full md:w-[95%] lg:w-[70%]">
                    The Lord of the Rings is an epic[1] high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million 
                    </p>

                    <div className="mt-4 px-2.5 py-2 ">
                        <button className="bg-red-600 text-white text-xl rounded-sm w-[100px] h-[40px] lg:w-[160px] lg:h-[47px] transition-all duration-400 text-base lg:text-lg hover:bg-red-800 ">Watch</button>
                    </div>
                </div>


            </div>
        </div>
    )
}