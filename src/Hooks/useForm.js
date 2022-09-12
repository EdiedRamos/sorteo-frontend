import React, { useState } from "react";

export const useForm = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    nit: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  return {
    data,
    setData,
    handleChange,
  };
};
