/* eslint-disable @typescript-eslint/no-explicit-any */
import { MultiSelect, Select } from "@mantine/core";
import { BsCheck } from "react-icons/bs";
import { HiPencilSquare } from "react-icons/hi2";
import ImagesDropCard from "../../../components/DropCards/ImagesDropCard";
import { useState } from "react";
import { AuthorizedAxiosAPI } from "../../../utils/AxiosInstance";
import { ClipLoader } from "react-spinners";
import { notifications } from "@mantine/notifications";
interface Accommodation {
  name: string;
    description: string;
    type: string;
    price: string;
    location: string;
    images: any[];
    amenities: any;
    freebies: any;
    discount: string;
    stock: number | string;
}
const OwnerAddAccommodations = () => {
  const [images, setImages] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const handleAddImage = (image: any) => {
    setImages((prevImages: any) => [...prevImages, image]);
    console.log(images);
  }

  const [formData, setFormData] = useState<Accommodation>({
    name: "",
    description: "",
    type: "",
    price: "",
    location: "",
    images: [],
    amenities: [],
    freebies: [],
    discount: "",
    stock: 0
  })

  const handleChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: any) => {
    setLoading(true)
    e.preventDefault();
    setFormData({...formData, images: images});
    console.log("images --> ", images);
    const AccommodationData = new FormData();
    AccommodationData.append("name", formData.name);
    AccommodationData.append("description", formData.description);
    AccommodationData.append("location", formData.location);
    AccommodationData.append("type", formData.type);
    AccommodationData.append("price", formData.price);
    AccommodationData.append("images", images[0]);
    AccommodationData.append("amenities", [formData.amenities]);
    AccommodationData.append("freebies", [formData.freebies]);
    AccommodationData.append("discount", formData.discount);
    AuthorizedAxiosAPI.post("/accommodation/create", AccommodationData, {
      headers: {
        "Content-Type" : "multipart/form-data"
      }
    })
      .then((res)=>{
        console.log("response --> ",res.data);
        notifications.show({
          message: res.data.message,
          color: "green"
        })
        setFormData({
          name: "",
          description: "",
          type: "",
          price: "",
          location: "",
          images: [],
          amenities: [],
          freebies: [],
          discount: "",
          stock: 0
        })
        setImages([]);
      })
      .catch((err)=>{
        console.log("error creating  -->",err);
        notifications.show({
          message: err.response.data.message
        })
      })
      .finally(()=> setLoading(false));
  }
  return (
    <form onSubmit={handleSubmit} className="w-full pb-10" encType="multipart/form-data">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-[#3B9DF8] font-extrabold">Register new accommodation</h1>
        <div className="flex gap-3 items-center">
          <button type="button" className="flex gap-2 items-center px-3 py-2 border border-[#CECECE] rounded-md">
            <HiPencilSquare color="black" />
            <p className="text-sm font-bold">Save draft</p>
          </button>
          <button disabled={loading} type="submit" className="flex gap-2 items-center px-3 py-2 bg-[#3B9DF8] rounded-md">
            {loading ? <ClipLoader color="white" size={20}/> : (
              <>
                <BsCheck color="white" size={20}/>
                <p className="text-sm font-bold text-white">Add accommodation</p>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between mt-10">
        <div className="w-[60%] flex flex-col gap-3">
            <div className="w-full bg-[#D9D9D924] rounded-lg p-3">
              <header className="font-extrabold">General Information</header>

              <div className="mt-3 flex flex-col gap-2 ">
                <label htmlFor="name" className="text-sm font-medium">Name Of Accommodation</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" className="w-full text-sm py-3 pl-4 pr-3 outline-none border border-neutral-400 rounded-md"/>
              </div>
              <div className="mt-3 flex flex-col gap-2 ">
                <label htmlFor="location" className="text-sm font-medium">Location Of Accommodation</label>
                <input id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Enter Location" className="w-full text-sm py-3 pl-4 pr-3 outline-none border border-neutral-400 rounded-md"/>
              </div>
              <div className="mt-3 flex flex-col gap-2 ">
                <label htmlFor="desc" className="text-sm font-medium">Accommodation Description</label>
                <textarea id="desc" name="description" value={formData.description} onChange={handleChange} placeholder="Enter Description" className="w-full resize-none text-sm py-3 h-[20vh] pl-4 pr-3 outline-none border border-neutral-400 rounded-md"/>
              </div>

              <div className="w-full flex justify-between gap-3 mt-3">
                <div className="w-full">
                  <h1 className="text-sm font-bold">Available Amenities</h1>
                  <MultiSelect 
                    className="mt-2"
                    value={formData.amenities}
                    onChange={(e: any)=> setFormData({...formData, amenities: e})}
                    data={[
                      {
                        label: "Full Internet",
                        value: "Full_Internet"
                      },
                      {
                        label: "Air Conditioned",
                        value: "Air_Conditioned"
                      },
                      {
                        label: "Fitness Gym",
                        value: "Fitness_Gym"
                      },
                      {
                        label: "Swimming Pool",
                        value: "Swimming_Pool"
                      },
                    ]}
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-sm font-bold">Available Freebies</h1>
                  <MultiSelect 
                    className="mt-2"
                    value={formData.freebies}
                    onChange={(e: any)=> setFormData({...formData, freebies: e})}
                    data={[
                      {
                        label: "Free Internet",
                        value: "Free_Internet"
                      },
                      {
                        label: "Free Coffee",
                        value: "Free_Coffee"
                      },
                      {
                        label: "Free Parking",
                        value: "Free_Parking"
                      },
                      {
                        label: "Free Cancellation",
                        value: "Free_Cancellation"
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#D9D9D924] rounded-lg p-3">
            <header className="font-extrabold">Price And Stock</header>
            <div className="w-full flex justify-between gap-3 mt-3">
                <div className="w-full">
                  <label htmlFor="price" className="text-sm font-medium">Best Pricing </label>
                  <input id="price" name="price" value={formData.price} onChange={handleChange} className="w-full text-sm py-3 pl-4 pr-3 outline-none border border-neutral-400 rounded-md"/>
                </div>
                <div className="w-full">
                  <label htmlFor="stock" className="text-sm font-medium">Stock</label>
                  <input id="stock" name="stock" value={formData.stock} onChange={handleChange} className="w-full text-sm py-3 pl-4 pr-3 outline-none border border-neutral-400 rounded-md"/>
                </div>
              </div>
            <div className="w-full flex justify-between gap-3 mt-3">
                <div className="w-full">
                  <label htmlFor="discount" className="text-sm font-medium">Discount </label>
                  <input id="discount" name="discount" value={formData.discount} onChange={handleChange} className="w-full text-sm py-3 pl-4 pr-3 outline-none border border-neutral-400 rounded-md"/>
                </div>
                <div className="w-full">
                  <label htmlFor="stock" className="text-sm font-medium">Stock</label>
                  <Select data={[
                    {
                      label: "Percentage",
                      value: "Percentage"
                    },
                    {
                      label: "FRW",
                      value: "FRW"
                    },
                  ]}/>
                </div>
              </div>
            </div>
        </div>
        <div className="w-[37%] flex flex-col gap-3">
          <div className="w-full bg-[#D9D9D924] rounded-lg p-3">
            <header className="font-extrabold">Upload Place Images</header>
            <div className="w-full mt-4">
                  <ImagesDropCard selectedImage={images[0]} setSelectedImage={handleAddImage} minHeight={"40vh"}/>
                  <div className="w-full grid grid-cols-2 gap-6 mt-4">
                   <ImagesDropCard selectedImage={images[1]} setSelectedImage={handleAddImage} minHeight={"20vh"}/>
                   <ImagesDropCard selectedImage={images[2]} setSelectedImage={handleAddImage} minHeight={"20vh"}/>
                   <ImagesDropCard selectedImage={images[3]} setSelectedImage={handleAddImage} minHeight={"20vh"}/>
                   <ImagesDropCard selectedImage={images[4]} setSelectedImage={handleAddImage} minHeight={"20vh"}/>
                   {/* <DropWithReturn setSelectedImage={handleAddImage}  minHeight={"20vh"}/> */}
                  </div>
            </div>
            <div className="w-full">
              <label htmlFor="type" className="text-sm font-medium">Accommodation Category</label>
              <Select
                value={formData.type}
                onChange={(e: any)=> setFormData({...formData, type: e})}
               data={[
                {
                  label: "Hotel",
                  value: "hotel"
                },
                {
                  label: "Motel",
                  value: "motel"
                },
                {
                  label: "Parking",
                  value: "parking"
                },
                {
                  label: "Garden",
                  value: "garden"
                },
                {
                  label: "Restaurant",
                  value: "restaurant"
                },
              ]}/>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </form>
  );
};

export default OwnerAddAccommodations;
