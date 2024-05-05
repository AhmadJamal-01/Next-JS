import Link from "next/link";

function Home() {
return (
  <main className="p-5">
    <p className="font-bold" >
        AHMAD JAMAL
    </p>
    <div className="flex gap-5 flex-col">
      <Link href={"/route-group"} className="text-blue-500 underline">Routes Group </Link>
      <Link href={"/dynamic-route"} className="text-blue-500 underline">Dynamic Routes </Link>
     
    </div>
  </main>
  );
}

export default Home;