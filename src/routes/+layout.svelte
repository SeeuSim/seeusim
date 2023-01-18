<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";
	import { theme, sideMenu } from './store';

	let darkMode: boolean;
	theme.subscribe(val => {
		darkMode = val;
	});

	let sideMenuOpen: boolean;
	sideMenu.subscribe(val => {
		sideMenuOpen = val
	});
</script>

<div class={`${darkMode? "dark": "light"}`}>
	<div class="flex flex-col min-h-screen bg-slate-100 dark:bg-slate-700">
		<Header />

		<main class="flex-1 flex flex-col p-4 max-w-5xl box-border flex-shrink-0 mx-auto">
			<slot />
		</main>

		<footer class="flex flex-col justify-center items-center p-3 mini:px-0 dark:text-slate-50">
			<p>Contact me here: <a class="font-bold" href="/#">contact</a></p>
		</footer>
	</div>
</div>
