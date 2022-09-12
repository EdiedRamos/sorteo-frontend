import "./style.scss";

import { FaRegEdit, FaSave } from "react-icons/fa";
import { search } from "../../Services/Utils/alertSearch";
import { createCompany } from "../../Services/Api/createCompany";

export const RegisterControl = ({ data, setData, setRegister }) => {
  return (
    <div className="icons-container">
      <div
        className="fa-icon-container"
        onClick={() =>
          search().then((value) => {
            setData((prev) => value || prev);
            if (value) setRegister(false);
          })
        }
      >
        <FaRegEdit className="fa-icon" />
      </div>
      <div
        className="fa-icon-container"
        onClick={() =>
          createCompany(data).then((res) => {
            if (!res) {
              setData({
                name: "",
                address: "",
                nit: "",
                phone: "",
              });
            }
          })
        }
      >
        <FaSave className="fa-icon" />
      </div>
    </div>
  );
};
