import { useState } from "react";
import { Slider } from "@mantine/core";

const SliderComponent = () => {
  const [value, setValue] = useState(50);
  const [startValue] = useState(50);

  return (
    <div className="w-full flex flex-col gap-4">
      <Slider
        value={value}
        max={1200}
        min={50}
        onChange={setValue}
        onChangeEnd={setValue}
      />
      <div className="w-full flex justify-between">
        <h6 className="text-sm font-bold text-[#112211]">${startValue}</h6>
        <h6 className="text-sm font-bold text-[#112211]">${1200}</h6>
      </div>
    </div>
  );
};

export default SliderComponent;
