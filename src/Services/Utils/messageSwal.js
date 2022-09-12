import Swal from "sweetalert2";

export const messageSwal = (title, icon = "success") => {
  Swal.fire({
    title: title,
    icon: icon,
  });
};
