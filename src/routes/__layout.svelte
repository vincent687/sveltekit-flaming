<script lang="ts">
	import Header from '$lib/home/Header.svelte';
  import HeadNavigation from '$lib/global/HeadNaigation.svelte';
	import '../app.css';
	import '../tailwind.css';

  let  carousel: HTMLElement;
  let  scrollValue: Number;
</script>

<svelte:head>
	<!-- <script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT1QdxV5dTu0kz3KyXiKyUPCIyo6gvTZE&sensor=false">
	</script> -->
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT1QdxV5dTu0kz3KyXiKyUPCIyo6gvTZE&sensor=false">

	</script>
</svelte:head>
<div class="flex flex-col h-screen">

  {#if scrollValue> 100}
  <HeadNavigation></HeadNavigation>
  {/if}

	<main class="flex-1 overflow-y-auto" bind:this={carousel}  on:scroll={()=>scrollValue= carousel.scrollTop}>
		<slot />
	</main>
</div>



<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
