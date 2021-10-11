<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter/index.svelte';
	import HeroBanner from '$lib/HeroBanner/index.svelte';
	import ColumnCard from '$lib/ColumnCard/index.svelte';
	import AboutUs from '$lib/AboutUs/index.svelte';
	import Description from '$lib/Description/index.svelte';
	import GridDescription from '$lib/GridDescription/index.svelte';
	import Map from '$lib/Map/index.svelte';
	let hereKitty = false;

	const handleMouseenter = () => (hereKitty = true);
	const handleMouseleave = () => (hereKitty = false);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<svelte:body on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave} />

<section>
	<HeroBanner />
	<ColumnCard />
	<AboutUs />
	<Description />
	<GridDescription />
	<Map />
	<!-- <h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2> -->

	<!-- <Counter /> -->
</section>
