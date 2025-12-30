import Link from "next/link";
import Image from "next/image";

export default async function ToolBar(){
    return (
    <div className="w-full overflow-x-auto">
        <div className="w-7/8 md:w-2/3 pt-2 flex flex-nowrap justify-start gap-10 ml-auto mr-auto sm:items-start">
            <Image src="/images/favicon.ico" className="rounded-lg" alt="Logo" width={64} height={64} />
            <Link href="#Projects_title" className="inline-block text-black mt-auto mb-auto font-bold text-3xl text-bold decoration-solid decoration-blue-300 decoration-4 underline underline-offset-6 cursor-pointer"> Projects </Link>
            <Link href="#Skills_title" className="inline-block text-black mt-auto mb-auto font-bold text-3xl text-bold decoration-solid decoration-blue-300 decoration-4 underline underline-offset-6 cursor-pointer"> Skills </Link>
            <Link href="/files/Aaron_Han.pdf" target="_blank" className="inline-block text-black mt-auto mb-auto font-bold text-3xl text-bold decoration-solid decoration-blue-300 decoration-4 underline underline-offset-6 cursor-pointer"> Resume </Link>
            <Link href="mailto:aaronhan2006@gmail.com" className="bg-green-400 order mt-auto mb-auto ml-auto mr-auto xl:mr-0 font-bold text-3xl text-bold rounded-3xl cursor-pointer z-30"> 
                <p className="text-white ml-3 mr-3 mt-2 mb-2 cursor-pointer"> Contact </p>
            </Link>
        </div>
    </div>);
}