<script>
    import Btn from '../components/Btn.svelte';
    import { SiteName } from '$lib/generalInfoVars';

    const underTitle = "online, C.A."
    const subTitle = "Lorem ipsum dolor sit amet";

    const sectionOneSubTitle = "Sub-titulo";
    const sectionOneParagraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quod animi corrupti! Itaque doloremque animi quo magni excepturi quos distinctio possimus vero, id placeat commodi autem nulla consectetur consequatur molestiae.";
</script>

<main>
    <section class="banner">
        <div class="title-section">
            <h1>{SiteName}</h1>
            <span>{underTitle}</span>
            <h2>{subTitle}</h2>
            <Btn title="play" link='/inicio-sesion' />
        </div>
    </section>
    <section class="home-section section-1">
        <div class="sub-title-section">
            <h2>{sectionOneSubTitle}</h2>
            <p>{sectionOneParagraph}</p>
        </div>
    </section>
    <div class="mini-banner">
        <h2>mini banner</h2>
    </div>
    <section class="home-section">
        <div class="sub-title-section-2">
            <h2>Sub-titulo</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quod animi corrupti! Itaque doloremque animi quo magni excepturi quos distinctio possimus vero, id placeat commodi autem nulla consectetur consequatur molestiae.</p>
            <Btn title="play" link='/inicio-sesion' />
        </div>
    </section>
</main>

<style>
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
        text-shadow: var(--text-shadow);
    }
    h1 {
        text-transform: uppercase;
        font-size: var(--title-size);
    }
    span {
        color: var(--main-text-color);
        font-weight: var(--sub-title-size);
        font-weight: bold;
    }
    h2 {
        margin: var(--margin-friend) 0 48px 0;
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