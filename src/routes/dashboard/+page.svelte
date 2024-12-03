<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
    import { ChartPieSolid, MailBoxSolid, ShoppingBagSolid, ArrowRightToBracketOutline, AdjustmentsHorizontalOutline, LifeSaverSolid } from 'flowbite-svelte-icons';
    let spanClass = 'flex-1 ms-3 whitespace-nowrap';
</script>

<main>
    <Sidebar class='md:pt-12 w-14 md:min-w-fit'>
      <SidebarWrapper>
        <SidebarGroup>
          <SidebarItem label="Dashboard">
            <svelte:fragment slot="icon">
              <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          
          <SidebarItem label="Inbox" {spanClass}>
            <svelte:fragment slot="icon">
              <MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
            <svelte:fragment slot="subtext">
              <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem label="Products">
            <svelte:fragment slot="icon">
              <ShoppingBagSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          <span class="h-32 block"></span>
        </SidebarGroup>
        <SidebarGroup border>
          <SidebarItem label="Ajustes">
            <svelte:fragment slot="icon">
              <AdjustmentsHorizontalOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem label="Ayuda">
            <svelte:fragment slot="icon">
              <LifeSaverSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem label="Cerrar Sesión">
            <svelte:fragment slot="icon">
              <ArrowRightToBracketOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
        </SidebarGroup>
      </SidebarWrapper>
    </Sidebar>
    <div></div>
</main>

<style>
    
</style>