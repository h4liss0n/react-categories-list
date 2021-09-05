import { Api } from "../Api";
import { IApp } from "./AppInterface";

const getApp = async (categorie: string, searchByApp: string) => {
  const { data }: { data: IApp[] } = await Api.get("/categorie");

  if (categorie && searchByApp) {
    return data
      .filter((item) => item.categories.includes(categorie))
      .filter((item) => item.name.toLowerCase().includes(searchByApp.toLowerCase()));
  }

  if (categorie) {
    return data.filter((item) => item.categories.includes(categorie));
  }

  if (searchByApp) {
    return data.filter((item) =>  item.name.toLowerCase().includes(searchByApp.toLowerCase()));
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
  return res.sort();
};

export const AppService = {
  getApp,
  getCategorie,
};
