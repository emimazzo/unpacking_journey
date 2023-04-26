<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { country } from "./store.js";
  // import {country} from "./Section3.svelte"
  // import {country} from "./ScrollyTeller.svelte"

  // console.log(country);

  let data = [];
  let world = [];
  let world2 = [];
  let usa2 = [];
  let usa = [];
  let male_world = "";
  let female_world = "";
  let male_usa = "";
  let female_usa = "";
  let country_chosen = 'Guatemala';

  country.subscribe(value => {
    country_chosen = value
  })
  // let country_chosen = $country


  let showUSA = false;
  let selectedType = writable([]);
  // let country_chosen = "Guatemala"; /// CHANGE LATER WHEN I IMPORT THE VARIABLE THEY CHOSE!!
  // $: if (country){
  //   console.log('aaaaaa', country);
  // $: console.log('checking', $country_chosen)

  console.log('UPDATED', $country)
  $: world = data.filter(
      (d) =>
        d.destination === "World" &&
        d.hasOwnProperty("destination") &&
        d.country_origin === country_chosen
    );
    $: usa = data.filter(
      (d) =>
        d.destination === "USA" &&
        d.hasOwnProperty("destination") &&
        d.country_origin === country_chosen
    );


    // $: male_world = world[0].male_2020;

    $: male_world = world[0] == undefined ? 0: world[0].male_2020;
    console.log("male w", male_world);


    // $: female_world = world[0].female_2020;
    $: female_world = world[0] == undefined ? 0: world[0].female_2020;
     console.log("female w", female_world);

    // $: male_usa = usa[0].male_2020;
    $: male_usa = usa[0] == undefined ? 0: usa[0].male_2020;
    console.log("male us", male_usa);

    $: female_usa = usa[0] == undefined ? 0: usa[0].female_2020;
    // $: female_usa = usa[0].female_2020;
    console.log("female us", female_usa);
    
  // Load data and filter by selected country
  onMount(async function () {
    data = await d3.csv(
      "https://raw.githubusercontent.com/emimazzo/Finding-Refuge/main/data/gender_by_origin.csv",
      function (d) {
        return {
          ...d,
          male_2020: +d.male_2020,
          female_2020: +d.female_2020,
          count: +d.male_2020 + +d.female_2020,
        };
      }
    );

    
    console.log("world", world);

  });

  // console.log("the stored variable", $country);

  let arcGenerator = d3
    .arc()
    .innerRadius(10)
    .outerRadius(100)
    .padAngle(0.02)
    .cornerRadius(4);

  $: console.log("femeeee", female_usa);

  $: if (female_world && male_world) {
    let pieAngleGenerator = d3.pie();
    world2 = pieAngleGenerator([female_world, male_world]);
    console.log(JSON.stringify(world));
  }

  $: if (female_usa && male_usa) {
    let pieAngleGenerator = d3.pie();
    usa2 = pieAngleGenerator([female_usa, male_usa]);
    console.log(JSON.stringify(usa));
  }

  function toggleData() {
    showUSA = !showUSA;
  }

  let hovered = -1;

  let recorded_mouse_position = {
    x: 0,
    y: 0,
  };
</script>

{#if showUSA}
  <h4> Migrants from {$country} heading to the United States</h4>
{:else}
  <h4> Migrants from {$country} heading anywhere in the world</h4>
{/if}

<div class="visualization">
  <button on:click={toggleData}
    >{showUSA
      ? "Click here to see migrants heading anywhere in the world"
      : "Click here to see migrants heading only to the USA"}</button
  >
  <svg width="500" height="500">
    <g transform="translate(250, 120)">
      {#each showUSA ? usa2 : world2 as data, index}
        <path
          d={arcGenerator({
            startAngle: data.startAngle,
            endAngle: data.endAngle,
          })}
          fill={showUSA && index === 0
            ? "#FFA500"
            : !showUSA && index === 0
            ? "#6495ED"
            : "grey"}
          on:mouseover={(event) => {
            hovered = index;
            recorded_mouse_position = {
              x: event.pageX,
              y: event.pageY,
            };
          }}
          on:mouseout={(event) => {
            hovered = -1;
          }}
        />
      {/each}
    </g>
  </svg>

  <div
    class={hovered === -1 ? "tooltip-hidden" : "tooltip-visible"}
    style="left: {recorded_mouse_position.x}px; top: {recorded_mouse_position.y}px"
  >
    {#if hovered !== -1}
      {#if hovered === 0}
        {#if showUSA}
          <p>Number of Females: {female_usa.toLocaleString()}</p>
          {:else}
            <p>Number of Females: {female_world.toLocaleString()}</p>
        {/if}
      {:else}
        {#if showUSA}
         <p>Number of Males: {male_usa.toLocaleString()}</p> 
         {:else}
          <p>Number of Males: {male_world.toLocaleString()}</p> 
        {/if}
        {/if}
    {/if}
  </div>
</div>

<style>
  .visualization {
    font: 25px sans-serif;
    margin: auto;
    margin-top: 1px;
    text-align: middle;
  }

  /* dynamic classes for the tooltip */
  .tooltip-hidden {
    visibility: hidden;
    font-family: "Nunito", sans-serif;
    width: 200px;
    position: absolute;
  }

  .tooltip-visible {
    font: 16px sans-serif;
    /* font-family: "Nunito", sans-serif; */
    visibility: visible;
    background-color: black;
    border-radius: 10px;
    width: 200px;
    color: white;
    position: absolute;
    padding: 10px;
    z-index: 1
  }
</style>

