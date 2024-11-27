<script>
    import Btn from "../../components/Btn.svelte";
    import { SiteName } from "$lib/generalInfoVars";
</script>

<main class="container">
    <div class="half-banner">
        <h2>Soporte de {SiteName}</h2>
        <h1>¿En qué podemos ayudar?</h1>
        <button>Contacta con nuestro equipo de soporte</button>
    </div>
    <div class="guide-lines">
        <h2 class="problems-subtitle">Posibles problemas y sus soluciones</h2>
        <div class="reactive-cards">
            <div class="card">
                <img src="favicon.png" alt="favicon">
                <h2>Carta</h2>
                <p>descripcion</p>
            </div>
            <div class="card">
                <img src="favicon.png" alt="favicon">
                <h2>Carta</h2>
                <p>descripcion</p>
            </div>
            <div class="card">
                <img src="favicon.png" alt="favicon">
                <h2>Carta</h2>
                <p>descripcion</p>
            </div>
            <div class="card">
                <img src="favicon.png" alt="favicon">
                <h2>Carta</h2>
                <p>descripcion</p>
            </div>
        </div>
    </div>
    <div class="play-zone">
        <Btn title='Juega' />
    </div>
</main>

<style>
    .half-banner {
        height: 60vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: end;
        align-items: center;
        text-transform: uppercase;
    }
    .half-banner h2, .half-banner h1 {
        color: var(--main-color);
        margin: var(--margin-friend) 0 0 0;
        text-shadow: var(--text-shadow);
    }
    .half-banner button {
        width: fit-content;
        height: 48px;
        padding: 10px;
        margin: var(--margin-aquintances) 0 calc(var(--margin-friend) + 16px) 0;
        background: transparent;
        border-radius: 8px;
        color: var(--main-color);
        box-shadow: 0 0 10px rgb(0, 0, 0, .1);
        border: 2px solid var(--main-color);
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
    }
    .half-banner button:hover {
        background-color: var(--main-color);
        color: var(--background-main-color);
    }
    .guide-lines {
        height: fit-content;
        padding: 100px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .guide-lines h2 {
        color: var(--main-color);
    }
    .problems-subtitle {
        margin: var(--margin-aquintances) 0;
    }
    .guide-lines .reactive-cards {
        width: 100%;
        height: fit-content;
    }
    .guide-lines .reactive-cards .card {
        width: 400px;
        height: 150px;
        padding: 20px;
        position: relative;
        border-radius: 20px;
        box-shadow: 2px 2px 10px #33333360;
    }
    .guide-lines .reactive-cards .card img {
        height: 50px;
        width: 50px;
        position: absolute;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
    }
    .guide-lines .reactive-cards .card h2 {
        position: absolute;
        left: 30%;
        top: 20%;
    }
    .guide-lines .reactive-cards .card p {
        position: absolute;
        left: 30%;
        top: 50%;
        transform: translateY(-50%);
    }
</style>