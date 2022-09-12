import { messageSwal } from "../Utils/messageSwal";

export const deleteCompany = (nit) => {
  fetch(`http://127.0.0.1:8000/api/companies/${nit}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((res) => messageSwal(res.message));
};
