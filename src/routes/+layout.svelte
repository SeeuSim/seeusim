<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";
	import { theme } from './store';

	let darkMode: boolean;
	theme.subscribe(val => {
		darkMode = val;
	});

	

</script>

<div class={`flex flex-col min-h-screen ${darkMode? "dark": "light"}`}>
	<Header />

	<main class="flex-1 flex flex-col p-4 max-w-5xl box-border flex-shrink-0 w-screen mx-auto">
		<slot />
	</main>

	<footer class="flex flex-col justify-center items-center p-3 mini:px-0">
		<p>visit <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
