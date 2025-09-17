import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { GardeningSuppliesSection } from "./sections/GardeningSuppliesSection/GardeningSuppliesSection";
import { IndoorPlantsSection } from "./sections/IndoorPlantsSection/IndoorPlantsSection";
import { OutdoorPlantsSection } from "./sections/OutdoorPlantsSection/OutdoorPlantsSection";
import { TopPicksSection } from "./sections/TopPicksSection/TopPicksSection";
import { ViewCartButton } from "../../components/ViewCartButton/ViewCartButton";
import { useCart } from "../../contexts/CartContext";

const topPicksProducts = [
  {
    id: 1,
    name: "Maple Tree",
    price: "$49.99",
    image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-7-1.png",
  },
  {
    id: 2,
    name: "Potting Soil",
    price: "$18.99",
    image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-10-1.png",
  },
  {
    id: 3,
    name: "String of Pearls",
    price: "$19.99",
    image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-6-1.png",
  },
  {
    id: 4,
    name: "Watering Can",
    price: "$14.99",
    image: "https://c.animaapp.com/mfkekfwl57gCHC/img/image-11-1.png",
  },
];

export const GalleryPage = (): JSX.Element => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: { id: number; name: string; price: string; image: string }) => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image
    });
    alert(`${product.name} has been added to your cart.`);
  };

  return (
    <main className="bg-white w-full min-h-screen" data-model-id="1:777">
      <ViewCartButton />
      <div className="w-full max-w-none mx-auto">
        {/* Header Section */}
        <header className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <img
            className="w-full h-[514px] object-cover"
            alt="Header with image"
            src="https://c.animaapp.com/mfkekfwl57gCHC/img/header-with-image.png"
          />
          <div className="w-full py-4">
            <h1 className="w-full [font-family:'Alata',Helvetica] font-normal text-[#00231c] text-5xl text-center tracking-[0] leading-[72px]">
              Indoor Plants
            </h1>
          </div>
        </header>

        {/* Indoor Plants Section */}
        <section className="w-full px-8 py-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <IndoorPlantsSection />
        </section>

        {/* Gardening Supplies Section Title */}
        <section className="w-full px-8 py-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <h2 className="w-full [font-family:'Alata',Helvetica] font-normal text-[#00231c] text-5xl text-center tracking-[0] leading-[72px]">
            Gardening Supplies
          </h2>
        </section>

        {/* Outdoor Plants Section */}
        <section className="w-full px-8 py-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <OutdoorPlantsSection />
        </section>

        {/* Outdoor Plants Section Title */}
        <section className="w-full px-8 py-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <h2 className="w-full [font-family:'Alata',Helvetica] font-normal text-[#00231c] text-5xl text-center tracking-[0] leading-[72px]">
            Outdoor Plants
          </h2>
        </section>

        {/* Gardening Supplies Section */}
        <section className="w-full px-8 py-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <GardeningSuppliesSection />
        </section>

        {/* Our Top Picks Section Title */}
        <section className="w-full px-8 py-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <h2 className="w-full [font-family:'Alata',Helvetica] font-normal text-[#00231c] text-5xl text-center tracking-[0] leading-[72px]">
            Our Top Picks!
          </h2>
        </section>

        {/* Our Top Picks Products Grid */}
        <section className="w-full px-8 py-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
          <div className="max-w-6xl mx-auto flex justify-center">
            <Card className="bg-white rounded-[20px] border-[10px] border-solid border-[#00231c] shadow-[0px_4px_4px_#00000040] p-6">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 gap-6">
                  {topPicksProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-6 pb-6 border-b-2 border-gray-300 last:border-b-0"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="w-[400px] h-[230px] object-cover"
                          alt={product.name}
                          src={product.image}
                        />
                      </div>

                      <div className="flex-1 border-l-2 border-gray-300 pl-6">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-[150px] h-[65px] bg-[#d9d9d9] flex items-center justify-center">
                            <span className="[font-family:'Alata',Helvetica] font-normal text-xs text-center leading-[18px] text-black tracking-[0]">
                              {product.price}
                            </span>
                          </div>

                          <Button 
                            onClick={() => handleAddToCart({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image
                            })}
                            className="h-auto inline-flex items-center gap-2 px-8 py-5 bg-[#00231c] rounded-lg shadow-button-shadow hover:bg-[#00231c]/90 transition-colors"
                          >
                            <span className="[font-family:'Alata',Helvetica] font-normal text-white text-2xl tracking-[0] leading-9">
                              Add to Cart
                            </span>
                          </Button>
                        </div>
                      </div>

                      <div className="flex-1 pl-6">
                        <h3 className="[font-family:'Alata',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer Section */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
          <TopPicksSection />
        </section>
      </div>
    </main>
  );
};
