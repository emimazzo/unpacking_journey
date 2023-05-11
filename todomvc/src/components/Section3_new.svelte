<script>
  import { country } from './store.js'
  import mapboxgl from 'mapbox-gl';
  import { onMount } from 'svelte';

  let container, map;
  // import L from 'leaflet';
  console.log($country)

  // export let country;
  function myFunction4(country_name) {
    console.log('original_value', $country)
    // country = country_name;
    country.set(country_name);

    //// ADDING THANK YOU TEXT IN HTML (PART 1; THERE IS A PART 2)
    const text = `Thank you for choosing ${country_name} as your country of origin!`;
    const element = document.getElementById('Thank_you');
    element.innerHTML = (text)


    console.log("changed", $country);
  }

  mapboxgl.accessToken = "pk.eyJ1IjoiZW1henpvbGUiLCJhIjoiY2xnamw3enR6MHM2MDNxbnYyZHZkcmhxMCJ9.2uJ-nc00Htgmgr9sbDtfTQ";
  let tooltip;
  let country_selected = "something";

  onMount(() => {
    map = new mapboxgl.Map({
		container,
		style: "mapbox://styles/mapbox/light-v11", 
    center: [-89., 14.6222328],
		zoom: 4, // starting zoom level
    dragPan: false
    
	});

          
  map.on('load', function () {
            map.addSource('cbs', {  // country-boundaries-simplified
                'type': 'geojson',
                // 'data': 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson'

                'data': 'https://raw.githubusercontent.com/emimazzo/Finding-Refuge/main/data/border2.geojson'
            });
            
            
            map.addLayer({
                "id": "cf",  // country-fills
                "type": "fill",
                "source": "cbs",
                "layout": {},
                "paint": {
                    "fill-color": "#627BC1",
                    "fill-opacity": 0.5
                }
            });
            
            map.addLayer({
                "id": "cb",  // country borders
                "type": "line",
                "source": "cbs",
                "layout": {},
                "paint": {
                    "line-color": "#627BC1",
                    "line-width": 2
                }
            });
            
            map.addLayer({
                "id": "cfh",  // country-fills-hover",
                "type": "fill",
                "source": "cbs",
                "layout": {},
                "paint": {
                    "fill-color": "#627BC0",
                    "fill-opacity": 1
                },
                "filter": ["==", "name", ""]
            });
            
            // When the user moves their mouse over the page, we look for features
            // at the mouse position (e.point) and within the states layer (states-fill).
            // If a feature is found, then we'll update the filter in the state-fills-hover
            // layer to only show that state, thus making a hover effect.
            map.on("mousemove", function(e) {
                var features = map.queryRenderedFeatures(e.point, { layers: ["cf"] });
                
                if (features.length) {
                    map.getCanvas().style.cursor = 'pointer';
                    map.setFilter("cfh", ["==", "name", features[0].properties.name]);
                    } else {
                    map.setFilter("cfh", ["==", "name", ""]);
                    map.getCanvas().style.cursor = '';
                }
                
            });
            
            // Reset the state-fills-hover layer's filter when the mouse leaves the map
            map.on("mouseout", function() {
                map.getCanvas().style.cursor = 'auto';
                map.setFilter("cfh", ["==", "name", ""]);
            });
            
            map.on("click", function(e) {
                var features = map.queryRenderedFeatures(e.point, { layers: ["cf"] });
                if (features.length) {
                    console.log(e, features[0].properties.name);
                }
            });

            map.on("mouseenter", "cf", function(e) {
                // Get the feature that the mouse is over
                var feature = e.features[0];
                var current_country = feature._vectorTileFeature.properties.sovereignt
                console.log('feat',current_country )



                // country
                country_selected = "El Savaldor";
                country_selected =current_country
                
                
                // Create a tooltip element with the name of the country
                // var tooltip = document.createElement("div");
                // tooltip.className = "tooltip"; 
                // tooltip.innerHTML = 'lala';
                
                // Set the position of the tooltip to be above and centered on the mouse
                // tooltip.style.top = e.originalEvent.clientY - 10 + "px";
                // tooltip.style.left = e.originalEvent.clientX + "px";
                
                // Add the tooltip element to the map container
                // map.getCanvasContainer().appendChild(tooltip);
});

            map.on("mouseleave", "cf", function() {
                // Remove all tooltips from the map container
                // var tooltips = document.getElementsByClassName("tooltip");
                // for (var i = 0; i < tooltips.length; i++) {
                //     tooltips[i].remove();
                // }
                tooltip = null;
            });
            
        });
  });

  



</script>


<svelte:head>
  <link
    rel="stylesheet"
    href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"/>
</svelte:head>

<h1>Step into the Shoes of the Migrant's Home Country</h1>

<p>
  El Salvador, Honduras, and Guatemala are three of the countries that see most
  migrants flee. All three countries, which are often referred as the Northern
  Triangle, are some of the poorest in the Western Hemisphere, with high rates
  of violence and conflict driving emigration.
  <br /> Hover over the images to learn more about each of the three countries and,
  when you are ready, choose one of them as the country of origin for the story.
</p>

<div style="display: flex; justify-content: center;">
  <div class="map" bind:this={container} style="text-align: center;"/>
</div>

<!-- <div class="tooltip" bind:this={tooltip}>
  <div>
    {country_selected}
  </div>
</div> -->

<div class="tooltip" bind:this={tooltip}>
  {#if country_selected === "Guatemala"}
    <div>
      {country_selected} <br>
      Population in 2020: 16.86 million <br />
      Number of Migrants leaving in 2020: 1,368,431 <br />
      Average Yearly Salary in USD: $4,490 <br />
      GDP: $77.63 billion
    </div>
    {/if}
  {#if country_selected === "Honduras"}
    <div>
      {country_selected} <br>
      Population in 2020: 10.12 million <br />
      Number of Migrants leaving in 2020: 985,077 <br />
      Average Yearly Salary in USD: $2,150 <br />
      GDP: $23.3 billion
    </div>
    {/if}
    {#if country_selected === "El Salvador"}
    <div>
      {country_selected} <br>
      Population in 2020: 6.29 million <br />
      Number of Migrants leaving in 2020: 1,599,058 <br />
      Average Yearly Salary in USD: $3,740 <br />
      GDP: $26.88 billion
    </div>

  {/if}
</div>


<br />
<br />

<button class="country-btn" on:click={() => myFunction4("El Salvador")}
  >El Salvador</button
>
<button class="country-btn" on:click={() => myFunction4("Guatemala")}
  >Guatemala</button
>
<button class="country-btn" on:click={() => myFunction4("Honduras")}
  >Honduras</button
>

 <!-- ADDING THANK YOU TEXT IN HTML (PART 2; THERE IS A PART 1 ABOVE) -->
<div id = 'Thank_you' >
</div>

<style>
  .map {
    width: 200px;
    height: 200px;
    outline: rgb(0, 8, 255) 3px;
    visibility: visible;
  }

  .tooltip {
    
    background-color: pink;

  }

  .country-btn {
    background-color: rgb(0, 158, 115);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }
</style>

<!-- <style>
  .image-container {
    display: flex;
    justify-content: space-between;
  }

  .image {
    width: 150px;
    height: 150px;
    margin-right: 10px;
  }

  .tooltip-container {
    position: relative;
  }



  .image-container:hover .image:not(:hover) {
    opacity: 0.5;
  }

  .tooltip-container:hover .tooltip {
    visibility: visible;
  }

  .tooltip-container:hover .image {
    opacity: 1;
  }

  .country-btn {
    background-color: rgb(0, 158, 115);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }

  /* .country-btn.dimmed {
    opacity: 0.5;
    cursor: not-allowed;
  } */
</style> -->
