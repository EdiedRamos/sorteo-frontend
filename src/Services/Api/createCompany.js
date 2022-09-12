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
      const error = res.message.includes("ya");
      messageSwal(res.message, error ? "error" : "success");
      return error;
    });
}

export const createCompany = (data) => {
  for (const key of Object.keys(data)) {
    if (!data[key].trim()) {
      messageSwal("Ingrese todos los datos", "warning");
      return new Promise((_, reject) => reject("Datos incompletos"));
    }
  }
  return post(data);
};
