/**
 * @file   src\pages\exemplos\ex-04\index.jsx
 * @author Ewerton
 * @date   2026-04-13
 * @desc   [Descrição do componente ou arquivo]
 */

import { useState } from 'react';

import Botao from './botao';

import styles from './index.module.css';

function Exemplo04() {
    // O hook useState gerencia o valor do contador
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);

    return (
        <div className={styles.container}>
            <h1>Exemplo 4 - Uso de componentes</h1>
            <h2>O valor atual é: {contador}</h2>

            {/* Passando funções e textos via Props para o componente Botao */}
            <Botao texto="Diminuir -" aoClicar={decrementar} acao={'-'} />
            <Botao texto="Aumentar +" aoClicar={incrementar} acao={'+'} />
        </div>
    );
}

export default Exemplo04;