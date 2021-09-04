import React from "react";

import { InputTextContainer } from "./styled";

type Props = {
  type?: string;
  placeholder?: string;
};

export const InputText: React.FC<Props> = ({ ...props }) => {
  return <InputTextContainer {...props} />;
};
