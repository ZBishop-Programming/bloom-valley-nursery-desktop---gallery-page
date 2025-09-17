import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { useCart } from "../../../../contexts/CartContext";

const plantsData = [
  {
    id: 1,
    name: "Aloe Plant",
    description:
      "Succulent.\nRequires indirect sunlight\nWell draining soil\nInfrequent watering",
    price: "$17.99",
    image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-4.png",
    animationDelay: "0ms",
  },
  {
    id: 2,
    name: "Spider Plant",
    description:
      "Asparagaceae\nModerate to indirect sunlight\nWell draining soil\nConstant watering",
    price: "$24.99",
    image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-5.png",
    animationDelay: "200ms",
  },
  {
    id: 3,
    name: "String Of Pearls",
    description:
      "Succulent\nBright-indirect sunlight\nWell draining soil\nOnly water when soil dry",
    price: "$19.99",
    image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-6-1.png",
    animationDelay: "400ms",
  },
];

export const IndoorPlantsSection = (): JSX.Element => {
  const { addToCart } = useCart();

  const handleAddToCart = (plant: typeof plantsData[0]) => {
    addToCart({
      id: plant.id.toString(),
      name: plant.name,
      price: plant.price,
      image: plant.image
    });
    alert(`${plant.name} has been added to your cart.`);
  };

  return (
    <section className="w-full px-4 py-8">
      <div className="flex flex-wrap items-end gap-8 justify-center">
        {plantsData.map((plant) => (
          <Card
            key={plant.id}
            className="w-full max-w-[404px] h-auto bg-transparent border-none shadow-none translate-y-4 animate-fade-up opacity-0"
            style={
              {
                "--animation-delay": plant.animationDelay,
              } as React.CSSProperties
            }
          >
            <CardContent className="p-0 flex flex-col gap-6">
              <div className="relative w-full h-[238px] overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  alt={plant.name}
                  src={plant.image}
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="[font-family:'Alata',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9">
                  {plant.name}
                </h3>

                <p className="[font-family:'Alata',Helvetica] font-normal text-[#828282] text-xl tracking-[0] leading-[30px] whitespace-pre-line">
                  {plant.description}
                </p>

                <p className="[font-family:'Alata',Helvetica] font-normal text-black text-xl tracking-[0] leading-[30px] font-semibold">
                  {plant.price}
                </p>

                <Button 
                  onClick={() => handleAddToCart(plant)}
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
