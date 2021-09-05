export const numberFormat = (value: number | undefined) => {
  if (value === undefined) return 0;
  if (value)
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);
};
