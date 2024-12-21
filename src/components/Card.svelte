<script>
	let {
		imgPath = 'favicon.png',
		imgDesc = 'favicon',
		title = 'title',
		description = 'description'
	} = $props();
</script>

<div class="card">
	<img src={imgPath} alt={imgDesc} />
	<h2>{title}</h2>
	<p>{description}</p>
</div>

<style>
	.card {
		width: 400px;
		height: 150px;
		padding: 20px;
		position: relative;
		border-radius: 20px;
		box-shadow: 2px 2px 10px #33333360;
	}
	.card img {
		height: 50px;
		width: 50px;
		position: absolute;
		left: 10%;
		top: 50%;
		transform: translateY(-50%);
	}
	.card h2 {
		position: absolute;
		left: 30%;
		top: 20%;
	}
	.card p {
		position: absolute;
		left: 30%;
		top: 50%;
		transform: translateY(-50%);
	}
	@media screen and (max-width: 820px) {
		.card {
			width: 350px;
		}
	}
	@media screen and (max-width: 410px) {
		.card {
			width: 300px;
		}
	}
</style>
