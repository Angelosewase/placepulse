/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { AxiosAPI } from "../../utils/AxiosInstance";
import ImageWithHoverEffect from "../Images/ImageHoverEffect";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
const PlaceGallery = () => {
  const params = useParams();
  const accommodation_id = params.id ?? 0;
  // const accommodation = accommodations_data[Number(accommodation_id)];
  const [loading, setLoading] = useState(true);
  const [, setAccommodation] = useState<any>();
  const [newImages, setNewImages] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    AxiosAPI.get(`/accommodation/get/${accommodation_id}`)
      .then((res) => {
        setAccommodation(res.data.data[0]);
        console.log(res.data.data[0]);
        setNewImages([
          res.data.data[0].images[0],
          res.data.data[0].images[0],
          res.data.data[0].images[0],
          res.data.data[0].images[0],
          res.data.data[0].images[0],
          res.data.data[0].images[0],
          res.data.data[0].images[0],
          res.data.data[0].images[0],
          res.data.data[0].images[0],
          res.data.data[0].images[0],
          res.data.data[0].images[0],
        ]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="w-full md:px-10 pb-[50vh] pt-[8vh]">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <ClipLoader color="black" size={23} />
        </div>
      ) : (
        <>
          <div className="w-full flex justify-start">
            <button onClick={() => history.back()} className="p-3">
              <IoChevronBackCircleOutline color="black" size={23} />
            </button>
          </div>
          <div className="w-full columns-[300px] mt-3">
            {newImages.map((image: any, index: number) => {
              return <ImageWithHoverEffect image={image} key={index} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PlaceGallery;
