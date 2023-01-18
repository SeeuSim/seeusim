<script lang="ts">
	import { theme, sideMenu } from "./store";
	import { Icon } from "@steeze-ui/svelte-icon";
	import { Bars3, Moon, Sun, XMark } from "@steeze-ui/heroicons";

	import {
    Dialog,
    DialogOverlay,
  } from "@rgossiaux/svelte-headlessui";
  let isOpen:boolean;

	sideMenu.subscribe(val => {
		isOpen = val
	});

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

<header class="relative">
	<div class="bg-slate-200 dark:bg-slate-800 w-full h-20 flex justify-between items-center">
		<div class="font-sans text-slate-800 dark:text-slate-100 text-4xl font-semibold p-4">
			<a href="/">
				Seeu Sim
			</a>
		</div>
		
		<div class="inline-flex space-x-4 items-center mr-4">
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
				class="p-2 mr-4 h-full items-center sm:hidden text-slate-800 dark:text-slate-100"
				on:click={
					() => {
						sideMenu.update(val => !val);
					}
				}
				>
				<Icon class="h-6 w-6" src={Bars3}/>
			</button>
		</div>
	</div>
	
	<Dialog class="relative" open={isOpen} on:close={() => (isOpen = false)}>
		
		<DialogOverlay as="div" class="fixed top-0 left-0 h-screen w-screen" on:click={() => {
			isOpen = false;
		}}>
			<div class={`w-full h-full ${darkMode? "bg-slate-800": "bg-slate-200"} flex flex-col`}>
				<div class="mt-4 p-5 w-full flex justify-end">
					<Icon src={XMark} class={`h-6 w-6 flex ${darkMode? "text-slate-200": "text-slate-700 right-0"}`}/>
				</div>
				<ul class="mt-4">
					{ #each navLinks as navOpt}
						<li class={`w-full mx-4 my-2 pl-4 text-lg font-bold text-left  hover:underline ${darkMode? "text-slate-200 hover:text-slate-100": "text-slate-700 hover:text-slate-600"}`}>
							<a href={navOpt.href}>{navOpt.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</DialogOverlay>
	</Dialog>
</header>
