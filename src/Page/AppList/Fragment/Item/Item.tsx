import React from "react";
import {
  AppItem,
  BoxIinfo,
  BoxInfoContent,
  BoxInfoFooter,
  Description,
  TagsBox,
} from "./styled";

export const Item = () => {
  return (
    <AppItem>
      <BoxIinfo>
        <BoxInfoContent>
          <Description>
            <h1>Voice Report</h1>
            <p>Calls reporting and analytics of your calls.</p>
          </Description>
          <TagsBox>
            <span>Voice Analytics</span>
            <span>Reporting</span>
            <span>Optimization</span>
          </TagsBox>
        </BoxInfoContent>
        <BoxInfoFooter>
          <ul>
            <li>
              <span>Trial</span>
              <h3>
                Free<sup></sup>
              </h3>
            </li>
            <li>
              <span>Professional</span>
              <h3>
                35.00<sup>€</sup>
              </h3>
            </li>
          </ul>
        </BoxInfoFooter>
      </BoxIinfo>
    </AppItem>
  );
};
