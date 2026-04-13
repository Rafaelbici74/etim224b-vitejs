/**
 * @file   src\pages\exemplos\ex-03\index.jsx
 * @author Ewerton
 * @date   2026-04-13
 * @desc   [Descrição do componente ou arquivo]
 */

import { useState } from "react";

import styles from './index.module.css';

export default function Correcao02() {

    const [num, setNum] = useState(100);

    function handleIncrementa() {
        setNum(num + 1);
    }

    function handleDecrementa() {
        setNum(num - 1);
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerBotoes}>
                <div>
                    <label
                        onClick={() => handleDecrementa()}
                        className={styles.botao}
                    >-1</label>
                </div>
                <div>
                <label className={styles.texto}>{`Contador: ${num}`}</label>
                </div>
                <div>
                    <label
                        onClick={() => handleIncrementa()}
                        className={styles.botao}
                    >+1</label>
                </div>
            </div>

        </div>
    );
}