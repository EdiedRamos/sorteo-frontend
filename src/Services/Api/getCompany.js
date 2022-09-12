import { messageSwal } from "../Utils/messageSwal";

export const getcompany = (nit) => {
  return fetch(`https://sorteo-backend.herokuapp.com/api/companies/${nit}`)
    .then((response) => response.json())
    .then((res) => {
      const success = res.message === "success";
      if (success) {
        delete res.company.id;
        return res.company;
      }
      messageSwal(res.message, success ? "success" : "error");
    })
    .catch(() => messageSwal("Nit incorrecto", "warning"));
};
