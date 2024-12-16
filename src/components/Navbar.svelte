<script lang="ts">
// @ts-nocheck

  import { SiteName } from '$lib/generalInfoVars';
  import { User } from '$lib/sesion';

  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { goto } from '$app/navigation';

  let y: Number = 0;
</script>

<svelte:window bind:scrollY={y} />
  
<Navbar class={y ? "md:fixed bg-white z-10 transition-colors" : "md:fixed z-10 transition-colors bg-transparent"}>
  <NavBrand href="/">
    <img src="/bingo-ruleta-logo.png" class="me-3 h-12 sm:h-20" alt="Flowbite Logo" />
    <span class={y ? "self-center whitespace-nowrap text-2xl font-semibold text-black hidden sm:block" : "self-center whitespace-nowrap text-2xl font-semibold text-white hidden sm:block"}>{SiteName}</span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    <Button class='mr-10 -ml-20 hidden md:flex uppercase bg-[#4ec93f] hover:bg-[#68ff54]' onclick={()=>goto('/user')}>
      Jugar <ArrowRightOutline class="w-5 h-5 ms-2" />
    </Button>
    {#if User}
      <Avatar id="avatar-menu" src="/favicon.png" class='cursor-pointer' />
    {:else}
      <a href="/user" class={y ? 'hover:bg-[#4ec93f] hover:text-white sm:text-black border-2 border-solid sm:border-black rounded-md py-1 px-2' : 'hover:bg-[#4ec93f] sm:text-white border-2 border-solid sm:border-white rounded-md py-1 px-2'}>Iniciar Sesión</a>
    {/if}
    <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
      <span class="block text-sm">Jugador 1</span>
      <span class="block truncate text-sm font-medium">name@mail.com</span>
    </DropdownHeader>
    <DropdownItem href='/dashboard'>Dashboard</DropdownItem>
    <DropdownItem href='/dashboard/ajustes'>Ajustes</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Cerrar Sesión</DropdownItem>
  </Dropdown>
  <NavUl class='md:absolute md:left-1/2 md:-translate-x-1/2'>
    <NavLi class={y ? 'hover:text-[#4ec93f] text-black' : 'hover:text-[#4ec93f] sm:text-white'} href="/" active={true}>Inicio</NavLi>
    <NavLi class={y ? 'hover:text-[#4ec93f] text-black' : 'hover:text-[#4ec93f] sm:text-white'} href="/soporte">Soporte</NavLi>
    <!-- <NavLi class='hover:text-[#1097ff]' href="/blog">Blog</NavLi>
    <NavLi class='hover:text-[#1097ff]' href="/comunidad">Comunidad</NavLi> -->
  </NavUl>
</Navbar>

<!-- arreglar el hover de los NavLi a color #4ec93f -->