import { Api } from "../Api";
import { IApp } from "./AppInterface";

const getApp = async (categorie: string, searchByApp: string) => {
  const { data }: { data: IApp[] } = await Api.get("/categorie");
  let list = data;

  if (categorie && searchByApp) {
    list = data
      .filter((item) => item.categories.includes(categorie))
      .filter((item) =>
        item.name.toLowerCase().includes(searchByApp.toLowerCase())
      );
  }

  if (categorie) {
    list = data.filter((item) => item.categories.includes(categorie));
  }

  if (searchByApp) {
    list = data.filter((item) =>
      item.name.toLowerCase().includes(searchByApp.toLowerCase())
    );
  }

  const amountValue = (app: IApp) => {
    return app.subscriptions.reduce((acc, item) => {
      acc = acc + item.price;
      return acc;
    }, 0);
  };

  return list.sort((a, b) => (amountValue(a) > amountValue(b) ? 1 : -1));
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
