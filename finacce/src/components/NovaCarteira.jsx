import React, { useState } from 'react';
import './NovaCarteira.css';

const NovaCarteira = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('dinheiro');
  const [quantiaDisponivel, setQuantiaDisponivel] = useState('');
  const [tipoPagamento, setTipoPagamento] = useState('dinheiro');
  const [limiteCredito, setLimiteCredito] = useState('');

  const handleCriarCarteira = () => {
    console.log({
      nome,
      tipo,
      quantiaDisponivel,
      tipoPagamento,
      limiteCredito
    });
    
    setNome('');
    setTipo('dinheiro');
    setQuantiaDisponivel('');
    setTipoPagamento('dinheiro');
    setLimiteCredito('');
  };

  return (
    <div className="nova-carteira">
      <h2>Nova Carteira</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label>Tipo:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="dinheiro">Dinheiro</option>
          <option value="banco">Banco</option>
        </select>
      </div>
      <div>
        <label>Quantia Disponível:</label>
        <input
          type="number"
          value={quantiaDisponivel}
          onChange={(e) => setQuantiaDisponivel(e.target.value)}
        />
      </div>
      <div>
        <label>Tipo de Pagamento:</label>
        <select value={tipoPagamento} onChange={(e) => setTipoPagamento(e.target.value)}>
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao">Cartão de Crédito</option>
        </select>
      </div>
      {tipoPagamento === 'cartao' && (
        <div>
          <label>Limite de Crédito:</label>
          <input
            type="number"
            value={limiteCredito}
            onChange={(e) => setLimiteCredito(e.target.value)}
          />
        </div>
      )}
      <button onClick={handleCriarCarteira}>Criar Carteira</button>
    </div>
  );
};

export default NovaCarteira;
