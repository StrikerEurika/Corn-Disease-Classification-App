import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    async function loadBackgroundImages() {
      try {
        const imageModules = import.meta.glob(
          "/public/assets/background_images/*.{png,jpg,jpeg,svg}",
          { eager: true }
        );
        console.log("Image Modules found: ", imageModules);

        const imageUrls = Object.values(imageModules).map((module) => module.default);

        console.log("Available background images:", imageUrls);

        if (imageUrls.length > 0) {
          const randomIndex = Math.floor(Math.random() * imageUrls.length);
          setRandomImage(imageUrls[randomIndex]);
          console.log("Selected image:", imageUrls[randomIndex]);
        } else {
          console.warn("No background images found");
        }
      } catch (error) {
        console.error("Failed to load background images:", error);
      }
    }
    loadBackgroundImages();
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: randomImage
          ? `url(${randomImage})`
          : `url("public/assets/background_images/background-03.png")`,
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
