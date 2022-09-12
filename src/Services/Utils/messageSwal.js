import Swal from "sweetalert2";

export const messageSwal = (title) => {
  Swal.fire({
    title: title,
  });
};
