import { Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FilterCollapsible = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactElement;
}) => {
  const [opened, { toggle }] = useDisclosure(true);
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <h5 className="font-extrabold text-md">{label}</h5>
        <button onClick={toggle}>
          {opened ? (
            <MdKeyboardArrowDown color="black" size={20} />
          ) : (
            <MdKeyboardArrowUp color="black" size={20} />
          )}
        </button>
      </div>
      <Collapse in={opened}>{children}</Collapse>
    </div>
  );
};

export default FilterCollapsible;
