import { messageSwal } from "../Utils/messageSwal";

function post(data) {
  return fetch("https://sorteo-backend.herokuapp.com/api/companies", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((res) => {
      messageSwal(res.message);
      return res.message.includes("ya");
    });
}

export const createCompany = (data) => {
  for (const key of Object.keys(data)) {
    if (!data[key].trim()) {
      messageSwal("Ingrese todos los datos");
      return;
    }
  }
  return post(data);
};
