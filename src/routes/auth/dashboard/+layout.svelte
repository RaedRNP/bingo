<script>
	import { enhance } from '$app/forms';
	import { Sidebar, SidebarWrapper, SidebarGroup, SidebarItem } from 'flowbite-svelte';
	import {
		AdjustmentsHorizontalOutline,
		ArrowRightToBracketOutline,
		LifeSaverSolid
	} from 'flowbite-svelte-icons';

	let { children } = $props();
</script>

<main class="flex h-screen">
	<Sidebar class="h-full w-14 md:min-w-fit md:pt-24">
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
				<form method="post" action="?/logout" use:enhance>
					<button class="text-grey-900 flex items-center rounded-lg p-2 hover:bg-gray-100">
						<ArrowRightToBracketOutline
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/> <span class="ms-3">Cerrar Sesión</span>
					</button>
				</form>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
	{@render children()}
</main>
