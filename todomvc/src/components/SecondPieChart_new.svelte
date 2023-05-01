<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";

  let data = [];
  let arc_data = [];
  const colors = ['#004c6d', '#c2dfff', '#008080', '#ffb347', '#3c2f2f', '#e6beff', '#800080', '#f0e442', '#000075', '#ff7f00'];

  let tourist_visa; 
  let work_student_visa; 
  let foreign_residence;
  let refuge_papers_mexico;
  let nid;
  let passport;
  let own;
  let coyote;
  let migrant_caravana;
  let other;

  // Load data and filter by selected country
  onMount(async function () {
    data = await d3.csv(
      "https://raw.githubusercontent.com/emimazzo/Finding-Refuge/main/data/leaving_means2.csv",
      function (d) {
        return {
          ...d,
          count: +d.count
        };
      }
    );

    let pieAngleGenerator = d3.pie().value(d => d.count);
    arc_data = pieAngleGenerator(data);

    console.log('MY NUEVA DATA', data);
    console.log('arc_data', JSON.stringify(arc_data));

    tourist_visa = data[0].count;
    work_student_visa = data[1].count; 
    foreign_residence = data[2].count; 
    refuge_papers_mexico= data[3].count; 
    nid = data[4].count; 
    passport= data[5].count; 
    own= data[6].count; 
    coyote= data[7].count; 
    migrant_caravana= data[8].count; 
    other= data[9].count; 

    console.log('tourist', work_student_visa)
  });

  let arcGenerator = d3
    .arc()
    .innerRadius(10)
    .outerRadius(175)
    .padAngle(0.02)
    .cornerRadius(4);

  let hovered = -1;

  let recorded_mouse_position = {
    x: 0,
    y: 0,
  };

console.log('acaaa', tourist_visa)
// console.log('PRINTENADO', data[0].count)
</script>

<div class="visualization">
  <svg width="500" height="500">
    <g transform="translate(250, 200)">
      {#each arc_data as data, index}
      <path
        d={arcGenerator({
          startAngle: data.startAngle,
          endAngle: data.endAngle,
        })}
        fill={colors[index % colors.length]} 
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
          <p>Tourist Visa: {tourist_visa}</p>
        {/if}
      {#if hovered === 1}
         <p>Work or Student Visa: {work_student_visa}</p> 
      {/if}
      {#if hovered === 2}
         <p>Foreign Residence: {foreign_residence}</p> 
      {/if}
      {#if hovered === 3}
      <p>Refuge/Asylum or With papers from Mexico: {refuge_papers_mexico}</p> 
   {/if}
   {#if hovered === 4}
   <p>National identity document (CA-4 countries): {nid}</p> 
  {/if}
  {#if hovered === 5}
  <p>Passport to a country that does not require a Visa: {passport}</p> 
{/if}
{#if hovered === 6}
<p>On their own (irregular): {own}</p> 
{/if}
{#if hovered === 7}
<p>With coyote (irregular): {coyote}</p> 
{/if}
{#if hovered === 8}
<p>Migrant caravans (irregular): {migrant_caravana}</p> 
{/if}
{#if hovered === 9}
<p>Other: {other}</p> 
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


