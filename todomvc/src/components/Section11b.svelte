<script>
    import SecondPieChart from "./SecondPieChart_new.svelte";
    // import { country } from './store.js'

    // $: console.log('section4', $country)
  </script>
  
  <h1> The Journey From Home to Hope: Navigating the Legal and Illegal Pathways of Migration</h1>
  <br>

  <p>The journey of migration is unique to each individual, with some fortunate enough to pursue legal pathways 
    while others must risk everything to find irregular means of entry.
     The survey we mentioned before, which included individuals from Honduras, El Salvador, and Guatemala,
      revealed the diverse paths people took to reach their desired destination.
      Explore the pie chart below to discover the various methods the surveyed individuals utilized in 
      their pursuit of a better life. 
      <br>
      Hover over each section of the pie chart to learn more about their different means of migration.</p>

  <div style="display: flex; justify-content: center;">
    <div style="text-align: center;">
      <SecondPieChart />
    </div>
  </div>
  