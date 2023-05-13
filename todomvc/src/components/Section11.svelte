<script>
    import DonutGraph from "./Donut_graph/DonutGraphFinal.svelte";
  </script>

<div class="title" >
<h1> The Whys Behind the Migration: A Holistic View</h1>
</div>

<div class="container" >
<p>There are many different reasons that force people to leave their 
    houses in search for a better life. A recent survey of thousands 
    of households in Guatemala, Honduras, and El Salvador revealed some 
    of the most commonly reported reasons why people flee their home countries.
     To explore these reasons in more detail, simply hover over the sections 
     of the following donut chart.</p>
</div>


<div >
      <DonutGraph />
</div>

<style>
  p{
      max-width:500px;
      word-wrap:break-word;
      /* line-height: 1.5; */
      /* font-size: 16px; */
      font-family: New York Times, Georgia, Times New Roman;
      /* font-size: 18px; */
      line-height: 1.56;
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