import { useEffect, useState } from "react";

type Props<T extends unknown> = {
  value: T;
  delay: number;
  defaultValue: T;
};

export const useDebounce = <T extends unknown>({
  value,
  delay,
  defaultValue,
}: Props<T>) => {
  const [newValue, setNewValue] = useState<T>(defaultValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setNewValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return newValue;
};
