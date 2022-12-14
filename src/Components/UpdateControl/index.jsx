import { FaRegTrashAlt, FaSave, FaRegTimesCircle } from "react-icons/fa";
import { updateCompany } from "../../Services/Api/updateCompany";
import { deleteCompany } from "../../Services/Api/deleteCompany";
import { confirmAlert } from "../../Services/Utils/confirmAlert";

const emptyData = {
  name: "",
  address: "",
  nit: "",
  phone: "",
};

export const UpdateControl = ({ data, setData, setRegister }) => {
  return (
    <div className="icons-container">
      <div
        className="fa-icon-container"
        onClick={() => {
          updateCompany(data);
        }}
      >
        <FaSave className="fa-icon" />
      </div>
      <div
        className="fa-icon-container"
        onClick={() => {
          confirmAlert().then((result) => {
            if (result.isConfirmed) {
              deleteCompany(data.nit);
              setRegister(true);
              setData(emptyData);
            }
          });
        }}
      >
        <FaRegTrashAlt className="fa-icon" />
      </div>
      <div
        className="fa-icon-container"
        onClick={() => {
          setRegister(true);
          setData(emptyData);
        }}
      >
        <FaRegTimesCircle className="fa-icon" />
      </div>
    </div>
  );
};
