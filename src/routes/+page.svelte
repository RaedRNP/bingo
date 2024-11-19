<script>
    import Btn from '../components/Btn.svelte';
</script>

<main>
    <section class="banner">
        <div class="title-section">
            <h1>Titulo</h1>
            <h2>Lorem ipsum dolor sit amet</h2>
            <Btn title="play" />
        </div>
    </section>
    <section class="home-section section-1">
        <div class="sub-title-section">
            <h2>Sub-titulo</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quod animi corrupti! Itaque doloremque animi quo magni excepturi quos distinctio possimus vero, id placeat commodi autem nulla consectetur consequatur molestiae.</p>
        </div>
    </section>
    <div class="mini-banner">
        <h2>mini banner</h2>
    </div>
    <section class="home-section">
        <div class="sub-title-section-2">
            <h2>Sub-titulo</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quod animi corrupti! Itaque doloremque animi quo magni excepturi quos distinctio possimus vero, id placeat commodi autem nulla consectetur consequatur molestiae.</p>
            <Btn title="play" />
        </div>
    </section>
    <footer>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Créditos gratis</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Creador de carta</a></li>
            <li><a href="/">Contactanos</a></li>
        </ul>
        <div class="line"></div>
        <div class="terms">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis fuga recusandae incidunt adipisci ea rerum molestias consequuntur suscipit, temporibus cum sequi ab enim soluta qui repellendus fugiat corrupti nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quo dolore libero quam in a officia ab voluptate impedit laboriosam enim, quos earum neque! Molestias perspiciatis reprehenderit possimus eaque quos!</div>
        <ul>
            <li><a href="/">Redes sociales</a></li>
            <li><a href="/">Redes sociales</a></li>
            <li><a href="/">Redes sociales</a></li>
            <li><a href="/">Redes sociales</a></li>
        </ul>
    </footer>
</main>

<style>
    :root {
        --margin-friend: 8px;
        --margin-aquintances: 64px;

        --title-size: 60px;
        --sub-title-size: 30px;
        --title-size-mobile: 30px;
        --sub-title-size-mobile: 15px;
    }
    .banner {
        width: 100%;
        height: 100vh;
        position: relative;
        background-image: url(); /* Select image */
        background-repeat: no-repeat;
        background-size: cover;
        mask-image: linear-gradient(black 90%, transparent);
    }
    .title-section {
        width: 50%;
        height: 100%;
        align-content: center;
        position: absolute;
        left: 25%;
        transform: translateX(-25%);
    }
    .title-section h1, .title-section h2 {
        color: var(--main-text-color);
    }
    h1 {
        margin: 8px 0;
        text-transform: uppercase;
        font-size: var(--title-size);
    }
    h2 {
        margin: 0 0 48px 0;
        font-size: var(--sub-title-size);
    }
    .home-section {
        height: 100vh;
        width: 100%;
        position: relative;
    }

    .section-1 {
        background: #b09620;
    }
    .sub-title-section {
        text-align: end;
        width: 50%;
        height: 100%;
        align-content: center;
        position: absolute;
        right: 25%;
        padding-left: 160px;
        transform: translateX(25%);
    }
    .mini-banner {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 25vh;
        width: 100%;
        background: #ff5a5a;
    }
    .mini-banner h2 {
        margin: 0;
    }
    .sub-title-section-2 {
        text-align: center;
        width: 100%;
        height: 100vh;
        align-content: center;
        position: absolute;
        left: 50%;
        top: 50%;
        padding: 0 160px;
        transform: translate(-50%, -50%);
    }
    .sub-title-section-2 p {
        margin-bottom: var(--margin-aquintances);
    }
    footer {
        width: 100%;
        height: 50vh;
        background: #ff5a5a;
        padding: 0 200px;
        align-content: center;
    }
    footer ul {
        margin: var(--margin-friend);
        display: flex;
        justify-content: space-around;
    }
    footer .line {
        width: 100%;
        background-color: black;
        height: 1px;
        margin: 32px 0;
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
        h2 {
            font-size: var(--sub-title-size-mobile);
        }
        .title-section {
            width: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
        .sub-title-section {
            text-align: center;
            width: 100%;
            left: 50%;
            padding: 30px;
            transform: translateX(-50%);
        }
        .sub-title-section-2 {
            padding: 0 30px;
        }
    }
</style>