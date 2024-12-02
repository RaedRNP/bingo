<script lang="ts">
// @ts-nocheck

    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline, CartSolid } from 'flowbite-svelte-icons';

    import { goto } from '$app/navigation';

    let y: Number = 0;
</script>

<svelte:window bind:scrollY={y} />
  
<Navbar class={y ? "fixed bg-slate-500 z-10 transition-colors" : "fixed z-10 transition-colors"}>
  <NavBrand href="/">
    <img src="favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bingo</span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    <Button class='mr-10 -ml-20 hidden md:flex' onclick={()=>goto('/inicio-sesion')}>
      Jugar <ArrowRightOutline class="w-5 h-5 ms-2" />
    </Button>
    <Avatar id="avatar-menu" src="favicon.png" class='cursor-pointer' />
    <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
      <span class="block text-sm">Bonnie Green</span>
      <span class="block truncate text-sm font-medium">name@flowbite.com</span>
    </DropdownHeader>
    <DropdownItem onclick={() => goto('/dashboard')}>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
  <NavUl class='absolute left-1/2 -translate-x-1/2'>
    <NavLi href="/" active={true}>Inicio</NavLi>
    <NavLi href="/soporte">Soporte</NavLi>
    <NavLi href="/blog">Blog</NavLi>
    <NavLi href="/comunidad">Comunidad</NavLi>
  </NavUl>
</Navbar>