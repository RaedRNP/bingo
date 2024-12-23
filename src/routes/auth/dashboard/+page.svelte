<script lang="ts">
	import { enhance } from '$app/forms';
	import {
		Heading,
		Button,
		Popover,
		Fileupload,
		Helper,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import {
		AdjustmentsHorizontalOutline,
		ArrowRightToBracketOutline,
		CartSolid,
		LifeSaverSolid
	} from 'flowbite-svelte-icons';
	let { data } = $props();

	let money = data.user.Bs?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '1.');
	let username = data.user.username;

	const Datos = {
		numTelf: '+58 424-1234567',
		id: 'V-12.345.678',
		banco: 'Banco'
	};
</script>

<main class="flex h-screen">
	<Sidebar class="h-[80vh] w-14 md:min-w-fit md:pt-24">
		<SidebarWrapper class="h-full">
			<SidebarGroup>
				<SidebarItem label="Ajustes" href="/auth/dashboard/ajustes">
					<svelte:fragment slot="icon">
						<AdjustmentsHorizontalOutline
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Ayuda" href="/dashboard/ayuda">
					<svelte:fragment slot="icon">
						<LifeSaverSolid
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<!-- <form method="post" action="?/logout" use:enhance>
					<SidebarItem label="Cerrar Sesión">
						<svelte:fragment slot="icon">
							<button>
								<ArrowRightToBracketOutline
									class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								/>
							</button>
						</svelte:fragment>
					</SidebarItem>
				</form> -->
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
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
</main>
