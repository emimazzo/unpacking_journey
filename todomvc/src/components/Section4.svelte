<script>
    import BarGraph from "./BarGraph.svelte";
    // import { country } from './store.js'

    // $: console.log('section4', $country)
  </script>
  
  <h1>From Young to Old: The Age Ranges of Those Seeking Opportunities in the USA</h1>
  <section>
    <p>While most migrants from the three countries analyzed above end up in the United States as their final destination,
         there is a diverse range of age groups among these immigrants. In 2020, the number of immigrants in the US fell 
         into three age ranges. 
         <br> <br>
         Hover over the bars to learn more about the number of migrants in each age range.
        <br> <br> </p>
  </section>

  <div style="display: flex; justify-content: center;">
    <div style="text-align: center;">
      <BarGraph />
    </div>
  </div>
  