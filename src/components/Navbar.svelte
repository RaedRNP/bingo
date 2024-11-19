<script lang="ts">
    import Btn from './Btn.svelte';
    let y: number;
</script>

<svelte:window bind:scrollY={y} />

<header class={y ? "navbar navbar-scrolled" : "navbar"}>
    <label class="hamburger-menu">
        <input type="checkbox">
    </label>
    <ul>
        <li><a href="/">Créditos</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Comunidad</a></li>
        <li><a href="/">Soporte</a></li>
        <li><a href="/">Tienda</a></li>
        <div class="hidden-btn">
            <Btn title="PLAY" />
        </div>
    </ul>
    <a class="logo" href="/">LOGO</a> <!-- Change for img tag when real logo -->
    <ul class="right-menu">
        <li>
            <a href="/">Crear carta</a>
        </li>
        <Btn title='PLAY' />
    </ul>
</header>


<style>
    :root {
        --btn-bg-color: red;
        --text-color: white;
        --act-hover-color: violet;
        --menu-mobile-background: green;
        --navbar-bg-on-scroll: #151515d6;
        --navbar-bg-top: transparent;

        --navbar-height: 80px;

        --margin-x: 40px;
        --margin-x-md: 20px;
        --margin-x-sm: 40px;

        --animation-time: 200ms ease-in-out;

        --bar-height: 5px;
        --bar-width: 30px;
        --bar-gap: 6px;

        --hamburger-height: calc(var(--bar-height) * 3 + var(--bar-gap) * 2);
    }
    .navbar {
        background: var(--navbar-bg-top);
        height: var(--navbar-height);
        width: 100%;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 1000;
        transition: background 200ms ease;
    }
    .navbar-scrolled {
        background: var(--navbar-bg-on-scroll);
        height: var(--navbar-height);
        width: 100%;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 1000;
    }
    .navbar .logo {
        color: var(--main-text-color);
        font-size: 35px;
        line-height: 80px;
        font-weight: bold;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .navbar ul {
        float: left;
        margin-left: var(--margin-x);
    }
    .navbar ul li {
        display: inline-block;
        line-height: 80px;
        margin: 0 5px;
    }
    .navbar ul li a {
        color: var(--main-text-color);
        font-size: 12px;
        text-transform: uppercase;
        padding: 7px 13px;
        border-radius: 10px;
        font-weight: 800;
    }
    a:hover {
        text-decoration: underline;
    }
    .right-menu {
        display: flex;
        align-items: center;
        margin-right: var(--margin-x);
        gap: 5svw;
    }
    .hamburger-menu {
        --x-width: calc(var(--hamburger-height) * 1.41421356237);

        display: none;
        flex-direction: column;
        gap: var(--bar-gap);
        width: max-content;
        line-height: 80px;
        margin-left: var(--margin-x-sm);
        cursor: pointer;
    }
    .hamburger-menu::before, 
    .hamburger-menu::after,
    .hamburger-menu input {
        content: "";
        width: var(--bar-width);
        height: var(--bar-height);
        background: var(--text-color);
        transform-origin: left center;
        border-radius: 9999px;
        transition: all var(--animation-time);
    }
    .hamburger-menu input {
        appearance: none;
        padding: 0;
        margin: 0;
        outline: none;
        pointer-events: none;
    }
    .hamburger-menu input:checked {
        opacity: 0;
        width: 0;
    }
    .hamburger-menu:has(input:checked)::before {
        rotate: 45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height) / -2);
    }
    .hamburger-menu:has(input:checked)::after {
        rotate: -45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height) / 2);
    }
    .hidden-btn {
        display: none;
    }
    
    @media (935px <= width <= 1110px) {
        .navbar .logo {
            font-size: 28px;
        }
        .navbar ul {
            margin-left: var(--margin-x-md);
        }
        .navbar ul li {
            margin: 0 2px;
        }
        .navbar ul li a {
            font-size: 10px;
        }
        .right-menu {
            margin-right: var(--margin-x-md);
        }
    }
    @media (width <= 934px) {
        .hamburger-menu {
            display: flex;
        }
        ul {
            position: fixed;
            width: 100%;
            height: 100svh;
            background: var(--menu-mobile-background);
            left: -100%;
            top: 80px;
            text-align: center;
            transition: all .5s;
        }
        .navbar {
            justify-content: space-between;
        }
        .navbar ul {
            margin-left: 0;
        }
        .navbar ul li {
            display: block;
        }
        .navbar ul li a {
            font-size: 20px;
        }
        a:hover {
            background-color: transparent;
            color: var(--act-hover-color) !important;
        }
        .hamburger-menu:has(input:checked) ~ ul {
            left: 0;
        }
        .navbar .logo {
            position: static;
            transform: translate(0);
            margin-right: var(--margin-x-sm);
        }
        .navbar .right-menu {
            display: none;
        }
        .hidden-btn {
            display: block;
            margin: 30px 0;
        }
    }
</style>