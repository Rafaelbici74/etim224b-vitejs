/**
 * @file   src\pages\exemplos\ex-09\index.jsx
 * @author Ewerton
 * @date   2026-04-14
 * @desc   [Descrição do componente ou arquivo]
 */

export default function Exemplo09() {
    return (
        <div style={{ maxWidth: '100%' }}>
            <video controls width="100%">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
        </div>
    );
}