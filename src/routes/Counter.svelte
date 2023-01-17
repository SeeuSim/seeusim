<script lang="ts">
	import { spring } from 'svelte/motion';

	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<div class="counter flex border-t-[1px] border-b-[1px] border-black/10 mx-4">
	<button class="w-8 p-0 flex items-center justify-center border-0 bg-transparent touch-manipulation text-3xl hover:bg-slate-300" on:click={() => (count -= 1)} aria-label="Decrease the counter by one">
		<svg class="h-1/4 w-1/4" aria-hidden="true" viewBox="0 0 1 1">
			<path class="stroke-[2px] stroke-gray-700" d="M0,0.5 L1,0.5" />
		</svg>
	</button>

	<div class="w-32 h-16 overflow-hidden text-center relative">
		<div class="absolute w-full h-full" style="transform: translate(0, {100 * offset}%)">
			<strong class="absolute w-full h-full font-normal text-vermillion hidden text-6xl items-center justify-center -top-full select-none" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong class="absolute flex w-full h-full font-normal text-vermillion text-6xl items-center justify-center ">{Math.floor($displayed_count)}</strong>
		</div>
	</div>

	<button class="w-8 p-0 flex items-center justify-center border-0 bg-transparent touch-manipulation text-3xl hover:bg-slate-300" on:click={() => (count += 1)} aria-label="Increase the counter by one">
		<svg class="h-1/4 w-1/4" aria-hidden="true" viewBox="0 0 1 1">
			<path class="stroke-[2px] stroke-gray-700" d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
		</svg>
	</button>
</div>

<style>
	path {
		vector-effect: non-scaling-stroke;
	}
</style>
