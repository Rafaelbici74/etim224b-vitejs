import styles from './index.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Aula React com VITE JS</h1>            
            <div className={styles.containerItens}>
                <h2>Exemplos</h2>
            </div>
            <div className={styles.containerItens}>
                <h2>Atividades</h2>
            </div>
        </div>
    )
}

export default Home;