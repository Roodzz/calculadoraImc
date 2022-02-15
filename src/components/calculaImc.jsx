import React, { useState } from "react";

export default function CalculaImc() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [rst, setRst] = useState(0);

  let valor = parseFloat(rst);

  function Peso(e) {
    setPeso(e.target.value);
  }
  function Altura(e) {
    setAltura(e.target.value);
  }

  function Calcular(e) {
    e.preventDefault();
    setRst(peso / (altura * altura));
  }

  return (
    <form className="form_app">
      <div className="formulario">
        <h3>Altura</h3>
        <input type="text" onChange={Altura} />
        <h3>Peso</h3>
        <input type="text" onChange={Peso} />
        <div>
          <button onClick={Calcular}>Calcular</button>
          <p>Resultado: {valor.toFixed(2)}</p>
        </div>
      </div>
      <div className="tabela">
        <table>
          <thead>
            <th colSpan="1">Classificação</th>
            <th colSpan="1">Imc</th>
          </thead>
          <tbody>
            <tr>
              <td>Abaixo do Peso</td>
              <td>abaixo 18</td>
            </tr>
            <tr>
              <td>Peso Normal</td>
              <td>18 - 24</td>
            </tr>
            <tr>
              <td>Sobrepeso</td>
              <td>25 - 29</td>
            </tr>
            <tr>
              <td>Obesidade Grau 1</td>
              <td>30 - 34</td>
            </tr>
            <tr>
              <td>Obesidade Grau 2</td>
              <td>35 - 39</td>
            </tr>
            <tr>
              <td>Obesidade Grau 3 ou Mórbida</td>
              <td>Maior ou igual 40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}
