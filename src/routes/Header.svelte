<script lang="ts">
	import { theme, sideMenu } from "./store";
	import { Icon } from "@steeze-ui/svelte-icon";
	import { Bars3, Moon, Sun } from "@steeze-ui/heroicons";

	let darkMode: boolean;
	theme.subscribe(val => darkMode = val);

	const navLinks = [
		{ 
			label: "about",
			href: "/about"
		},
		{
			label: "skills",
			href: "/skills"
		},
		{
			label: "experience",
			href: "/experience"
		},
		{
			label: "projects",
			href: "/sverdle"
		}
	];

</script>

<header class="bg-slate-200 dark:bg-slate-800 w-full h-20 flex justify-between items-center">
	<div class="font-sans text-slate-800 dark:text-slate-100 text-4xl font-semibold p-4">
		<a href="/">
			Seeu Sim
		</a>
	</div>
	
	<div class="inline-flex space-x-4 items-center mr-4">
		<div class="hidden smr:inline-flex text-xs">
			Test
		</div>
		<!-- Nav Links -->
		<ul class="hidden sm:inline-flex space-x-4">
		{ #each navLinks as nav, i}
			<li>
				<a href={nav.href}>
					<span class="text-slate-800 dark:text-slate-50 hover:underline hover:text-slate-600 dark:hover:text-slate-200 text-lg font-medium">{nav.label}</span>
				</a>
			</li>
		{ /each }
		</ul>
		<!-- Theme Button -->
		<button 
			class={`
				py-2 px-4 mr-4 text-slate-800 dark:text-slate-50 
				hover:bg-slate-300 dark:hover:bg-slate-700 
				rounded-3xl border-[1px] border-slate-300 dark:border-slate-600 
				shadow-sm shadow-slate-400 dark:shadow-inherit
			`} 
			on:click={
				() => {
					theme.update(theme => !theme);				
				}
			}>
			<Icon class="h-8 w-8" src={darkMode? Sun: Moon}/>
		</button>
		<button 
			class="p-2 mr-4 sm:hidden text-slate-800 dark:text-slate-100"
			on:click={
				() => {
					sideMenu.update(val => true);
				}
			}
			>
			<Icon class="h-6 w-6" src={Bars3}/>
		</button>
	</div>
</header>
