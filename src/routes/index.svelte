<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter/index.svelte';
	import HeroBanner from '$lib/Home/HeroBanner.svelte';
	import ColumnCard from '$lib/Home/ColumnCard.svelte';
	import AboutUs from '$lib/Home/AboutUs.svelte';
	import Description from '$lib/Home/Description.svelte';
	import GridDescription from '$lib/Home/GridDescription.svelte';
	import Map from '$lib/Home/Map.svelte';
	let hereKitty = false;

	const handleMouseenter = () => (hereKitty = true);
	const handleMouseleave = () => (hereKitty = false);
</script>

<svelte:head>
	<title>Flaming Partners Limited</title>
</svelte:head>

<svelte:body on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave} />

<section class="relative">

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
