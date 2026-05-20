/**
 * @file   src\pages\temp\index.jsx
 * @author Ewerton
 * @date   2026-05-11
 * @desc   [Descrição do componente ou arquivo]
 */

// npm i lucide-react

import { useState, useEffect } from 'react';
import { UserPlus, CheckCircle, Edit, ArrowRight, ArrowLeft, Plus, Trash2, Save, Shirt } from 'lucide-react';

import styles from './index.module.css';

export default function Exemplo06() {

    const [categorias, setCategorias] = useState([]);

    const [equipe, setEquipe] = useState({
        nome: '',
        corPrimaria: '#000000',
        temReserva: 'nao',
        corSecundaria: '#ffffff',
        email: '',
        categoria: '',
    });

    useEffect(() => {
        setCategorias(["Futsal", "Volei", "Basquete"]);
    }, []);

    const handleEquipeChange = (e) => {
        const { name, value } = e.target;
        setEquipe(prev => ({ ...prev, [name]: value }));
    };

    const handleExibeValor = (event) => {
        event.preventDefault(); // 1. Impede a recarga da página
        const formData = new FormData(event.target); // 2. Coleta os dados
        const data = Object.fromEntries(formData);
        console.log('Dados registrados via form');
        console.log(data);
        console.log('Dados registrados via state');
        console.log(equipe);
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p className={styles.brand}>Sistema de Torneios</p>

                <form onSubmit={handleExibeValor}>
                    <h2 className={styles.title}><UserPlus size={28} /> Cadastro de Equipe</h2>

                    <div className={styles.field}>
                        <label className={styles.label}>Nome da equipe</label>
                        <input name="nome" className={styles.input} value={equipe.nome} onChange={handleEquipeChange} placeholder="Ex: Galáticos FC" />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label className={styles.label}>Cor Principal</label>
                            <input
                                name="corPrimaria"
                                type="color"
                                className={styles.color}
                                value={equipe.corPrimaria}
                                onChange={handleEquipeChange}
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Uniforme reserva?</label>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioOption}>
                                    <input
                                        type="radio"
                                        name="temReserva"
                                        value="sim"
                                        checked={equipe.temReserva === 'sim'}
                                        onChange={handleEquipeChange}
                                    />
                                    <span>Sim</span>
                                </label>
                                <label className={styles.radioOption}>
                                    <input
                                        type="radio"
                                        name="temReserva"
                                        value="nao"
                                        checked={equipe.temReserva === 'nao'}
                                        onChange={handleEquipeChange}
                                    />
                                    <span>Não</span>
                                </label>
                            </div>
                        </div>

                        {equipe.temReserva === 'sim' && (
                            <div className={styles.field}>
                                <label className={styles.label}>Cor Secundária</label>
                                <input
                                    name="corSecundaria"
                                    type="color"
                                    className={styles.color}
                                    value={equipe.corSecundaria}
                                    onChange={handleEquipeChange}
                                />
                            </div>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>E-mail do responsável</label>
                        <input name="email" type="email" className={styles.input} value={equipe.email} onChange={handleEquipeChange} placeholder="email@exemplo.com" />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Categoria</label>
                        <select name="categoria" className={styles.select} value={equipe.categoria} onChange={handleEquipeChange}>
                            <option value="">Selecione...</option>
                            {categorias.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    <button type="submit" className={styles.btnNext}>
                        Exibir dados <ArrowRight size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
}