<script>
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
    import '@fontsource/geist-sans/100.css';
    import '@fontsource/geist-sans/200.css';
    import '@fontsource/geist-sans/300.css';
    import '@fontsource/geist-sans/400.css';
    import '@fontsource/geist-sans/500.css';
    import '@fontsource/geist-sans/600.css';
    import '@fontsource/geist-sans/700.css';
    import '@fontsource/geist-sans/800.css';
    import '@fontsource/geist-sans/900.css';
    import '../app.css';

    let { children } = $props()
</script>

<Navbar />
{@render children()}
<Footer />

<style>
    :global(:root) {
        --main-color: #0766AD;
        --secondary-color: #C5E898;
        --background-main-color: #f5f5f5;
        --main-text-color: #0766AD;
        --alert-color: #F7EC09;
        
        --text-shadow: #33333360 0 3px 6px;
        --margin-friend: 8px;
        --margin-aquintances: 64px;

        --title-size: 48px;
        --sub-title-size: 36px;
        --title-size-mobile: 30px;
        --sub-title-size-mobile: 15px;
        --font-weigth: 800;
    }

    :global(*) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    :global(body) {
        font-family: 'Geist Sans', sans-serif;
        background-color: var(--background-main-color);
    }
</style>