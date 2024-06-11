export const SnakeCaseToPascalCaseSpaced = (text: string) => {
  return text
    .split("_")
    .map((single) =>
      single
        .split("")
        .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
        .join(""),
    )
    .join(" ");
};

export const separatePhoneNumber = (phoneNumber: string) => {
  return (
    phoneNumber.toString().slice(0, 4) +
    " " +
    phoneNumber.toString().slice(4, 7) +
    " " +
    phoneNumber.toString().slice(7, 10) +
    " " +
    phoneNumber.toString().slice(10, 13)
  );
};
