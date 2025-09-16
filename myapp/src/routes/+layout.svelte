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
		--primary-bg: #84a1bd;
		--secondary-bg: #000000;
		--primary-text: #000000;

		--border-radius-m: 30px;
		--border-radius-mixed: 30px 0px 0px 0px;

		--font-size-m: clamp(2rem, 1.8rem + 1vw, 3rem);
		--font-size-s: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);

		--font-family: "Special Elite", system-ui;
	}

	main {
		background-color: var(--primary-bg);
		margin: 0;
		display: grid;
		place-items: center;
		height: 100vh;

		
	}
</style>
