<script lang="ts">
	//@ts-nocheck
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { Heading, P } from 'flowbite-svelte';

	let { form }: { form: ActionData } = $props();
</script>

<div class="flex h-screen w-full items-center justify-center">
	<div class="h-96 w-96 rounded-md bg-white p-6 shadow-lg">
		<Heading tag="h3" class="mb-2">Ayuda con la contraseña</Heading>
		<P class="mb-4">Escribe la dirección de correo electrónico asociada a Bingo Ruleta.</P>
		<form action="" method="post">
			<input id="email" type="email" name="email" placeholder="Correo electrónico" class="mb-2" />
			<button>Enviar</button>
		</form>
	</div>
</div>

<style>
	input {
		width: 100%;
		padding: 13px 50px 13px 20px;
		background: #eee;
		border-radius: 8px;
		border: none;
		outline: none;
		font-size: 16px;
		color: #333;
		font-weight: 500;
	}
	input::placeholder {
		color: #888;
		font-weight: 400;
	}
	button {
		width: 100%;
		height: 48px;
		background: var(--main-color);
		border-radius: 8px;
		color: var(--background-main-color);
		box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
		border: none;
		cursor: pointer;
		font-size: 16px;
		font-weight: 600;
		margin-top: 0.5rem;
	}
	button:hover {
		background-color: #1097ff;
	}
</style>
