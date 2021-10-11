<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
	import '../tailwind.css';
</script>

<svelte:head>
	<script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT1QdxV5dTu0kz3KyXiKyUPCIyo6gvTZE&sensor=false">
	</script>
</svelte:head>

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
