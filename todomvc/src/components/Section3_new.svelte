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
  let tooltip10;
  let country_selected = "something";

  onMount(() => {
    map = new mapboxgl.Map({
		container,
		style: "mapbox://styles/mapbox/light-v11", 
    center: [-89., 14.6222328],
		zoom: 4, // starting zoom level
    dragPan: false,
    scrollZoom: false 
    
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

                tooltip10.transition()
              .duration(500)
              .style('opacity', 0)
              .style('border', 'none');
      });
           
            
            map.on("click", function(e) {
                var features = map.queryRenderedFeatures(e.point, { layers: ["cf"] });
                if (features.length) {
                    console.log(e, features[0].properties.name);
                }
            });

            map.on("mousemove", "cf", function(e) {
                // Get the feature that the mouse is over
                var feature = e.features[0];
                var current_country = feature._vectorTileFeature.properties.sovereignt
                console.log('feat',current_country )



                // country
                country_selected = "El Savaldor";
                country_selected =current_country
                

});

            map.on("mouseleave", "cf", function() {

                tooltip10 = null;
                country_selected =null
            });
            
        });
  });

  



</script>


<svelte:head>
  <link
    rel="stylesheet"
    href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"/>
</svelte:head>

<div class="title" >
<h1>Step into the Shoes of the Migrant's Home Country</h1>
</div>

<div class="container" >
<p>
  El Salvador, Honduras, and Guatemala are three of the countries that see most
  migrants flee. All three countries, which are often referred as the Northern
  Triangle, are some of the poorest in the Western Hemisphere, with high rates
  of violence and conflict driving emigration.
  <br> <b> Hover over the countries in the map </b> to learn more about each of the three countries and,
  when you are ready, choose one of them as the country of origin for the story.
</p>
</div>

<div style="display: flex; justify-content: center;">
  <div class="map" bind:this={container} style="text-align: center;"/>
</div>

<!-- <div class="tooltip10" bind:this={tooltip10}>
  <div>
    {country_selected}
  </div>
</div> -->

<div class="tooltip10" bind:this={tooltip10}>
  {#if country_selected === null}
    {/if}
  {#if country_selected === "Guatemala"}
    <div>
     <b> <span style="color: blue;">{country_selected} </span></b> <br>
     <b>Population in 2020:</b> 16.86 million <br />
     <b>Number of Migrants leaving in 2020: </b>1,368,431 <br />
      <b>Average Yearly Salary in USD: </b>$4,490 <br />
      <b>GDP: </b>$77.63 billion
    </div>
    {/if}
  {#if country_selected === "Honduras"}
    <div>
      <b><span style="color: blue;">{country_selected} </span></b><br>
      <b>Population in 2020:</b> 10.12 million <br />
      <b>Number of Migrants leaving in 2020:</b> 985,077 <br />
      <b>Average Yearly Salary in USD: </b>$2,150 <br />
      <b>GDP: </b>$23.3 billion
    </div>
    {/if}
    {#if country_selected === "El Salvador"}
    <div>
      <b><span style="color: blue;">{country_selected} </span></b><br>
      <b>Population in 2020:</b> 6.29 million <br />
      <b>Number of Migrants leaving in 2020: </b>1,599,058 <br />
      <b>Average Yearly Salary in USD: </b>$3,740 <br />
      <b>GDP: </b>$26.88 billion
    </div>

  {/if}
</div>


<br />
<br />

<div class="button-container" >
<button class="country-btn" on:click={() => myFunction4("El Salvador")}
  >El Salvador</button
>
<button class="country-btn" on:click={() => myFunction4("Guatemala")}
  >Guatemala</button
>
<button class="country-btn" on:click={() => myFunction4("Honduras")}
  >Honduras</button
>
</div>

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

  .tooltip10 {
    
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

  .button-container {
  display: flex;
  justify-content: center;
}

/* .tooltip10 {
    font: 16px sans-serif;
    /* font-family: "Nunito", sans-serif; */
    /* visibility: visible; 
    background-color: black;
    border-radius: 10px;
    width: 350px;
    color: white;
    position: center;
    padding: 10px;
    z-index: 1
  } */

  .tooltip10 {
    font-family: New York Times, Georgia, Times New Roman;
  background: white;
  pointer-events: none;
  z-index: 1;
  color: black;
  left: 50%;
  transform: translateX(60%);
  width: 380px;
}

.tooltip10:before {
  content: "";
  position: absolute;
  top: -20px;
  left: calc(50% - 10px);
  /* border: 10px solid transparent; */
  /* border-bottom: 10px solid transparent; */
  z-index: -1;
  box-shadow: transparent;
  background-color: transparent;
  color: transparent;
  visibility: hidden;
  padding: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  border: none;
  border-radius: 10px;
}
  p{
      max-width:500px;
      word-wrap:break-word;
      line-height: 1.56;
      font-family: New York Times, Georgia, Times New Roman;
      font-size: 16px;
  }
  
  .container {
       margin: 0 auto;
      max-width: 500px;
      text-align: left;
      }
  
  .title {
       /* display: flex; */
       text-align: center;
       font-family: New York Times, Georgia, Times New Roman;
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

  .tooltip10-container {
    position: relative;
  }



  .image-container:hover .image:not(:hover) {
    opacity: 0.5;
  }

  .tooltip10-container:hover .tooltip10 {
    visibility: visible;
  }

  .tooltip10-container:hover .image {
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
