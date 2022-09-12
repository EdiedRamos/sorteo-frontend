import "./style.scss";

export const Form = ({ data, handleChange, register }) => {
  return (
    <form className="form-register">
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Dirección"
        value={data.address}
        onChange={handleChange}
      />
      <input
        type="number"
        name="nit"
        placeholder="NIT"
        value={data.nit}
        className={register ? "" : "disabled"}
        onChange={register ? handleChange : () => {}}
        disabled={!register}
      />
      <input
        type="number"
        name="phone"
        placeholder="Teléfono"
        value={data.phone}
        onChange={handleChange}
      />
    </form>
  );
};
