import { Api } from "../Api";
import { ICategorie } from "./CategorieInterface";

const getCategorie = async () => Api.get<ICategorie[]>("/categorie");

export const CategorieService = {
  getCategorie,
};
