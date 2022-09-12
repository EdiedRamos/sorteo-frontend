import Swal from "sweetalert2";

export const confirmAlert = () => {
  return Swal.fire({
    title: "¿Está seguro?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar!",
    cancelButtonText: "Cancelar!",
  });
};
