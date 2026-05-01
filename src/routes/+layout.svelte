<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import "../app.css";
  	import { initLenis } from '$lib/utils/lenis';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
 	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
  	import { quintOut } from 'svelte/easing';
	import Cursor from '$lib/components/Cursor.svelte';

	let { children } = $props();
	onMount(()=>{
		initLenis();
	})
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="bg-black min-h-screen" in:fade={{ duration: 400, easing: quintOut }} out:fade={{ duration: 300 }}>
	<Header/>
	{@render children()}
	<Footer/>	
	<Cursor/>
</main>
