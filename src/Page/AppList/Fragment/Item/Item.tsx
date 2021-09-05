import React from "react";
import { ICategorie } from "../../../../Services/Categorie/CategorieInterface";
import {
  AppItem,
  BoxIinfo,
  BoxInfoContent,
  BoxInfoFooter,
  Description,
  TagsBox,
} from "./styled";

type Props = {
  categorie: ICategorie;
};

export const Item = ({ categorie }: Props) => {
  return (
    <AppItem>
      <BoxIinfo>
        <BoxInfoContent>
          <Description>
            <h1>{categorie.name}</h1>
            <p>{categorie.description}</p>
          </Description>
          <TagsBox>
            {categorie.categories.map((item, index) => (
              <>
                {index !== 0 && " / "}
                <span>{item}</span>
              </>
            ))}
          </TagsBox>
        </BoxInfoContent>
        <BoxInfoFooter>
          <ul>
            {categorie.subscriptions.map((item) => (
              <li>
                <span>{item.name}</span>
                <h3>
                  {item.price === 0 ? (
                    <>
                      Free<sup></sup>
                    </>
                  ) : (
                    <>
                      {item.price}
                      <sup>€</sup>
                    </>
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
