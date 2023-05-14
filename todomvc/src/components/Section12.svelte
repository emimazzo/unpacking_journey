<script>
    import DeathGraph from "./DeathGraph/DeathGraph2.svelte";
  </script>


<div class="title" >
<h1>The Dark Side of Migration: The Human Toll of a Global Crisis</h1>
</div>


<div class="container" >
<p> For many people, leaving their home country is a last resort in search of 
    a better life. However, the journey is often fraught with danger, and
    thousands of lives are lost in the attempt. Those who attempt to migrate 
    through illegal channels face even greater risks, with families torn apart 
    and dreams shattered by the tragedy of lost lives.
    <br><br>

   <b>Scroll down and hover over each bar </b> below to reveal the heartbreaking toll of migrant lives lost
     in different regions of the world in 2021,
     a stark reminder of the human cost of forced displacement and migration. 
</p>
</div>

<div >
    <DeathGraph />
</div>

<style>
    p{
        max-width:500px;
        word-wrap:break-word;
        line-height: 1.56;
        font-size: 16px;
        font-family: New York Times, Georgia, Times New Roman;
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