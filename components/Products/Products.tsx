// components/ProductsSection.tsx
import React from 'react'
import Image from 'next/image'

interface Product {
    id: number
    name: string
    color: string
    price: string
    imageSrc: string
    link: string
}

const products: Product[] = [
    {
        id: 1,
        name: "Basic Tee",
        color: "Black",
        price: "$35",
        imageSrc: "/pro/1.jpg",
        link: "#",
    },
    {
        id: 2,
        name: "Basic Tee",
        color: "White",
        price: "$35",
        imageSrc: "/pro/1.jpg",
        link: "#",
    },
    {
        id: 3,
        name: "Basic Tee",
        color: "Olive",
        price: "$35",
        imageSrc: "/pro/1.jpg",
        link: "#",
    },
    {
        id: 4,
        name: "Basic Tee",
        color: "Sky Blue",
        price: "$35",
        imageSrc: "/pro/1.jpg",
        link: "#",
    },
]

const ProductsSection: React.FC = () => {
    return (
        <div className="bg-black">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <p className="flex items-center justify-center text-yellow-400 uppercase tracking-widest mb-2 gap-3">
                    <span className="block w-16 h-px bg-yellow-400" />
                    Our Products
                    <span className="block w-16 h-px bg-yellow-400" />
                </p>
                <h2 className="text-4xl font-bold text-center uppercase mb-4 text-white">
                    Our Products
                </h2>
                <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
                    Customers also purchased
                </h2>

                <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <Image
                                src={product.imageSrc}
                                alt={`Front of ${product.name} in ${product.color}`}
                                width={400}
                                height={400}
                                className="aspect-square w-full bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-white">
                                        <a href={product.link}>
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-white">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-white">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsSection
