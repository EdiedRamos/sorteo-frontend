import { messageSwal } from "../Utils/messageSwal";

export const getcompany = (nit) => {
  return fetch(`https://sorteo-backend.herokuapp.com/api/companies/${nit}`)
    .then((response) => response.json())
    .then((res) => {
      if (res.message === "success") {
        delete res.company.id;
        return res.company;
      }
      messageSwal(res.message);
    })
    .catch(() => messageSwal("Nit incorrecto"));
};
