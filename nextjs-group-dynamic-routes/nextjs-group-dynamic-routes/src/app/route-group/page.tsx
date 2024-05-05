import Link from "next/link";
import React from "react"; 

function RouteGroup () {

    return(

        <main>
            <div className="p-5">
            Route Group 
            <div className="flex flex-col gap-5 mt-5">
               <Link href={"/route-group/login"} className="bg-gray-200 text-blue-500 p-3 mt-5 text-center font-bold text-2xl ">Login </Link> 
               <Link href={"/route-group/register"} className="bg-gray-200 text-blue-500 p-3 mt-5 text-center font-bold text-2xl"> Register </Link>
            </div>           
            </div>
        </main>
    )
}

export default RouteGroup;