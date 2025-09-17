import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GalleryPage } from "./screens/GalleryPage/GalleryPage";
import { CartProvider } from "./contexts/CartContext";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CartProvider>
      <GalleryPage />
    </CartProvider>
  </StrictMode>,
);
