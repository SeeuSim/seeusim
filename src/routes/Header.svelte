<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header class="flex justify-between">
	<div class="w-[3em] h-[3em]">
		<a 
			class="flex items-center justify-center w-full h-full"
			href="https://kit.svelte.dev">
			<img class="w-[2em] h-[2em] object-contain" src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class="flex justify-center">
		<svg class="fill-white/70 h-[3em] w-[2em] block" viewBox="0 0 2 3" aria-hidden="true">
			<path class="bg-white/70" d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul class="relative p-0 m-0 h-[3em] flex justify-center items-center list-none bg-contain bg-white/70 space-x-4">
			<li 
				class="relative h-full" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="flex h-full items-center py-[0.5rem] font-bold text-xs uppercase text tracking-wide transition-colors no-underline text-slate-800" href="/">Home</a>
			</li>
			<li class="relative h-full" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a class="flex h-full items-center py-[0.5rem] font-bold text-xs uppercase text tracking-wide transition-colors no-underline text-slate-800" href="/about">About</a>
			</li>
			<li class="relative h-full" aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a class="flex h-full items-center py-[0.5rem] font-bold text-xs uppercase text tracking-wide transition-colors no-underline text-slate-800" href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg class="fill-white/70 h-[3em] w-[2em] block" viewBox="0 0 2 3" aria-hidden="true">
			<path class="bg-white" d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="w-[3em] h-[3em]">
		<a
			class="flex items-center justify-center w-full h-full" 
			href="https://github.com/sveltejs/kit">
			<img class="w-[2em] h-[2em] object-contain" src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	

	a:hover {
		color: var(--color-theme-1);
	}
</style>
