<script>
    import BarGraph from "./BarGraph.svelte";
    // import { country } from './store.js'

    // $: console.log('section4', $country)
  </script>
  
<div class="title" >
  <h1>From Young to Old: The Age Ranges of Those Seeking Opportunities in the USA</h1>
</div>

<div class="container" >
    <p>While most migrants from the three countries analyzed above end up in the United States as their final destination,
         there is a diverse range of age groups among these immigrants. In 2020, the number of immigrants in the US fell 
         into three age ranges. 
         <br> <br>
        <b> Hover over the bars</b> to learn more about the number of migrants in each age range.
        <br> <br> </p>
    </div>

  <div style="display: flex; justify-content: center;">
    <div style="text-align: center;">
      <BarGraph />
    </div>
  </div>
  

  <style>
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