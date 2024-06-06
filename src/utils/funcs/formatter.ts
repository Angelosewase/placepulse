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
