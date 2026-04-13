/**
 * @file   src\pages\exemplos\ex-04\botao\index.jsx
 * @author Ewerton
 * @date   2026-04-13
 * @desc   [Descrição do componente ou arquivo]
 */

import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {
    return (
        <button
            className={`${styles.botao} ${acao === '+' ? styles.mais : styles.menos}`}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;