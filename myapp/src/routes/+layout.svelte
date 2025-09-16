<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
{@render children?.()}
</main>

<!-- Hier kan je zetten wat hetzelfde op alle pagina's moet -->
<!-- Hier kan mijn header, nav, menu en footer -->
 

<style>
	/* styleguide */


</style>