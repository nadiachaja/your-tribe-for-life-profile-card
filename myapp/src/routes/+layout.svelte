<script>
	import favicon from "$lib/assets/favicon.svg";

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
	:root {
		--primary-bg:#84a1bd;
		--primary-text:#000000;

		--border-radius-m:10px;
		--border-radius-mixed:10px 0px 0px 0px;

		--font-size-m: clamp(1.75rem, 1.5rem + 1.25vw, 3rem);
		--font-size-s: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);

	}
</style>
