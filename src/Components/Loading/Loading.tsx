import React from "react";
import { LoadingContainer, LdsRipple } from "./styled";
import * as ReactDOM from "react-dom";

type IProps = {
  isLoading: boolean;
};

const ModalPortalsLoading: React.FC = ({ children }) => {
  const el = document.getElementById("loading");
  return el ? ReactDOM.createPortal(children, el) : <>dom not found</>;
};

export const Loading = ({ isLoading }: IProps) => {
  return isLoading ? (
    <ModalPortalsLoading>
      <LoadingContainer>
        <LdsRipple>
          <div></div>
          <div></div>
        </LdsRipple>
      </LoadingContainer>
    </ModalPortalsLoading>
  ) : null;
};
