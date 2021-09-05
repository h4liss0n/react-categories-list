import React from "react";

import { InputTextContainer } from "./styled";

type Props = {
  type?: string;
  placeholder? : string;
  onTypo?: (value: string) => void;
};

export const InputText: React.FC<Props> = ({ onTypo, ...props }) => {
  const handleChange = (value: string) => {
    if (onTypo) {
      onTypo(value);
    }
  };

  return (
    <InputTextContainer
      {...props}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
