import { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Gasto from "./components/Gasto";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [formulario, mostrarFormulario] = useState(false);
  const [gastos, guardarGastos] = useState([]);

  const crearGasto = (gasto) => guardarGastos([...gastos, gasto]);

  return (
    <>
      <h1 className="titulo">Gastos Semanales</h1>
      {formulario ? (
        <div className="container-formulario">
          <Formulario
            crearGasto={crearGasto}
            presupuesto={presupuesto}
            guardarPresupuesto={guardarPresupuesto}
          />
          <Gasto presupuesto={presupuesto} gastos={gastos} />
        </div>
      ) : (
        <Pregunta
          guardarPresupuesto={guardarPresupuesto}
          mostrarFormulario={mostrarFormulario}
        />
      )}
    </>
  );
}

export default App;
