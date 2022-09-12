import Swal from "sweetalert2";
import { getcompany } from "../Api/getCompany";

export const search = () => {
  return Swal.fire({
    title: "Search",
    input: "text",
    inputValue: "",
  }).then(async (res) => {
    res.value = res.value || "";
    if (res.value.trim()) {
      const response = await getcompany(res.value);
      return response;
    }
  });
};
