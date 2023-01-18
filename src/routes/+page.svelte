<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Seeu Sim</title>
	<meta name="description" content="Seeu Sim's personal portfolio site" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-[0.6] p-6 sm:p-4">
	<article 
		class={`
			prose lg:prose-xl
			prose-h1:text-slate-700 dark:prose-h1:text-slate-200 prose-h1:text-3xl prose-h1:sm:text-6xl
			prose-h2:text-slate-800 dark:prose-h2:text-slate-100 prose-h2:text-md prose-h2:sm:text-xl prose-h2:text-center
			prose-p:text-slate-800 dark:prose-p:text-slate-100 prose-p:text-lg prose-p:sm:text-2xl
		`}>
		<h1>Hi, I'm Seeu Sim.</h1>
		<p>
			I'm a developer that's highly interested in the areas of Full Stack Development, and Artificial Intelligence.
			In my free time, you'll see me developing projects and experimenting with new technologies.
		</p>

		<h2>
			Contact me on Social Media:
		</h2>
	</article>
</section>

