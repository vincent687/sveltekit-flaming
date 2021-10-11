<script>
	import { onMount } from 'svelte';
	// import { google } from '$lib/types';

	let container;
	let map;
	let zoom = 8;
	let center = { lat: -34.397, lng: 150.644 };

	onMount(async () => {
		if (!import.meta.env.SSR) {
			// debugger;
			const map = new google.maps.Map(container, {
				zoom,
				center
			});
		}
	});
</script>

<div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
	<div class="flex flex-wrap text-center justify-center">
		<div class="w-full lg:w-6/12 px-4">
			<h2 class="text-4xl font-semibold text-white">Contact Information</h2>
			<!-- <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
				Put the potentially record low maximum sea ice extent tihs year down to low ice. According
				to the National Oceanic and Atmospheric Administration, Ted, Scambos.
			</p> -->
		</div>
	</div>
	<div class="flex flex-wrap mt-12 justify-center">
		<div class="w-full lg:w-3/12 px-4 text-center">
			<h6 class="text-xl mt-5 font-semibold text-white">Address</h6>
			<p class="mt-2 mb-4 text-blueGray-400">
				1511B Cable TV Tower, 9 Hoi Shing Road, Tsuen Wan, New Territories
			</p>
		</div>
		<div class="w-full lg:w-3/12 px-4 text-center">
			<h5 class="text-xl mt-5 font-semibold text-white">Email</h5>
			<p class="mt-2 mb-4 text-blueGray-400">sales@flamingpartners.com.hk</p>
		</div>
		<div class="w-full lg:w-3/12 px-4 text-center">
			<h5 class="text-xl mt-5 font-semibold text-white">Website</h5>
			<p class="mt-2 mb-4 text-blueGray-400">www.flamingpartners.com.hk</p>
		</div>
	</div>
</div>
<div class="full-screen" bind:this={container} />

<style>
	.full-screen {
		width: 100vw;
		height: 100vh;
	}
</style>
