<script>
    import { SiteName } from "$lib/generalInfoVars";
    import Card from "../../components/Card.svelte";
</script>

<main>
    <div class="half-banner">
        <h2>Soporte de {SiteName}</h2>
        <h1>¿En qué podemos ayudar?</h1>
        <button>Contacta con nuestro equipo de soporte</button>
    </div>
    <div class="guide-lines">
        <h2 class="problems-subtitle">Posibles problemas y sus soluciones</h2>
        <div class="reactive-cards">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <button class="see-more">Ver más...</button>
    </div>
</main>

<!-- 
    --title-size: 60px;
    --sub-title-size: 30px; 
-->

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
        padding: 20px;
    }
    .half-banner h2, .half-banner h1 {
        color: var(--main-color);
        margin: var(--margin-friend) 0 0 0;
        text-shadow: var(--text-shadow);
    }
    .half-banner h2 {
        font-size: var(--sub-title-size);
        font-weight: var(--font-weigth);
    }
    .half-banner h1 {
        font-size: var(--title-size);
        font-weight: var(--font-weigth);
    }
    .half-banner button {
        width: fit-content;
        min-height: 48px;
        max-height: fit-content;
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
        text-align: center;
    }
    .guide-lines h2 {
        color: var(--main-color);
        font-size: var(--sub-title-size);
        font-weight: var(--font-weigth);
    }
    .problems-subtitle {
        margin: var(--margin-aquintances) 0;
    }
    .guide-lines .reactive-cards {
        width: 80%;
        height: fit-content;
        display: grid;
        gap: 20px;
        grid-template-columns: auto auto;
        justify-content: center;
        margin: 0 0 var(--margin-aquintances) 0;
    }
    .see-more {
        outline: none;
        border: none;
        background-color: transparent;
        width: fit-content;
        cursor: pointer;
        color: var(--main-color);
        font-weight: 600;
        font-size: var(--sub-title-size-mobile);
    }
    @media screen and (max-width: 650px) {
        .guide-lines .reactive-cards {
            grid-template-columns: auto;
        }
    }
</style>