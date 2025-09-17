import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { useCart } from "../../../../contexts/CartContext";

const products = [
  {
    id: 1,
    image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-10-1.png",
    title: "Potting Soil",
    description: "Description of second product",
    price: "$18.99",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-11-1.png",
    title: "Watering Can",
    description: "Description of third product",
    price: "$14.99",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-12.png",
    title: "Bird House",
    description: "Description of fourth product",
    price: "$12.99",
  },
];

export const OutdoorPlantsSection = (): JSX.Element => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      image: product.image
    });
    alert(`${product.title} has been added to your cart.`);
  };

  return (
    <section className="w-full px-8 py-12">
      <div className="flex flex-wrap items-end gap-8 justify-center">
        {products.map((product, index) => (
          <Card
            key={product.id}
            className={`w-[404px] h-[366px] bg-transparent border-none shadow-none translate-y-4 animate-fade-up opacity-0 [--animation-delay:${index * 200}ms] hover:scale-105 transition-transform duration-300 ease-out cursor-pointer`}
          >
            <CardContent className="flex flex-col items-start gap-6 p-0 h-full">
              <img
                className="w-full h-[238px] object-cover rounded-lg"
                alt={product.title}
                src={product.image}
              />

              <div className="flex flex-col items-start justify-center gap-1 w-full">
                <h3 className="w-full [font-family:'Alata',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9">
                  {product.title}
                </h3>

                <p className="w-full [font-family:'Alata',Helvetica] font-normal text-[#828282] text-xl tracking-[0] leading-[30px]">
                  {product.description}
                </p>

                <p className="w-full [font-family:'Alata',Helvetica] font-normal text-black text-xl tracking-[0] leading-[30px]">
                  {product.price}
                </p>

                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-4 h-auto inline-flex items-center gap-2 px-6 py-3 bg-[#00231c] rounded-lg shadow-button-shadow hover:bg-[#00231c]/90 transition-colors"
                >
                  <span className="[font-family:'Alata',Helvetica] font-normal text-white text-lg tracking-[0] leading-7">
                    Add to Cart
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
