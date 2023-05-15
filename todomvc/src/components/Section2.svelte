<script>
  import { response1 } from "./store.js";
  let response = "";
  function myFunction() {
    response1.set('good challenge good neutral unsure positive ' + ' ' + response);
    document.getElementById("demo").innerHTML = "Thank you for your answer";
    console.log("CURRENT VALUE OF RESPONSE1", $response1);
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
  bind:value={response}
  style="font-size: 14px;"
/>
<button on:click={myFunction} style="font-size: 14px;">Submit</button>
<p id="demo" />

</div>


<style>
  p{
      max-width:500px;
      word-wrap:break-word;
      /* line-height: 1.5; */
      font-size: 16px;
      /* font-family: "PT Sans", sans-serif; */
      /* font-size: 18px; */
      line-height: 1.56;
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
  