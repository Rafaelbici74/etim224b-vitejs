/**
 * @file   src\pages\temp\index.jsx
 * @author Ewerton
 * @date   2026-05-11
 * @desc   [Descrição do componente ou arquivo]
 */

// npm i lucide-react
import { UserPlus, CheckCircle, Edit, ArrowRight, ArrowLeft, Plus, Trash2, Save, Shirt } from 'lucide-react';

import styles from './index.module.css';

export default function Exemplo06() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p className={styles.brand}>Sistema de Torneios</p>

                <div>
                    <h2 className={styles.title}><UserPlus size={28} /> Cadastro de Equipe</h2>

                    <div className={styles.field}>
                        <label className={styles.label}>Nome da equipe</label>
                        <input name="nome" className={styles.input} placeholder="Ex: Galáticos FC" />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label className={styles.label}>Cor Principal</label>
                            <input name="corPrimaria" type="color" className={styles.color} />
                        </div>

                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>E-mail do responsável</label>
                        <input name="email" type="email" className={styles.input} placeholder="email@exemplo.com" />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Categoria</label>
                        <select name="categoria" className={styles.select} >
                            <option value="">Selecione...</option>
                            {/* {categorias.map(c => <option key={c} value={c}>{c}</option>)} */}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}