import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import BamboImage from '@/assets/images/Bambo.png';
import { FiMapPin } from "react-icons/fi";
interface Accommodation {
  images: string[];
  name: string;
  type: string;
  location: string;
  rating: number;
}

interface CarouselProps {
  accommodations: Accommodation[];
}

const Carousel = ({ accommodations }: CarouselProps) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === accommodations.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? accommodations.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className="relative">
    <img src={BamboImage} alt=""  className="absolute -top-40 right-64 w-20"/>
       <button
          // onClick={prevSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg z-10"
        >
          <TiArrowLeftThick size={24} />
        </button>
      <div
        className=" flex transition-transform duration-500   w-full gap-10 justify-center"
        // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {accommodations?.map((accommodation, index) => (
          <div key={index} className="hover:shadow-xl shadow-md shadow-gray-100 hover:s hover:shadow-gray-100  transition-all rounded duration-200">
            <img
              src={accommodation.images[0]}
              alt={accommodation.name}
              className="w-[330px] h-[280px] rounded-t"
            />
            <div className="pl-4 mt-2 pb-4">
              <h3 className="font-bold">{accommodation.name}</h3>
              <p>
                Category: <strong>{accommodation.type}</strong>
              </p>
              <p className="flex gap-1 items-center text-gray-500"><FiMapPin size={15} className="text-black font-extrabold"/>{accommodation.location}</p>
              <p className="text-xs mt-2 font-extrabold">
                {[...Array(accommodation.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}({accommodation.rating} stars)
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
          // onClick={nextSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg z-10"
        >
          <TiArrowRightThick size={24} />
        </button>
    </div>
  );
};

export default Carousel;
