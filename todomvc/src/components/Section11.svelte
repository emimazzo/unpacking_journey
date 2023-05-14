<script>
    import DonutGraph from "./Donut_graph/DonutGraphFinal.svelte";
  </script>

<br><br><br>
<div class="title" >
<h1> The Whys Behind the Migration: A Holistic View</h1>
</div>

<div class="container" >
<p>There are many different reasons that force people to leave their 
    houses in search for a better life. A recent survey of thousands 
    of households in Guatemala, Honduras, and El Salvador revealed some 
    of the most commonly reported reasons why people flee their home countries.
    <br>
     To explore these reasons in more detail, simply <b> hover over the sections </b>
     of the following donut chart; you can also <b>click on the different buttons </b>to see 
    the breakdown by country.</p>
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