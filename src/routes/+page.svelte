<script>
    import Btn from '../components/Btn.svelte';
</script>

<main>
    <div class="main-front-page-desktop">
        <h1>Bingo Karingo</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <Btn title="play" />
    </div>
</main>

<style>
    :root {
        --margin-friend: 8px;
        --margin-aquintances: 48px;

        --title-size: 60px;
        --sub-title-size: 30px;
        --title-size-mobile: 30px;
        --sub-title-size-mobile: 15px;
    }
    main {
        width: 50%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
    }
    .main-front-page-desktop {
        padding: 80px;
    }
    h1 {
        margin: 8px 0;
        text-transform: uppercase;
        font-size: var(--title-size);
    }
    p {
        margin: 0 0 48px 0;
        font-size: var(--sub-title-size);
    }

    @media (935px <= width <= 1110px) {}
    @media (width <= 934px) {
        main {
            width: 100%;
            align-items: center;
            text-align: center;
        }
        h1 {
            font-size: var(--title-size-mobile);
        }
        p {
            font-size: var(--sub-title-size-mobile);
        }
    }
</style>