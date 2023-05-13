<script>
import WordCloud1 from "./WordCloud1.svelte";
</script>

<div class="title" >
<h1> Breaking Down Barriers: How Our Perceptions of Migrants Have Evolved</h1>
</div>

<div class="container" >
<p> If you're curious to hear how people’s opinions on immigrants
     changed throughout the stories, please take a look at the first response
      from all the participants...
</p>
</div>



<div style="text-align: center;">
      <WordCloud1/>
</div>


<style>
      p{
          max-width:500px;
          word-wrap:break-word;
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
       }
      </style>
