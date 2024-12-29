<script lang="ts">
	// @ts-nocheck
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider
	} from 'flowbite-svelte';

	import { page } from '$app/state';
	import { UserCircleOutline } from 'flowbite-svelte-icons';

	let SiteName = 'Bingo Ruleta';
	let y: number = $state(0);
</script>

<svelte:window bind:scrollY={y} />

<Navbar
	class={page.route.id === '/'
		? !y
			? 'z-10 bg-transparent transition-colors md:fixed'
			: 'z-10 bg-white transition-colors md:fixed'
		: 'z-10 bg-white transition-colors md:fixed'}
>
	<NavBrand href="/">
		<img src="/bingo-ruleta-logo.png" class="me-3 h-12 sm:h-20" alt="Flowbite Logo" />
		<span
			class={page.route.id === '/'
				? y
					? 'hidden self-center whitespace-nowrap text-2xl font-semibold text-black sm:block'
					: 'hidden self-center whitespace-nowrap text-2xl font-semibold text-white sm:block'
				: 'hidden self-center whitespace-nowrap text-2xl font-semibold text-black sm:block'}
			>{SiteName}</span
		>
	</NavBrand>
	<div class="flex items-center md:order-2">
		{#if page.data.logged}
			<Button
				class="-ml-20 mr-10 hidden bg-[#4ec93f] uppercase hover:bg-[#68ff54] md:flex"
				href="https://bingoruleta.com/bingo/bingo%20sportbook.console.html"
			>
				Jugar <ArrowRightOutline class="ms-2 h-5 w-5" />
			</Button>
		{:else}
			<Button
				class="-ml-20 mr-10 hidden bg-[#4ec93f] uppercase hover:bg-[#68ff54] md:flex"
				onclick={() => goto('/auth')}
			>
				Inicia Sesión
			</Button>
		{/if}
		{#if page.data.user}
			<UserCircleOutline size="xl" id="avatar-menu" class="cursor-pointer" />
		{:else}
			<a
				href="/auth"
				class={page.route.id === '/'
					? y
						? 'self-center whitespace-nowrap text-2xl font-semibold text-black'
						: 'self-center whitespace-nowrap text-2xl font-semibold text-white'
					: 'hidden self-center whitespace-nowrap text-2xl font-semibold text-black sm:block'}
				><UserCircleOutline size="xl" class="text-black" /></a
			>
		{/if}
		<NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
	</div>
	{#if page.data.user}
		<Dropdown placement="bottom" triggeredBy="#avatar-menu">
			<DropdownHeader>
				<span class="block text-sm">{page.data.user.username}</span>
				<span class="block truncate text-sm font-medium">{page.data.user.email}</span>
			</DropdownHeader>
			<DropdownItem href="/auth/dashboard">Dashboard</DropdownItem>
			<DropdownItem href="/auth/dashboard/ajustes">Ajustes</DropdownItem>
			<DropdownDivider />
			<form method="post" action="?/logout">
				<DropdownItem><button>Cerrar Sesión</button></DropdownItem>
			</form>
		</Dropdown>
	{/if}
	<NavUl class="md:absolute md:left-1/2 md:-translate-x-1/2">
		<NavLi
			class={page.route.id === '/'
				? y
					? 'text-black hover:text-[#4ec93f]'
					: 'hover:text-[#4ec93f] sm:text-white'
				: 'text-black hover:text-[#4ec93f]'}
			href="/"
			active={true}>Inicio</NavLi
		>
		<NavLi
			class={page.route.id === '/'
				? y
					? 'text-black hover:text-[#4ec93f]'
					: 'hover:text-[#4ec93f] sm:text-white'
				: 'text-black hover:text-[#4ec93f]'}
			href="/soporte">Soporte</NavLi
		>
		<!-- <NavLi class='hover:text-[#1097ff]' href="/blog">Blog</NavLi>
    <NavLi class='hover:text-[#1097ff]' href="/comunidad">Comunidad</NavLi> -->
	</NavUl>
</Navbar>
