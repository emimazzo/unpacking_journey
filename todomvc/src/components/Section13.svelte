<h1>What is your opinion towards immigrants?</h1>

<script>
      let response2 = ''
      function myFunction2() {
        document.getElementById("demo2").innerHTML = "Thank you for your answer";
        console.log(response2)
      }
</script>

    
<input id="userInput2" type="text" placeholder="Please type your response" bind:value={response2}>
<button on:click={myFunction2}>Submit</button>
<p id="demo2"></p>
