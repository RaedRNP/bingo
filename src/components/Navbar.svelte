<script lang="ts">
// @ts-nocheck

    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    import { goto } from '$app/navigation';

    let y: Number = 0;
</script>

<svelte:window bind:scrollY={y} />
  
<Navbar class={y ? "md:fixed bg-white z-10 transition-colors" : "md:fixed z-10 transition-colors bg-transparent"}>
  <NavBrand href="/">
    <img src="favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bingo</span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    <Button class='mr-10 -ml-20 hidden md:flex uppercase bg-[#0766AD] hover:bg-[#1097ff]' onclick={()=>goto('/inicio-sesion')}>
      Jugar <ArrowRightOutline class="w-5 h-5 ms-2" />
    </Button>
    <Avatar id="avatar-menu" src="favicon.png" class='cursor-pointer' />
    <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
      <span class="block text-sm">Jugador 1</span>
      <span class="block truncate text-sm font-medium">name@mail.com</span>
    </DropdownHeader>
    <DropdownItem onclick={() => goto('/dashboard')}>Dashboard</DropdownItem>
    <DropdownItem>Ajustes</DropdownItem>
    <DropdownItem>Cartera</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Cerrar Sesión</DropdownItem>
  </Dropdown>
  <NavUl class='md:absolute md:left-1/2 md:-translate-x-1/2'>
    <NavLi class='hover:text-[#1097ff]' href="/" active={true}>Inicio</NavLi>
    <NavLi class='hover:text-[#1097ff]' href="/soporte">Soporte</NavLi>
    <NavLi class='hover:text-[#1097ff]' href="/blog">Blog</NavLi>
    <NavLi class='hover:text-[#1097ff]' href="/comunidad">Comunidad</NavLi>
  </NavUl>
</Navbar>

<!-- arreglar el hover de los NavLi a color #1097ff -->