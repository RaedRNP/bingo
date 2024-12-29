<script lang="ts">
	//@ts-nocheck
	import { Button, Heading, P } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	let page: PageData = $props();

	let SiteName = 'Bingo Ruleta';

	const subTitle = '¡La suerte está de tu lado... y si no, te damos una mano!';

	const sectionOneSubTitle = '¿Listo para un poco de diversión y suerte?';
	const sectionOneParagraph =
		"¡En 'Mi bingo en línea' encontrarás todo eso y más! ¡Marca tus números, grita ¡Bingo! y si no es tu día, no te preocupes, ¡te devolvemos parte de tu dinero! ¡Porque en nuestro bingo, ¡siempre ganas!";
</script>

<main>
	<section class="banner">
		<div class="title-section">
			<h1 class="main-title">{SiteName}</h1>
			<!-- text-3xl md:text-6xl -->
			<h2 class="main-subtitle">{subTitle}</h2>
			<!-- my-8 text-xl text-[#f5f5f5] sm:text-3xl -->
			{#if page.data.logged}
				<Button
					class="bg-[#4ec93f] uppercase text-white hover:bg-[#68ff54]"
					href="https://bingoruleta.com/bingo/bingo%20sportbook.console.html"
				>
					Jugar <ArrowRightOutline class="ms-2 h-6 w-6" />
				</Button>
			{:else}
				<Button
					class="bg-[#4ec93f] uppercase text-white hover:bg-[#68ff54]"
					onclick={() => goto('/auth')}
				>
					Inicia Sesión
				</Button>
			{/if}
		</div>
		<div class="img-place">
			<!-- right-0 -z-10 hidden w-full p-5 sm:w-1/2 md:absolute md:block -->
			<img src="/dibujo-01.png" alt="bingo ruleta" />
		</div>
	</section>
	<section class="h-auto py-24 text-center">
		<Heading tag="h2" class="pb-12">TRES SENCILLOS PASOS PARA JUGAR</Heading>
		<div class="flex flex-col items-center justify-center gap-14 sm:flex-row">
			<div class="circle">
				<Heading tag="h3">PASO 1</Heading>
				<p>Registrate</p>
			</div>
			<div class="circle">
				<Heading tag="h3">PASO 2</Heading>
				<p>Recarga</p>
			</div>
			<div class="circle">
				<Heading tag="h3">PASO 3</Heading>
				<p>¡Juega!</p>
			</div>
		</div>
	</section>
	<div class="mini-banner">
		<h2>¡CANTA BINGO Y GANA!</h2>
	</div>
	<section class="home-section">
		<div class="sub-title-section-2">
			<Heading tag="h2" class="mb-8 text-[#0766AD]">{sectionOneSubTitle}</Heading>
			<P class="mb-8 text-center">{sectionOneParagraph}</P>
			{#if page.data.logged}
				<Button
					class="bg-[#4ec93f] uppercase text-white hover:bg-[#68ff54]"
					href="https://bingoruleta.com/bingo/bingo%20sportbook.console.html"
				>
					Jugar <ArrowRightOutline class="ms-2 h-6 w-6" />
				</Button>
			{:else}
				<Button
					class="bg-[#4ec93f] uppercase text-white hover:bg-[#68ff54]"
					onclick={() => goto('/auth')}
				>
					Inicia Sesión
				</Button>
			{/if}
		</div>
	</section>
</main>

<style>
	.banner {
		width: 100%;
		height: 100vh;
		display: flex;
		background-color: var(--bg-home);
		mask-image: linear-gradient(black 92%, transparent);
	}
	.title-section {
		width: 50%;
		height: 100%;
		align-content: center;
		padding: 6rem;
	}
	.title-section h1 {
		color: var(--main-text-color);
		text-shadow: var(--text-shadow);
	}
	.main-title {
		text-transform: uppercase;
		font-weight: var(--font-weigth);
		font-size: var(--title-size);
	}
	.main-subtitle {
		margin: var(--margin-friend) 0 48px 0;
		font-size: var(--sub-title-size);
		color: var(--main-text-color);
	}
	.img-place {
		width: 50%;
		height: 100%;
	}
	.home-section {
		height: 60vh;
		width: 100%;
		position: relative;
	}

	.circle {
		width: 20rem;
		height: 20rem;
		border-radius: 1000px;
		align-content: center;
		text-align: center;
	}

	.circle:nth-child(1) {
		border: 20px solid #ffd400;
	}
	.circle:nth-child(2) {
		border: 20px solid #ff331d;
	}
	.circle:nth-child(3) {
		border: 20px solid #4ec93f;
	}

	/* .section-1 {
        background: #e4e4e4;
    } */
	/* .sub-title-section {
        text-align: end;
        width: 50%;
        height: 100%;
        align-content: center;
        position: absolute;
        right: 25%;
        padding-left: 160px;
        transform: translateX(25%);
    } */
	.mini-banner {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 25vh;
		width: 100%;
		background: #ffd400;
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
	} /*
    .sub-title-section-2 p {
        margin-bottom: var(--margin-aquintances);
    } */
	@media (width <= 820px) {
		main {
			width: 100%;
			align-items: center;
			text-align: center;
		}
		.banner {
			flex-direction: column;
			height: 100vh;
		}
		.main-title {
			padding-top: 4em;
			font-size: var(--title-size-mobile);
		}
		.main-subtitle {
			font-size: var(--sub-title-size-mobile);
		}
		.title-section {
			width: 100%;
		}
		.title-section {
			width: 100%;
			height: 50%;
		}
		.img-place {
			width: 100%;
			height: 50%;
			padding: 3em;
		}
		.sub-title-section-2 {
			padding: 0 30px;
		}
	}
	@media (width <= 430px) {
		.main-title {
			padding-top: 0;
		}
	}
</style>
