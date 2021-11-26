<script lang="ts">
   import { onMount } from "svelte";

    let ParticlesComponent;

    onMount(async () => {
      const module = await import("svelte-particles");

      ParticlesComponent = module.default;

    });

	//  import Particles from "svelte-particles";

	 let particlesUrl = "http://foo.bar/particles.json";

	let particlesConfig = {
		particles: {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let onParticlesInit = (main) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
	};
</script>


<!-- This example requires Tailwind CSS v2.0+ -->
<!-- <div class="relative bg-gray-50 overflow-hidden bg-hero-banner bg-gradient-to-t"> -->


<div id="home"
	class="bg-fixed items-center justify-center h-screen mb-12 relative bg-cover bg-center bg-hero-banner lg:bg-hero-banner overflow-hidden md:h-screen/2 lg:h-screen "
>

	<div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
		<svelte:component
    this="{ParticlesComponent}"
				id="tsparticles"
				options="{particlesConfig}"
				on:particlesLoaded="{onParticlesLoaded}"
				on:particlesInit="{onParticlesInit}"
			  />
		<!-- <div class="relative h-full max-w-7xl mx-auto">
			<svg
				class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
				width="404"
				height="784"
				fill="none"
				viewBox="0 0 404 784"
			>
				<defs>
					<pattern
						id="f210dbf6-a58d-4871-961e-36d5016a0f49"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
			</svg>
			<svg
				class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
				width="404"
				height="784"
				fill="none"
				viewBox="0 0 404 784"
			>
				<defs>
					<pattern
						id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
			</svg>
		</div> -->
	</div>

	<div class="relative pt-6 pb-16 sm:pb-24">
		<div class="sticky top-0 z-50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6">

				<nav
					class="relative flex items-center justify-between sm:h-20 md:justify-center"
					aria-label="Global"
				>
					<div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
						<div class="flex items-center justify-between w-full md:w-auto">
              <img class="h-44 w-auto sm:h-20" src="flaming-tranparent.png" alt="" />
							<!-- <a href="#">
								<span class="sr-only">Workflow</span>

								<img class="h-44 w-auto sm:h-20" src="flaming-tranparent.png" alt="" />
							</a> -->
							<div class="-mr-2 flex items-center md:hidden">
								<button
									type="button"
									class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									aria-expanded="false"
								>
									<span class="sr-only">Open main menu</span>
									<!-- Heroicon name: outline/menu -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div class="hidden md:flex md:space-x-10">
						<a href="#home" class="text-xl font-medium text-gray-500 hover:text-gray-900">Home</a>

						<a href="#about" class="text-xl font-medium text-gray-500 hover:text-gray-900">About</a>

						<a href="#service" class="text-xl font-medium text-gray-500 hover:text-gray-900">Service</a>

						<!-- <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a> -->
					</div>
					<!-- <div
						class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
					>
						<span class="inline-flex rounded-md shadow">
							<a
								href="#"
								class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
							>
								Log in
							</a>
						</span>
					</div> -->
				</nav>
			</div>

			<!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->

			<div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
				<div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div class="px-5 pt-4 flex items-center justify-between">
						<div>
							<img class="h-16 w-auto" src="flaming-tranparent.png" alt="" />
						</div>
						<div class="-mr-2">
							<button
								type="button"
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							>
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="px-2 pt-2 pb-3">
						<a
							href="#home"
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>Home</a
						>

						<a
							href="#about"
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>About</a
						>

						<a
							href="#service"
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>Service</a
						>

					</div>
					<!-- <a
						href="#"
						class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
					>
						Log in
					</a> -->
				</div>
			</div>
		</div>

		<main class="mt-16 mx-auto max-w-7xl px-4 ss:mt-190">
			<div class="text-center">

				<!-- <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					<span class="block xl:inline text-white">TAKE PRODUCTION TO DIGITALIZATION</span>
				</h1>
				<p
					class="mt-3 max-w-md mx-auto text-base text-gray sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
				>
					all-in-one production management system
				</p> -->

        <!-- border-radius: 36px;
    border: white solid 1px;
    /* opacity: 0.5; */
    background-color: transparent; -->
				<div class="ss:-mt-24 mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-60 lg:mt-190">
					<div class="rounded-md shadow">
						<a
              href="#googlemap"
							class=" rounded-full bg-opacity-0  border-white w-full flex items-center justify-center px-8 py-3  border text-base font-medium  text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
						>
							Get in touch
						</a>
					</div>
					<!-- <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
						<a
							href="#"
							class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
						>
							Live demo
						</a>
					</div> -->
				</div>
			</div>
		</main>
	</div>
</div>
