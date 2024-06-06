import { useState } from "react";
import { Checkbox } from "@mantine/core";

const CheckBox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label={label}
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      className="font-extrabold text-sm"
    />
  );
};

export default CheckBox;
