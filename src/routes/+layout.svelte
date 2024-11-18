<script>
    import Navbar from '../components/Navbar.svelte';
    import '@fontsource/geist-sans/100.css';
    import '@fontsource/geist-sans/200.css';
    import '@fontsource/geist-sans/300.css';
    import '@fontsource/geist-sans/400.css';
    import '@fontsource/geist-sans/500.css';
    import '@fontsource/geist-sans/600.css';
    import '@fontsource/geist-sans/700.css';
    import '@fontsource/geist-sans/800.css';
    import '@fontsource/geist-sans/900.css';

    let { children } = $props()
</script>

<Navbar />
{@render children()}

<style>
    :global(:root) {
        --main-color: violet;
        --secondary-color: red;
        --background-main-color: #731f1f;
        --main-text-color: #f5f5f5;
    }

    :global(*) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        color: black;
    }
    :global(body) {
        font-family: 'Geist Sans', sans-serif;
        background-color: var(--background-main-color);
    }
</style>