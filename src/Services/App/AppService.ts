import { Api } from "../Api";
import { IApp } from "./AppInterface";

const getApp = async (categorie: string) => {
  const { data }: { data: IApp[] } = await Api.get("/categorie");
  if (categorie) {
    return data.filter((item) => item.categories.includes(categorie));
  }
  return data;
};

const getCategorie = async () => {
  const { data }: { data: IApp[] } = await Api.get("/categorie");

  const res = data.reduce(
    (acc, item) => {
      return acc.concat(
        item.categories.filter((value) => !acc.includes(value) && value !== "")
      );
    },
    [""]
  );
  return res;
};

export const AppService = {
  getApp,
  getCategorie,
};
