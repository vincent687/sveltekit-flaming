<script>
	import { onMount } from 'svelte';
	//import * as jq from 'jquery';
	// import { google } from '$lib/types';

	let container;
	let map;
	let zoom =  18;
	let center = { lat: 22.372997089908722,  lng: 114.10724114323592  };
    let uluru = { lat: 22.372997089908722,  lng:  114.10724114323592 };
	onMount(async () => {
		if (!import.meta.env.SSR) {
	
			const map = new google.maps.Map(container, {
				zoom,
				center,

			});
			var latlng = new google.maps.LatLng(uluru.lat, uluru.lng);
			const marker = new google.maps.Marker({
				position: latlng,
				map: map,
			});
			const infowindow = new google.maps.InfoWindow({
				content: "123",
			});

		//	google.maps.event.addListener(map, 'idle', function(e) {

				// Prevents card from being added more than once (i.e. when page is resized and google maps re-renders)
		//	if ( jq( ".place-card" ).length === 0 ) {

					// jq(".gm-style").append(`<div style="position: absolute; left: 0px; top: 40px;"> <div style="margin: 10px; padding: 1px; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; border-radius: 2px; background-color: white;"> <div> <div class="place-card place-card-large"> <div class="place-desc-large"> <div class="place-name"> Tenuta Cigliano </div>
					// <div class="address"> Contrada Pisciarelli, 80078 Napoli, Italy </div></div><div class="navigate"> <div class="navigate">
					// 	 <a class="navigate-link" href="https://maps.google.com/maps?ll=40.837067,14.136834&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=PT&amp;mapclient=embed&amp;daddr=Tenuta%20Cigliano%20Contrada%20Pisciarelli%2080078%20Napoli%20Italy@40.837067,14.142821" target="_blank">
					// 		<div class="icon navigate-icon"></div>
					// 		<div class="navigate-text"> Directions </div>
					// 		</a> </div></div>
					// 		<div jstcache="26" class="navigate"> <div jsaction="placeCard.directions" class="navigate"> <a target="_blank" jstcache="37" href="https://maps.google.com/maps/dir//%E6%9C%89%E7%B7%9A%E9%9B%BB%E8%A6%96%E5%A4%A7%E6%A8%93+%E6%9F%B4%E7%81%A3%E8%A7%92%E6%B5%B7%E7%9B%9B%E8%B7%AF9%E8%99%9F/@22.3727641,114.1074261,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3403f8e56f3381c9:0xbdbb69dc3fa013e4" class="navigate-link"> <div class="icon navigate-icon"></div> <div jstcache="38" class="navigate-text">路線</div> </a> </div> <div class="tooltip-anchor"> <div class="tooltip-tip-outer"></div> <div class="tooltip-tip-inner"></div> <div class="tooltip-content"> <div jstcache="39">透過 Google 地圖規劃前往這個地點的路線。</div> </div> </div> </div>
					// 		<div class="review-box"> <div class="" style="display:none"></div>
					// 		<div class="" style="display:none"></div>
					// 		<div class="" style="display:none"></div>
					// 		<div class="" style="display:none"></div>
					// 		<div class="" style="display:none"></div><div class="" style="display:none"></div>
					// 		<a href="https://plus.google.com/101643431012640484007/about?hl=en&amp;authuser=0&amp;gl=pt&amp;socpid=247&amp;socfid=maps_embed:placecard" target="_blank">1 review</a> </div><div class="saved-from-source-link" style="display:none"> </div>
					// 		<div class="maps-links-box-exp"> <div class="time-to-location-info-exp" style="display:none"> <span class="drive-icon-exp experiment-icon"></span><a class="time-to-location-text-exp" style="display:none" target="_blank"></a><a class="time-to-location-text-exp" style="display:none" target="_blank"></a> </div>
					// 		<div class="google-maps-link"> <a href="https://maps.google.com/maps?ll=40.837067,14.136834&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=PT&amp;mapclient=embed&amp;cid=2152474408176797502" target="_blank">View larger map</a> </div></div>
					// 		<div class="time-to-location-privacy-exp" style="display:none"> <div class="only-visible-to-you-exp"> Visible only to you. </div>
					// 		<a class="learn-more-exp" target="_blank">Learn more</a> </div></div></div></div></div>`);
				//}
			//});
		}
	});
</script>

<div id="googlemap" class=" mx-auto px-4 lg:pt-24 lg:pb-64 bg-red">
	<div class="flex flex-wrap text-center justify-center">
		<div class="w-full lg:w-6/12 px-4 mt-8">
			<h2 class="text-4xl font-semibold text-white ">Contact Information</h2>
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

<div class="placeDiv">
  <div class="placecard__container">

    <div class="placecard__left">
      <p class="placecard__business-name">柴灣角海盛路9號有線電視大樓</p>
      <!-- <p class="placecard__info">9 Avenida Ramón Luis Rivera, Bayamón, 00961, Puerto Rico</p> -->
      <a class="placecard__view-large" target="_blank" href="https://www.google.com/maps?ll=22.372764,114.107426&z=17&t=m&hl=zh-TW&gl=HK&mapclient=embed&q=%E6%9C%89%E7%B7%9A%E9%9B%BB%E8%A6%96%E5%A4%A7%E6%A8%93+%E6%9F%B4%E7%81%A3%E8%A7%92%E6%B5%B7%E7%9B%9B%E8%B7%AF9%E8%99%9F" id="A_41">View larger map</a>
    </div> <!-- placecard__left -->

    <div class="placecard__right">
        <a class="placecard__direction-link" target="_blank" href="https://www.google.com/maps?ll=22.372764,114.107426&z=17&t=m&hl=zh-TW&gl=HK&mapclient=embed&q=%E6%9C%89%E7%B7%9A%E9%9B%BB%E8%A6%96%E5%A4%A7%E6%A8%93+%E6%9F%B4%E7%81%A3%E8%A7%92%E6%B5%B7%E7%9B%9B%E8%B7%AF9%E8%99%9F"
        id="A_9">
            <div class="placecard__direction-icon"></div>
            Directions
        </a>
    </div> <!-- placecard__right -->

  </div> <!-- placecard__container -->
</div> <!-- placeDiv -->
<div class="full-screen" bind:this={container} />

<style type="text/scss">
	.full-screen {
		width: 100vw;
    	height: 30vh;
	}


.placeDiv {
  z-index: 9999;
  position: absolute;
}


.placecard {
  &__container {
    box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px;
    max-width: 330px;
    width: 100%;
    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
    border-radius: 2px 2px 2px 2px;
    font: normal normal normal normal 11px / normal Roboto, Arial, sans-serif;
    margin: 10px;
    padding: 9px 4px 9px 11px;
    overflow: hidden;
  }

  &__left {
    float: left;
    width: 75%;
  }

  &__right {
    text-align: center;
    float: left;
    width: 25%;
  }

  &__business-name {
    cursor: default;
    height: 19px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
    perspective-origin: 100px 9.5px;
    transform-origin: 100px 9.5px;
    font: normal normal 500 normal 14px / normal Roboto, Arial;
    overflow: hidden;
    margin: 0;
  }

  &__info {
    color: rgb(91, 91, 91);
    cursor: default;
    height: 32px;
    width: 200px;
    column-rule-color: rgb(91, 91, 91);
    perspective-origin: 100px 16px;
    transform-origin: 100px 16px;
    border: 0px none rgb(91, 91, 91);
    font: normal normal normal normal 12px / normal Roboto, Arial;
    margin: 6px 0px 0px;
    outline: rgb(91, 91, 91) none 0px;
  }

  &__direction-icon {
    background: rgba(0, 0, 0, 0) url("https://maps.gstatic.com/mapfiles/embed/images/entity11.png") repeat scroll 0px 0px / 70px 210px padding-box border-box;
    height: 22px;
    width: 22px;
    margin-right: auto;
    margin-left: auto;
  }

  &__direction-link {
    color: rgb(58, 132, 223);
    display: block;
    height: 43px;
    text-decoration: none;
    width: 54.7344px;
  }

  &__view-large {
    display: block;
    margin-top: 10px;
    color: rgb(58, 132, 223);
    text-decoration: none;
  }

}


</style>
