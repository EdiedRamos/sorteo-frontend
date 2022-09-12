import { messageSwal } from "../Utils/messageSwal";

function put(data) {
  fetch(`http://127.0.0.1:8000/api/companies/${data.nit}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((res) => messageSwal(res.message));
}

export const updateCompany = (data) => {
  for (const key of Object.keys(data)) {
    if (!data[key].trim()) {
      messageSwal("Ingrese todos los datos");
      return;
    }
  }
  put(data);
};
