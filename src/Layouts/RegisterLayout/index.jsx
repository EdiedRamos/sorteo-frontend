import { useState } from "react";
import "./style.scss";

import { useForm } from "../../Hooks/useForm";
import { Form, RegisterControl, UpdateControl } from "../../Components";

export const RegisterLayout = () => {
  const [register, setRegister] = useState(true);
  const { data, setData, handleChange } = useForm();
  return (
    <div className="register-layout">
      <Form data={data} handleChange={handleChange} register={register} />
      {register ? (
        <RegisterControl
          data={data}
          setData={setData}
          setRegister={setRegister}
        />
      ) : (
        <UpdateControl
          data={data}
          setRegister={setRegister}
          setData={setData}
        />
      )}
    </div>
  );
};
