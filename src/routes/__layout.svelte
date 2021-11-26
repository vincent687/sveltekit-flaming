<script lang="ts">
  import HeadNavigation from '$lib/Global/HeadNavigation.svelte';
  import { fly } from 'svelte/transition';
	import '../app.css';
	import '../tailwind.css';
  import { onMount } from 'svelte';
  import jQuery from "jquery";
  let  carousel: HTMLElement;
  let  scrollValue: Number;
  let y=0;
  onMount(async () => {

	});

</script>

<svelte:head>
	<!-- <script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT1QdxV5dTu0kz3KyXiKyUPCIyo6gvTZE&sensor=false">
	</script> -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT1QdxV5dTu0kz3KyXiKyUPCIyo6gvTZE&sensor=false">
	</script>

</svelte:head>

<svelte:window bind:scrollY="{y}" />
<div class="flex flex-col h-screen">

  <div class="fixed -top-52 w-full" class:showNav={scrollValue > 60}>
    <HeadNavigation ></HeadNavigation>
   </div>
  <!-- <div  class:hideNav={scrollValue > 60}>

    <HeadNavigation ></HeadNavigation>


   </div> -->


  <!-- {#if scrollValue>= 1}
  <div in:fly="{{delay: 1, duration: 1300, y: 700, opacity: 0.5}}">
    <HeadNavigation></HeadNavigation>
  </div>
  {/if} -->

	<main class="flex-1 overflow-y-auto" bind:this={carousel}  on:scroll={()=>scrollValue= carousel.scrollTop}>
		<slot />
	</main>
</div>



<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>


.showNav {
  top: 0px;
  z-index: 234;
}
  </style>
