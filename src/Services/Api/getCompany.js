import { messageSwal } from "../Utils/messageSwal";

export const getcompany = (nit) => {
  return fetch(`http://127.0.0.1:8000/api/companies/${nit}`)
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
