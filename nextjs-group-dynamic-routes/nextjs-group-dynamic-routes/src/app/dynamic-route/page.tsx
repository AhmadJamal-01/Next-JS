import React from "react";
import Link from "next/Link"
function DynamicRoute  () {

    return (

    <main>
        <div>
        Dynamic Route Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus suscipit id aliquid reiciendis temporibus pariatur facilis ipsam quos sed fuga asperiores ipsa nesciunt neque dolorum, impedit voluptates odio! Autem, ullam.
        <div className="p-5 ">
<Link href={"/dynamic-route/blog"} className="underline"> Blog </Link>
        </div>
        </div>
    </main>
    )
}

export default DynamicRoute;