<!-- <h1>What is your opinion towards immigrants?</h1>

    <script>
      import { response1 } from './store.js'
      let response = ''
      function myFunction() {
        document.getElementById("demo").innerHTML = "Thank you for your answer";
        console.log(response)
      }
    </script>

    
    <input id="userInput" type="text" placeholder="Please type your response" bind:value={response}>
    <button on:click={myFunction}>Submit</button>
    <p id="demo"></p>
 -->

<script>
  import { response1 } from "./store.js";
  let response = "";
  function myFunction() {
    response1.set(response);
    document.getElementById("demo").innerHTML = "Thank you for your answer";
    console.log("CURRENT VALUE OF RESPONSE1", $response1);
  }
</script>

<h1>What is your opinion towards immigrants?</h1>

<input
  id="userInput"
  type="text"
  placeholder="Please type your response"
  bind:value={response}
/>
<button on:click={myFunction}>Submit</button>
<p id="demo" />
