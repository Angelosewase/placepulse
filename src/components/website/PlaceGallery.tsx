import { useParams } from "react-router-dom";
import { accommodations_data } from "../../constants/dummy";
import ImageWithHoverEffect from "../Images/ImageHoverEffect";
import { IoChevronBackCircleOutline } from "react-icons/io5";
const PlaceGallery = () => {
  const params = useParams();
  const accommodation_id = params.id ?? 0;
  const accommodation = accommodations_data[Number(accommodation_id)];

  return (
    <div className="w-full md:px-10 pb-[50vh] pt-[8vh]">
      <div className="w-full flex justify-start">
        <button onClick={() => history.back()} className="p-3">
          <IoChevronBackCircleOutline color="black" size={23} />
        </button>
      </div>
      <div className="columns-[200px] mt-3">
        {accommodation.images.map((image, index) => {
          return <ImageWithHoverEffect image={image} key={index} />;
        })}
      </div>
    </div>
  );
};

export default PlaceGallery;
