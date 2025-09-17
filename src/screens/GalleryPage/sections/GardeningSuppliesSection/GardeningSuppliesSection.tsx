import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { useCart } from "../../../../contexts/CartContext";

export const GardeningSuppliesSection = (): JSX.Element => {
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

  const products = [
    {
      id: 1,
      image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-7-1.png",
      title: "Maple Tree",
      description: "Description of second product",
      price: "$49.99",
      priceFont: "[font-family:'Alata',Helvetica]",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-8.png",
      title: "Apple Tree",
      description: "Description of third product",
      price: "$54.99",
      priceFont: "[font-family:'Inter',Helvetica] font-bold",
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-9.png",
      title: "Birch Tree",
      description: "Description of fourth product",
      price: "$49.99",
      priceFont: "[font-family:'Alata',Helvetica]",
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-wrap items-end gap-8 justify-center translate-y-[-1rem] animate-fade-in opacity-0">
        {products.map((product, index) => (
          <Card
            key={product.id}
            className="w-[404px] bg-transparent border-none shadow-none translate-y-[-1rem] animate-fade-up opacity-0"
            style={
              {
                "--animation-delay": `${(index + 1) * 200}ms`,
              } as React.CSSProperties
            }
          >
            <CardContent className="p-0 flex flex-col items-start gap-6">
              <img
                className="w-[404px] h-[238px] object-cover"
                alt={product.title}
                src={product.image}
              />

              <div className="flex flex-col items-start justify-center gap-1 w-full">
                <h3 className="w-full mt-[-1.00px] [font-family:'Alata',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9">
                  {product.title}
                </h3>

                <p className="w-full [font-family:'Alata',Helvetica] font-normal text-[#828282] text-xl tracking-[0] leading-[30px]">
                  {product.description}
                </p>

                <div
                  className={`w-full ${product.priceFont} font-normal text-black text-xl tracking-[0] leading-[30px]`}
                >
                  {product.price}
                </div>

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
