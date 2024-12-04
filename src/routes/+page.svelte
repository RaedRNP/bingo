<script>
    import { SiteName } from '$lib/generalInfoVars';

    import { Button, Heading, P } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    import { goto } from '$app/navigation';

    const subTitle = "¡La suerte está de tu lado... y si no, te damos una mano!";

    const sectionOneSubTitle = "¿Listo para un poco de diversión y suerte?";
    const sectionOneParagraph = "¡En 'Mi bingo en línea' encontrarás todo eso y más! ¡Marca tus números, grita ¡Bingo! y si no es tu día, no te preocupes, ¡te devolvemos parte de tu dinero! ¡Porque en nuestro bingo, ¡siempre ganas!";
</script>

<main>
    <section class="banner">
        <div class="title-section">
            <h1>{SiteName}</h1>
            <Heading tag='h2' class='my-8 text-[#0766AD]' >{subTitle}</Heading>
            <Button class='uppercase bg-[#0766AD] text-white hover:bg-[#1097ff]' onclick={()=>goto('/inicio-sesion')}>
                Jugar <ArrowRightOutline class="w-6 h-6 ms-2" />
            </Button>
        </div>
    </section>
    <section class="home-section section-1">
        <div class="sub-title-section">
            <Heading tag='h2' class='mb-8 text-[#0766AD]' >{sectionOneSubTitle}</Heading>
            <P class='md:text-end text-center'>{sectionOneParagraph}</P>
        </div>
    </section>
    <div class="mini-banner">
        <h2>GRANDES PREMIOS TE ESPERAN</h2>
    </div>
    <section class="home-section">
        <div class="sub-title-section-2">
            <Heading tag='h3' class='mb-8'>Imagina sentir la adrenalina de marcar todos los números y gritar ¡Bingo!</Heading>
            <p>En 'Mi bingo en línea' puedes hacer realidad ese sueño. Con nuestro sistema de reembolso, jugar es completamente seguro y divertido. ¡Descubre un mundo de posibilidades y gana grandes premios! ¡Anímate a probar tu suerte!</p>
            <Button class='uppercase bg-[#0766AD] text-white hover:bg-[#1097ff]' onclick={()=>goto('/inicio-sesion')}>
                Jugar <ArrowRightOutline class="w-6 h-6 ms-2" />
            </Button>
        </div>
    </section>
</main>

<style>
    .banner {
        width: 100%;
        height: 100vh;
        position: relative;
        background-color: aliceblue;
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
    .title-section h1 {
        color: var(--main-text-color);
        text-shadow: var(--text-shadow);
    }
    h1 {
        text-transform: uppercase;
        font-size: var(--title-size);
        font-weight: var(--font-weigth);
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

    /* .section-1 {
        background: #e4e4e4;
    } */
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
        font-weight: 800;
        letter-spacing: 5px;
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