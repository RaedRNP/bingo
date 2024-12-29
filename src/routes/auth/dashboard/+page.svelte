<script lang="ts">
	import { Heading, Button, Popover, Fileupload, Helper } from 'flowbite-svelte';
	import { CartSolid } from 'flowbite-svelte-icons';
	let { data } = $props();

	let money = data.user.Bs?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '1.');
	let username = data.user.username;

	const Datos = {
		numTelf: '+58 424-1234567',
		id: 'V-12.345.678',
		banco: 'Banco'
	};
</script>

<div class="flex w-full flex-col items-center justify-center">
	<div class="flex flex-col gap-8 text-center">
		<Heading class="text-[#0766AD]">{username}</Heading>
		<Heading class="text-[#0766AD]">Saldo</Heading>
		<Heading>{money} Bs</Heading>
		<Button id="arrow">
			<CartSolid class="me-2 h-5 w-5" /> Recarga
		</Button>
		<Popover arrow={true} class="w-64 text-sm font-light" title="Pago Móvil" triggeredBy="#arrow"
			>{Datos.numTelf}<br />{Datos.id}<br />{Datos.banco}</Popover
		>
		<Fileupload id="with_helper" class="mb-2" />
		<Helper>PNG o JPG(MAX. 800x400px).</Helper>
	</div>
</div>
