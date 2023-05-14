<script>
    import BubbleGraph from "./BubbleGraph.svelte";  
  </script>

<div class="title" >
<h1> Beyond Borders: Understanding Contemporary Migration Trends</h1>
</div>


<div class="container" >
<p> Migration has become an increasingly complex issue in today's world, 
    with countless individuals forced to flee their home countries on a daily
     basis in search of a better life. Moreover, migration is not confined to a 
     specific region; people from all continents are on the move, 
     seeking new opportunities and a chance to start over. 
     <br> 
     To gain a better understanding 
     of the scale of this phenomenon, you can explore the interactive graph below, which 
     provides information on the number of people who left each country in 2020, and bigger circles represent a larger number of people leaving the countries.
    <b>Simply hover over each bubble </b> for more details.</p>

    </div>

    <br>
    <br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


     <div style="text-align: center; position: relative">
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div style="height: 90%; width: 100%;">
          <BubbleGraph />
        </div>
      </div>
    </div>
    

    <style>
      p{
          max-width:500px;
          word-wrap:break-word;
          /* line-height: 1.5; */
          /* font-size: 16px; */
          /* font-family: "PT Sans", sans-serif; */
          /* font-size: 18px; */
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
      