<script>
	import { Spinner, Button } from 'flowbite-svelte';
</script>

<div>
	<h1>Te prometemos que estamos trabajando en ello.</h1>
	<Spinner />
	<Button href="/">Inicio</Button>
</div>

<style>
	div {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 25px;
		text-align: center;
	}
	div h1 {
		font-weight: 600;
		font-size: xx-large;
	}
</style>
