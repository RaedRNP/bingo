<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
