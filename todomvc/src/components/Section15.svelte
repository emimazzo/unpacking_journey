<script>
import WordCloud2 from "./WordCloud2.svelte";
</script>



<div class="container" >
<p> And compare it to the last response from all participants!
</p>
</div>


<div style="text-align: center;">
      <WordCloud2/>
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

      </style>
