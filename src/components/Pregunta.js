import { useState } from "react";

const Pregunta = ({ guardarPresupuesto, mostrarFormulario }) => {
  const [presupuesto, actualizarPresupuesto] = useState(0);

  const validarGasto = (e) => {
    e.preventDefault();

    if (presupuesto <= 0 || isNaN(presupuesto)) {
      alert("No puedes tener un presupuesto menor a 0");
    } else {
      guardarPresupuesto(presupuesto);
      mostrarFormulario(true);
    }
  };

  return (
    <div className="container">
      <form className="form-presupuesto" onSubmit={validarGasto}>
        <input
          type="number"
          className="form-presupuesto__input"
          placeholder="Ingrese su Presupuesto"
          onChange={(e) => actualizarPresupuesto(Number(e.target.value))}
        />
        <input type="submit" className="button" value="Confirmar Presupuesto" />
      </form>
    </div>
  );
};

export default Pregunta;
