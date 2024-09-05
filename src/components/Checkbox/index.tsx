// import { useState } from "react";
import { Checkbox } from "@mantine/core";

const CheckBox = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => {
  // const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label={label}
      checked={checked}
      onChange={onChange}
      className="font-extrabold text-sm"
    />
  );
};

export default CheckBox;
