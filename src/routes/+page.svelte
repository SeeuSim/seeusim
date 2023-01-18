<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-[0.6]">
	<h1 class="w-full text-black">
		to your new<br />
		SvelteKit app
	</h1>

	<h2 class="mt-4">
		Try editing <strong>src/routes/+page.svelte</strong>
	</h2>
</section>

