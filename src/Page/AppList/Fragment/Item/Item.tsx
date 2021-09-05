import React from "react";
import { IApp } from "../../../../Services/App/AppInterface";

import { numberFormat } from "../../../../Utils/Format";
import {
  AppItem,
  BoxIinfo,
  BoxInfoContent,
  BoxInfoFooter,
  Description,
  TagsBox,
} from "./styled";

type Props = {
  app: IApp;
};

export const Item = ({ app }: Props) => {
  return (
    <AppItem>
      <BoxIinfo>
        <BoxInfoContent>
          <Description>
            <h1>{app.name}</h1>
            <p>{app.description}</p>
          </Description>
          <TagsBox>
            {app.categories.map((item, index) => (
              <React.Fragment key={item}>
                {index !== 0 && " / "}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </TagsBox>
        </BoxInfoContent>
        <BoxInfoFooter>
          <ul>
            {app.subscriptions.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <h3>
                  {item.price === 0 ? (
                    <>Free</>
                  ) : (
                    <>{numberFormat(item.price)}</>
                  )}
                </h3>
              </li>
            ))}
          </ul>
        </BoxInfoFooter>
      </BoxIinfo>
    </AppItem>
  );
};
