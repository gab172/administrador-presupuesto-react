import { useState } from "react";

const Formulario = ({ crearGasto, presupuesto, guardarPresupuesto }) => {
  const [gasto, actualizarGasto] = useState("");
  const [precio, actualizarPrecio] = useState(0);

  const validarGasto = (e) => {
    e.preventDefault();

    if (gasto.trim() === "" || precio <= 0 || isNaN(precio)) {
      alert("El nombre o valor del gasto no puede estar vacio");
    } else {
      const gastos = {
        id: Date.now(),
        gasto,
        precio,
      };
      crearGasto(gastos);
      guardarPresupuesto(presupuesto - precio);
    }
  };

  return (
    <form className="form-presupuesto" onSubmit={validarGasto}>
      <h2 className="subtitle">Agrega tus gastos Aqui</h2>
      <label>Nombre Gasto</label>
      <input
        type="text"
        className="form-presupuesto__input"
        placeholder="Ingrese su Presupuesto"
        onChange={(e) => actualizarGasto(e.target.value)}
      />
      <label>Valor Gasto</label>
      <input
        type="number"
        className="form-presupuesto__input"
        placeholder="Ingrese su Presupuesto"
        onChange={(e) => actualizarPrecio(Number(e.target.value))}
      />
      <input type="submit" className="button" value="Confirmar Presupuesto" />
    </form>
  );
};

export default Formulario;
