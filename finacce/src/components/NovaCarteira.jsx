import React, { useState } from 'react';
import './NovaCarteira.css';

const NovaCarteira = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('dinheiro');
  const [quantiaDisponivel, setQuantiaDisponivel] = useState('');
  const [limiteTotal, setLimiteTotal] = useState('');
  const [icone, setIcone] = useState('');

  const handleQuantiaDisponivelChange = (event) => {
    let value = event.target.value;
    value = value.replace(/[^\d.]/g, '');
    value = parseFloat(value).toFixed(2);
    setQuantiaDisponivel(value);
  };
  const handleIconChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setIcone(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCriarCarteira = () => {
    console.log({
      nome,
      tipo,
      quantiaDisponivel,
      limiteTotal,
      icone
    });
    
    setNome('');
    setTipo('dinheiro');
    setQuantiaDisponivel('');
    setLimiteTotal('');
    setIcone('');
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
        <label>Tipo de Carteira:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="dinheiro">Dinheiro em Espécie</option>
          <option value="banco">Saldo em Banco</option>
          <option value="cartao">Cartão de Crédito</option>
        </select>
      </div>
      <div>
        <label>Quantia Disponível (R$):</label>
        <input
          type="text"
          value={quantiaDisponivel}
          onChange={handleQuantiaDisponivelChange}
        />
      </div>
      {tipo === 'cartao' && (
        <div>
          <label>Limite Total (R$):</label>
          <input
            type="text"
            value={limiteTotal}
            onChange={(e) => setLimiteTotal(e.target.value)}
          />
        </div>
      )}
      <div>
        <label>Ícone do Banco:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleIconChange(e)}
        />
      </div>
      <div>
        <label>Escolha um Ícone:</label>
        <select value={icone} onChange={(e) => setIcone(e.target.value)}>
          <option value="">Selecione...</option>
          <option value="url_do_icone_1">Ícone 1</option>
          <option value="url_do_icone_2">Ícone 2</option>
        </select>
      </div>
      <button onClick={handleCriarCarteira}>Criar Carteira</button>
    </div>
  );
};

export default NovaCarteira;
