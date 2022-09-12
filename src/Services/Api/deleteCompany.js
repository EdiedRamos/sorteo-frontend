import { messageSwal } from "../Utils/messageSwal";

export const deleteCompany = (nit) => {
  fetch(`https://sorteo-backend.herokuapp.com/api/companies/${nit}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((res) => messageSwal(res.message));
};
