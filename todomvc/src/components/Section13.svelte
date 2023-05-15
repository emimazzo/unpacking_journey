<script>
  import { response2 } from "./store.js";
  let response_final= "";
  function myFunction10() {
    response2.set('love sad understanding aware inspiring complex inspiring opportunist aware motivating  ' + ' ' + response_final);
    document.getElementById("demo2").innerHTML = "Thank you for your answer";
    console.log("CURRENT VALUE OF RESPONSE2", $response2);
  }
</script>
<div class="title" >
<h1>What is your opinion towards immigrants?</h1>
</div>

<div class="container" >
<p> In the box below, please <b> type one word </b> that best describes your current views about migrants. <br>
  Please note that your response will remain anonymous and no one will be able to associate it with you.
</p>
</div>

<div style="text-align: center">
<input
  id="userInput"
  type="text"
  placeholder="Please type your response"
  bind:value={response_final}
  style="font-size: 14px;"
/>
<button on:click={myFunction10} style="font-size: 14px;">Submit</button>
<p id="demo2"></p>

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