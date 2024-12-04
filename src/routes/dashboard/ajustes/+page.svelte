<script>
    import { Listgroup } from "flowbite-svelte";
    import { LockSolid, TrashBinSolid, FaceGrinStarsSolid, EditSolid } from 'flowbite-svelte-icons';
    let icons = [
      { name: 'Cambiar Avatar', icon: FaceGrinStarsSolid },
      { name: 'Cambiar Nombre de Usuario', icon: EditSolid},
      { name: 'Cambio de Contraseña', icon: LockSolid },
      { name: 'Eliminar Cuenta', icon: TrashBinSolid }
    ];
    // <svelte:component this={IconSolid} icon={item.icon} class="w-3 h-3 me-2.5" />
  </script>
  
  
  <Listgroup active items={icons} let:item class="w-2/4" on:click={console.log}>
    <svelte:component this={item.icon} class="w-4 h-4 me-2.5"/>
    {item.name}
  </Listgroup>