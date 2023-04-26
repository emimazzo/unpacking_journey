<script>
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    import { age } from './store.js'

    let data = [];
    let gender_chosen = 'Males';

    const max_height = 250;
    const scale = d3.scaleLinear().range([0, max_height]);

    onMount(async function() {
        data = await d3.csv('https://raw.githubusercontent.com/emimazzo/Finding-Refuge/main/data/age_gender_usa_destination.csv');

        data = data.filter(d => d.gender === gender_chosen && d.hasOwnProperty("gender"));
        console.log(data);

        // Update the domain of the scale
        scale.domain([0, d3.max(data, d => +d["20-49"])]);

        // Update the data with the scaled values
        data = data.map(d => {
            return {
                "0-19": scale(+d["0-19"]),
                "20-49": scale(+d["20-49"]),
                "50+": scale(+d["50+"])
            }
        });

        console.log(data);

        // Update the position of the labels
        const containerWidth = document.querySelector('.bar-container').offsetWidth;
        const labelWidth = document.querySelector('.x-label').offsetWidth;
        const labels = document.querySelectorAll('.x-label');
        labels.forEach((label, i) => {
            label.style.left = `${(i / 2) * containerWidth - labelWidth / 2}px`;
        });
    });




  let chosen_age = ''
  function myFunction3(age_given) {
    chosen_age = age_given
    age.set(age_given);
    console.log('final_age',$age)
  }

</script>




<div class="bar-container">
  {#if data.length > 0}
    <div class='bar' style='height: {data[0]["0-19"]}px'>
<!--       {scale.invert(data[0]["0-19"]).toLocaleString()} -->
      <span class="tooltip">{scale.invert(data[0]["0-19"]).toLocaleString()}</span>
    </div>
    <div class='bar' style='height: {data[0]["20-49"]}px'>
<!--       {scale.invert(data[0]["20-49"]).toLocaleString()} -->
      <span class="tooltip">{scale.invert(data[0]["20-49"]).toLocaleString()}</span>
    </div>
    <div class='bar' style='height: {data[0]["50+"]}px'>
<!--       {scale.invert(data[0]["50+"]).toLocaleString()} -->
      <span class="tooltip">{scale.invert(data[0]["50+"]).toLocaleString()}</span>
    </div>
  {:else}
    <p>Loading data...</p>
  {/if}

  <div class="x-labels">
    <span class="x-label">0-19 years</span>
    <span class="x-label">20-49 years</span>
    <span class="x-label">50+ years</span>
  </div>
</div>

<br>
<br>
<br>

<p>Select an age range to explore further.</p>

<button class="age-btn" on:click={() => myFunction3('0-19')}>0-19 Years</button>
<button class="age-btn" on:click={() => myFunction3('20-49')}>20-49 Years</button>
<button class="age-btn" on:click={() => myFunction3('50+')}>50+ Years</button>

{#if chosen_age}
  <p> Thank you for choosing {chosen_age} as your age range for the story! </p>
{/if}



<style>
.bar {
    position: absolute;
    background: steelblue;
    border: 1px solid white;
    color: white;
    text-align: right;
    padding: 3px;
    bottom: 0;
    width: 100px;
    transition: opacity 0.2s ease-in-out;
}

.bar:hover {
    opacity: 1;
}

.bar:not(:hover) {
    opacity: 0.5;
}

.bar:nth-child(1) {
    margin-left: 0;
}

.bar:nth-child(2) {
    margin-left: 125px;
}

.bar:nth-child(3) {
    margin-left: 250px;
}

/* Container element */
.bar-container {
    position: relative;
    display: flex;
    height: 250px; /* Set the height of the container to the maximum height */
    width: 350px;
}
.x-labels {
    position: absolute;
    bottom: -30px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 14px;
    white-space: nowrap;
}

.x-label:nth-child(1) {
    left: calc(0px + 50%);
}

.x-label:nth-child(2) {
    left: calc(120px + 50%);
}

.x-label:nth-child(3) {
    left: calc(250px + 50%);
}
	
.tooltip {
  position: absolute;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1;
}

  .bar:hover .tooltip {
    visibility: visible;
  }

  .age-btn {
  background-color: rgb(0,158,115);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

</style>
