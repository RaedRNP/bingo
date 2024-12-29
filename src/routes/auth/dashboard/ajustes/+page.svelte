<script>
	import { goto } from '$app/navigation';
	import { Listgroup } from 'flowbite-svelte';
	import {
		AdjustmentsHorizontalSolid,
		TrashBinOutline,
		EditOutline,
		UserCircleSolid
	} from 'flowbite-svelte-icons';
	let icons = [
		{
			name: 'Cambio de nombre de usuario',
			icon: UserCircleSolid,
			link: '/auth/dashboard/ajustes/username-change'
		},
		{
			name: 'Cambio de contraseña',
			icon: AdjustmentsHorizontalSolid,
			link: '/auth/dashboard/ajustes/password-change'
		},
		{
			name: 'Cambio de datos de pago móvil',
			icon: EditOutline,
			link: '/auth/dashboard/ajustes/username-payment-data'
		},
		{
			name: 'Eliminar cuenta',
			icon: TrashBinOutline,
			link: '/auth/dashboard/ajustes/delete-account'
		}
	];
	// <svelte:component this={IconSolid} icon={item.icon} class="w-3 h-3 me-2.5" />
</script>

<div class="-mt-52 flex h-screen w-full items-center justify-center sm:-mt-0">
	<Listgroup active items={icons} let:item class="w-4/5 sm:w-1/2">
		<svelte:component this={item.icon} class="me-2.5 h-4 w-4" />
		<a href={item.link}>{item.name}</a>
	</Listgroup>
</div>
