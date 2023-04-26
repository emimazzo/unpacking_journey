<script>
    import PieChart from "./PieChartCopy2.svelte";
    import { gender } from './store.js'
  let chosen_gender = ''
  function myFunction3(gend) {
    chosen_gender = gend
    gender.set(chosen_gender);
    console.log('chosen_gen', $gender)
  }
  export { gender};
  // export let country;
  </script> 

<h1> Choose a Gender</h1>


<div style="text-align: center;">
    <PieChart/>
  </div>    

  <button class="age-btn" on:click={() => myFunction3('Female')}>Female</button>
  <button class="age-btn" on:click={() => myFunction3('Male')}>Male</button>
  
  {#if chosen_gender}
    <p> Thank you for choosing {chosen_gender} as your gender for the story! </p>
  {/if}
  

  <style>
    .age-btn {
    background-color: rgb(0,158,115);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }
  </style>
