

import Image from "next/image"
import { ProductCardProps } from "@/types"
import { Spinner, GoToDetail } from "@/components"

export default function CatalogCard({ product }: ProductCardProps) {




    return (
        <GoToDetail id={product.id} title={product.title} description={product?.description || ""} seed={product?.seed || []}>
            <article
                id={product.id}
                className="flex flex-col text-align-left items-center text-left mb-4 font-poppins mt-4"
            >
                <div className="relative group rounded-3xl overflow-hidden border-2 bg-borderpinkgradient bg-clip-border border-transparent w-fit h-fit flex items-center justify-center">
                <div className="flex items-center justify-center bg-[#2A1540] rounded-xl
                    ">
                    { !product.image ?
                        <Spinner size="100" colorText="#FAFAFA" />
                        :
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={375}
                            height={360}
                            className="object-cover transition-opacity duration-300 group-hover:opacity-60 rounded-xl"
                        />
                    }
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-buttongradiant shadow-lg text-white text-xl py-2 px-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver detalle
                </div>
            </div>
                <div className="p-0 mt-1 w-full">
                    <p className="text-textColor3 lg:text-2xl text-sm truncate font-normal">{product.title}</p>
                    <p className="text-textColor2 lg:text-xl text-sm font-normal truncate">{Array.isArray(product.seed) && product.seed.map((seed: string) => seed.toUpperCase()).join(", ")}</p>
                </div>
            </article>
        </GoToDetail>
    );
}