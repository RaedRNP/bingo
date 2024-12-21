<script lang="ts">
	//@ts-nocheck
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let active = $state(false);

	let { form }: { form: ActionData } = $props();
</script>

<div class="container-page">
	<div class={active ? 'container-box active' : 'container-box'}>
		<div class="form-box login">
			<form method="POST" action="?/login" use:enhance>
				<h1>Inicio de sesión</h1>
				<div class="input-box">
					<input
						type="text"
						placeholder="Email o Usuario"
						value={form?.email}
						name="email"
						required
					/>
					<i class="bx bxs-user"></i>
				</div>
				<div class="input-box">
					<input
						type="password"
						placeholder="Clave de usuario"
						value={form?.password}
						name="password"
						required
					/>
					<i class="bx bxs-lock-alt"></i>
				</div>
				<div class="forgot-link">
					<a href="/">¿Olvidó su contraseña?</a>
				</div>
				<button class="submit-btn">Iniciar sesión</button>
				{#if form?.message}
					<p class="text-red-600">{form.message}</p>
				{/if}
				<p>O inicia sesión con redes sociales</p>
				<div class="social-icons">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<a href="/"><i class="bx bxl-google"></i></a>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<a href="/"><i class="bx bxl-facebook"></i></a>
				</div>
			</form>
		</div>

		<div class="form-box register">
			<form method="POST" action="?/register" use:enhance>
				<h1>Regístrate</h1>
				<div class="input-box">
					<input
						type="email"
						placeholder="Correo electrónico"
						name="email"
						value={form?.email}
						required
					/>
					<i class="bx bxs-envelope"></i>
				</div>
				<div class="input-box">
					<input
						type="text"
						placeholder="Nombre de usuario"
						name="username"
						value={form?.username}
						required
					/>
					<i class="bx bxs-user"></i>
				</div>
				<div class="input-box">
					<input
						type="password"
						placeholder="Contraseña"
						name="password"
						value={form?.password}
						required
					/>
					<i class="bx bxs-lock-alt"></i>
				</div>
				<button class="submit-btn">Register</button>
				{#if form?.message}
					<p style="color: red">{form.message}</p>
				{/if}
				<p>O regístrate con redes sociales</p>
				<div class="social-icons">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<a href="/"><i class="bx bxl-google"></i></a>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<a href="/"><i class="bx bxl-facebook"></i></a>
				</div>
			</form>
		</div>

		<div class="toggle-box">
			<div class="toggle-panel toggle-left">
				<h1>Bienvenido</h1>
				<p>¿No tienes cuenta?</p>
				<button class="submit-btn register-btn" onclick={() => (active = true)}
					>Regístrate aquí</button
				>
			</div>
			<div class="toggle-panel toggle-right">
				<h1>Bienvenido</h1>
				<p>¿Ya tienes cuenta?</p>
				<button class="submit-btn login-btn" onclick={() => (active = false)}>Accede aquí</button>
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--delay-max: 0.8s;
		--delay-min: 0.2s;
	}
	.container-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.container-box {
		position: relative;
		width: 850px;
		height: 500px;
		border-radius: 25px;
		box-shadow: 0 0 8px rgb(0, 0, 0, 0.2);
		margin: 20px;
		overflow: hidden;
	}
	.form-box {
		position: absolute;
		right: 0;
		width: 50%;
		height: 100%;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		text-align: center;
		padding: 40px;
		z-index: 1;
		transition:
			0.6s ease-in-out 1.2s,
			visibility 0s 1s;
	}
	.container-box.active .form-box {
		right: 50%;
	}
	.form-box.register {
		visibility: hidden;
	}
	.container-box.active .form-box.register {
		visibility: visible;
	}

	.form-box form {
		width: 100%;
	}
	.container-box h1 {
		margin: -10px 0;
		color: #333;
	}
	.input-box {
		position: relative;
		margin: 30px 0;
	}
	.input-box input {
		width: 100%;
		padding: 13px 50px 13px 20px;
		background: #eee;
		border-radius: 8px;
		border: none;
		outline: none;
		font-size: 16px;
		color: #333;
		font-weight: 500;
	}
	.input-box input::placeholder {
		color: #888;
		font-weight: 400;
	}
	.input-box i {
		color: #888;
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
	}
	.forgot-link {
		margin: -15px 0 15px;
	}
	.forgot-link a {
		font-size: 14.5px;
		color: #333;
	}
	.submit-btn {
		width: 100%;
		height: 48px;
		background: var(--main-color);
		border-radius: 8px;
		color: var(--background-main-color);
		box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
		border: none;
		cursor: pointer;
		font-size: 16px;
		font-weight: 600;
	}
	.container-box p {
		font-size: 14.5px;
		margin: 15px 0;
	}
	.social-icons {
		display: flex;
		justify-content: center;
	}
	.social-icons a {
		display: inline-flex;
		padding: 10px;
		border: 2px solid var(--main-color);
		border-radius: 8px;
		font-size: 24px;
		color: var(--main-color);
		margin: 0 8px;
	}
	.social-icons a i {
		color: var(--main-color);
	}
	.toggle-box {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.toggle-box::before {
		content: '';
		position: absolute;
		left: -250%;
		width: 300%;
		height: 100%;
		background: var(--main-color);
		/* border-radius: 80px; */
		z-index: 2;
		transition: all 1s ease-in-out;
	}
	.container-box.active .toggle-box::before {
		left: 50%;
	}
	.toggle-panel {
		position: absolute;
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 2;
		transition: 0.8s ease-in-out;
	}
	.toggle-panel.toggle-left {
		left: 0;
		transition-delay: var(--delay-max);
	}
	.container-box.active .toggle-panel.toggle-left {
		left: -50%;
		transition-delay: var(--delay-min);
	}
	.container-box.active .toggle-panel.toggle-right {
		right: 0;
		transition-delay: var(--delay-max);
	}
	.toggle-panel.toggle-right {
		right: -50%;
		transition-delay: var(--delay-min);
	}
	.toggle-panel h1 {
		color: var(--background-main-color);
	}
	.toggle-panel p {
		margin-bottom: 20px;
		color: var(--background-main-color);
	}
	.toggle-panel .submit-btn {
		width: 160px;
		height: 46px;
		background: transparent;
		border: 2px solid var(--background-main-color);
		box-shadow: none;
	}
	.submit-btn:hover {
		background-color: #1097ff;
	}

	@media screen and (max-width: 650px) {
		.container-box {
			height: calc(100svh - 20px);
			margin-top: 80px;
		}
		.form-box {
			bottom: 0;
			width: 100%;
			height: 70%;
		}
		.container-box.active .form-box {
			right: 0;
			bottom: 30%;
		}
		.toggle-box::before {
			left: 0;
			top: -270%;
			width: 100%;
			height: 300%;
			border-radius: 20vw;
		}
		.container-box.active .toggle-box::before {
			top: 70%;
			left: 0;
		}
		.toggle-panel {
			width: 100%;
			height: 30%;
		}
		.toggle-panel.toggle-left {
			top: 0;
		}
		.container-box.active .toggle-panel.toggle-left {
			left: 0;
			top: -30%;
		}
		.toggle-panel.toggle-right {
			right: 0;
			bottom: -30%;
		}
		.container-box.active .toggle-panel.toggle-right {
			bottom: 0;
		}
	}
	@media screen and (max-width: 400px) {
		.form-box {
			padding: 20px;
		}
		.toggle-panel h1 {
			font-size: 30px;
		}
	}
</style>
