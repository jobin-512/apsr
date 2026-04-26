<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import "../app.css";
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="bg-black min-h-screen">
<Header/>
	{@render children()}
<Footer/>	
</main>
