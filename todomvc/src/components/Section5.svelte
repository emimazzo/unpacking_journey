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

<h1> Step into the Shoes of the Migrant's Gender</h1>
<p>Moreover, individuals of various genders choose to migrate from their countries of origin. 
  While we recognize the limitations of framing gender solely in the binary terms of male and female,
   obtaining data on other genders can be challenging. 
   <br>
   You can hover over the graph to view the number
    of people who identify as male or female from the country you selected and have decided to migrate. 
    Additionally, you can click on the button to switch between viewing migrants who are leaving solely 
    for the United States and those who are departing for any destination worldwide.</p>

<div style="text-align: center;">
    <PieChart/>
    <p> Select a gender to explore further.</p>
  <button class="age-btn" on:click={() => myFunction3('Female')}>Female</button>
  <button class="age-btn" on:click={() => myFunction3('Male')}>Male</button>
</div>    

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
