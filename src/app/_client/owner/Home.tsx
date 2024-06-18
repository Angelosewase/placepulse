/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
const OwnerHome = () => {
  const data = useSelector((state: any) => state.auth);
  console.log("auth data --> ", data);
  return (
    <div className="w-full h-screen">
      <h1>Owner Home Page</h1>
    </div>
  );
};

export default OwnerHome;
