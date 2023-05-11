<!-- <script>
      let response2 = ''
      function myFunction2() {
        document.getElementById("demo2").innerHTML = "Thank you for your answer";
        console.log(response2)
      }
</script>

    
<input id="userInput2" type="text" placeholder="Please type your response" bind:value={response2}>
<button on:click={myFunction2}>Submit</button>
<p id="demo2"></p>


 -->

 
<!-- <script>
  import { response2 } from "./store.js";
  let response_final = "";
  function myFunction7() {
    response2.set(response_final);
    document.getElementById("demo").innerHTML = "Thank you for your answer";
    console.log("CURRENT VALUE OF RESPONSE2", $response2);
  }
</script> -->

<script>
  import { response2 } from "./store.js";
  let response_final= "";
  function myFunction10() {
    response2.set('love ok great awesome woho perfect ok ok  ' + ' ' + response_final);
    document.getElementById("demo").innerHTML = "Thank you for your answer";
    console.log("CURRENT VALUE OF RESPONSE2", $response2);
  }
</script>

<h1>What is your opinion towards immigrants?</h1>

<input
  id="userInput"
  type="text"
  placeholder="Please type your response"
  bind:value={response_final}
/>
<button on:click={myFunction10}>Submit</button>
<p id="demo"></p>
