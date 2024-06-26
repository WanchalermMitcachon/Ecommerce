import { useEffect, useState } from "react";

function CarouselMain({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  const updateImageSrc = () => {
    if (window.innerWidth < 1180) {
      setIsModalOpen(false);
    } 
  };

  return (
    <div className="relative">
      <img
        src={item.images[currentIndex].main}
        alt={`Product ${currentIndex + 1}`}
        className="w-full lg:rounded-xl cursor-pointer"
        onClick={openModal}
      />
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-[50px] h-[50px] bg-[#FFFFFF] bg-opacity-90 text-black px-3 py-1 rounded-full focus:outline-none lg:hidden"
        onClick={handlePrevious}
      >
        <span className="text-xl">‹</span>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[50px] h-[50px] bg-white bg-opacity-90 px-3 py-1 rounded-full focus:outline-none lg:hidden"
        onClick={handleNext}
      >
        <span className="text-xl">›</span>
      </button>
      <div className="hidden md:flex justify-center mt-4 space-x-2 lg:space-x-6 lg:mt-10">
        {item.images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 cursor-pointer md:object-fit md:w-36 h-36 lg:w-24 lg:h-24 ${
              index === currentIndex ? "border-4 border-orange opacity-50" : ""
            } lg:rounded-xl`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="hidden lg:flex lg:fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-11/12 max-w-xl mx-auto">
            <img
              src={item.images[currentIndex].main}
              alt={`Product ${currentIndex + 1}`}
              className="w-full lg:rounded-xl"
            />
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-[50px] h-[50px] bg-white bg-opacity-90 text-black px-3 py-1 rounded-full focus:outline-none"
              onClick={handlePrevious}
            >
              <span className="text-xl">‹</span>
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[50px] h-[50px] bg-white bg-opacity-90 text-black px-3 py-1 rounded-full focus:outline-none"
              onClick={handleNext}
            >
              <span className="text-xl">›</span>
            </button>
            <button
              className="absolute top-4 right-4 w-[30px] h-[30px] bg-white bg-opacity-90 text-black rounded-full focus:outline-none"
              onClick={closeModal}
            >
              <span className="text-xl">×</span>
            </button>
            <div className="flex justify-center mt-4 space-x-2 lg:space-x-6 lg:mt-10">
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={image.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 cursor-pointer md:object-fit md:w-36 h-36 lg:w-24 lg:h-24 ${
                    index === currentIndex
                      ? "border-4 border-orange opacity-50"
                      : ""
                  } lg:rounded-xl`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselMain;
