

<script>
  import jQuery from "jquery";

  import { onMount } from 'svelte';
  import { amp, browser, dev, mode, prerendering } from '$app/env';

  import { fly } from 'svelte/transition';
  let bxx=0;
  let by=0;
  let show=false;
  setTimeout(()=>{show=true}, 50)
  $: bx= -1*bxx
  onMount(async () => {

	});


</script>
<svelte:window bind:scrollX={bxx}  bind:scrollY={by}/>

<svg
	class="absolute overflow-hidden bg-gray-lightest2"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="none"
	version="1.1"
	viewBox="0 0 2560 100"
	x="0"
	y="0"
	><polygon
		class="text-blueGray-200 fill-current"
		style="fill: white;"
		points="2560 0 2560 100 0 100"
	/></svg
>
<div id="service" class="flex flex-wrap items-center bg-white">
	<div class="w-full mt-32 md:w-5/12 px-4 mr-auto ml-auto">
		<div
			class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-50"
		>
			<i class="fas fa-user-friends text-xl" />
		</div>

		<h3 class="text-3xl mb-2 font-semibold leading-normal text-gray-600">OBJECTIVES</h3>
		<h2 class="text-2xl">Flaming Partners targets</h2>
		<p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
			to be the biggest online Production Management System in the Chinese market. Since we
			are the only company who provide this service in the market now, it will be widely accepted
			because it is a necessity for the industry to merge with technology. Our system will have a
			positive significant impact to the workflow in production process.
		</p>
	</div>
	<div class="w-full md:w-4/12 ml-auto mr-auto px-4  mb-12">
    {#if show}
		<img alt="..." class="max-w-full rounded-lg shadow-lg" src="flamier_profolio_3b-10.jpg" in:fly="{{delay: 1, duration: 1300, y: 700, opacity: 0.5}}" />
    {/if}
  </div>
</div>


<div class="flex flex-wrap items-center bg-white">
	<div class=" mx-auto px-4 ">
		<div class="items-center flex flex-wrap">
			<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
        {#if show}
        <img alt="..." class="max-w-full rounded-lg shadow-lg" src="flamier_profolio_3b-11.jpg" in:fly="{{delay: 1, duration: 1300, y: 700, opacity: 0.5}}" />

    {/if}
				<!-- <img alt="..." class="max-w-full rounded-lg shadow-lg" src="flamier_profolio_3b-11.jpg" /> -->
			</div>
			<div class="w-full md:w-5/12 ml-auto mr-auto px-4">
				<div class="md:pr-12">
					<div
						class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
					>
						<i class="fas fa-rocket text-xl" />
					</div>
					<h3 class="text-3xl font-semibold text-gray-600">APPLICATION</h3>
					<h2 class="text-2xl">We are an online Production Management System [PMS]</h2>
					<p class="mt-4 text-lg leading-relaxed ">
						with app support. Our service cover the entire process of production shoot from
						pre-production to post-production by project. We will create an individual secure
						project for each production. From creating the story, the script will enter into our
						system and it can automatically generate scene breakdown information for production use.
						We designed a central database store in cloud to save all information in a production.
						We provide realtime information upates and our system can send notifications to all
						production member at the same time. The information stored can be review anytime,
						anywhere will a computer or a moblie device. With our system, the production can
						significantly reduce cost in printing matierials because everything can be view online.
						PMS can lead the industry to become more enviromental friendly.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
