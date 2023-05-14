<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import Legend from "./legend_SecondPieChart_last.svelte";

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
  let total = 0;


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
    console.log('bababababa');

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

    total = tourist_visa + work_student_visa + foreign_residence + refuge_papers_mexico + nid
      +passport + own + coyote + migrant_caravana + other;

    console.log('tourist', work_student_visa)
    
  });


	
  


  let arcGenerator = d3
    .arc()
    .innerRadius(75)
    .outerRadius(150)
    .padAngle(0.02)
    .cornerRadius(4);

  let hovered = -1;

  let recorded_mouse_position = {
    x: 0,
    y: 0,
  };

console.log('acaaa', tourist_visa)
// console.log('PRINTENADO', data[0].count)

const ramp = [
  '#004c6d', '#c2dfff', '#008080', '#ffb347', '#3c2f2f', '#e6beff', '#800080', '#f0e442',
    ];
        
    const values = [
        "Tourist Visa",
        "Work or Student Visa",
        "Foreign Residence",
        "Refuge/Asylum or With papers from Mexico",
        "National identity document",
        "Passport to a country that does not require a Visa",
        "On their own (irregular)",
        "With coyote (irregular)",
        "Migrant caravans (irregular)",
        "Other"
    ];
        const columns = 1
        

</script>

<div class="visualization">
  <Legend
  title="Migration Means"
  {...{ ramp, values, columns }}
/>
              <svg width="300" height="300">
                <g transform="translate(150, 150)">
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
              <text style="font-size:3em;font-family:  nyt-franklin,arial,helvetica,sans-serif;"class={hovered === -1 ? "tooltip-hidden": "tooltip-visible"} x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">


                {#if hovered !== -1}
                  {#if hovered === 0}
                      {Math.round(100*tourist_visa/total)}%
                    {/if}
                  {#if hovered === 1}
                      {Math.round(100*work_student_visa/total)}%
                  {/if}
                  {#if hovered === 2}
                      {Math.round(100*foreign_residence/total)}%
                  {/if}
                  {#if hovered === 3}
                    {Math.round(100*refuge_papers_mexico/total)}%
                  {/if}
                  {#if hovered === 4}
                    {Math.round(100*nid/total)}%
                  {/if}
                  {#if hovered === 5}
                    {Math.round(100*passport/total)}% 
                  {/if}
                  {#if hovered === 6}
                    {Math.round(100*own/total)}%
                  {/if}
                  {#if hovered === 7}
                    {Math.round(100*coyote/total)}% 
                  {/if}
                  {#if hovered === 8}
                    {Math.round(100*migrant_caravana/total)}%
                  {/if}
                  {#if hovered === 9}
                  {Math.round(100*other/total)}%
                  {/if}

                {/if}

              </text>  
                
		
  </svg>



        <div
            class={hovered === -1 ? "tooltip-hidden" : "tooltip-visible"}
            style="left: {recorded_mouse_position.x}px; top: {recorded_mouse_position.y}px"
          >
            {#if hovered !== -1}
              {#if hovered === 0}
                  <p><strong>Tourist Visa:</strong> {tourist_visa}</p>
                {/if}
              {#if hovered === 1}
                <p><strong>Work or Student Visa:</strong> {work_student_visa}</p> 
              {/if}
              {#if hovered === 2}
                <p><strong>Foreign Residence:</strong> {foreign_residence}</p> 
              {/if}
              {#if hovered === 3}
              <p><strong>Refuge/Asylum or With papers from Mexico:</strong> {refuge_papers_mexico}</p> 
          {/if}
          {#if hovered === 4}
          <p><strong>National identity document (CA-4 countries):</strong> {nid}</p> 
          {/if}
          {#if hovered === 5}
          <p><strong>Passport to a country that does not require a Visa:</strong> {passport}</p> 
        {/if}
        {#if hovered === 6}
        <p><strong>On their own (irregular):</strong> {own}</p> 
        {/if}
        {#if hovered === 7}
        <p><strong>With coyote (irregular):</strong> {coyote}</p> 
        <p><b>What is a Coyote? </b>They are people associated with criminal organizations that are irregularly hired to guide migrants across borders</p>

        {/if}
        {#if hovered === 8}
        <p><strong>Migrant caravans (irregular):</strong> {migrant_caravana}</p> 
        {/if}
        {#if hovered === 9}
        <p><strong>Other:</strong> {other}</p> 
        {/if}

            {/if}
          </div> 
</div> 


<style>
  .visualization {
    font: 15px sans-serif;
    margin: auto;
    margin-top: 1px;
    
  }

  /* dynamic classes for the tooltip */
  .tooltip-hidden {
    visibility: hidden;
    width: 200px;
    position: absolute;
  }

  .tooltip-visible {
    font-family:  nyt-franklin,arial,helvetica,sans-serif;
    text-align: left;
    position: absolute;
    opacity: 0.9;
    padding: 10px 20px;
    background: white;
    border: 1px solid black;
    pointer-events: none;
    z-index: 1;
    color: black;
  }
</style>

