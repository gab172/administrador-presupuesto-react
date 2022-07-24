const Gasto = ({ presupuesto, gastos }) => {
  return (
    <div className="gastos-container">
      <h2 className="subtitle">Gastos</h2>
      {gastos.map((gasto) => (
        <div className="gastos" key={gasto.id}>
          <p>{gasto.gasto}</p>
          <div className="gastos__valor">{gasto.precio}</div>
        </div>
      ))}
      <div
        className={
          presupuesto <= 0 ? "gastos__restante" : "gastos__presupuesto"
        }
      >
        Presupuesto: ${presupuesto}
      </div>
    </div>
  );
};

export default Gasto;
