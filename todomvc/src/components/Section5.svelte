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

<div class="title" >
<h1> Step into the Shoes of the Migrant's Gender</h1>
</div>

<div class="container" >
<p>Moreover, individuals of various genders choose to migrate from their countries of origin. 
  While we recognize the limitations of framing gender solely in the binary terms of male and female,
   obtaining data on other genders can be challenging. 
   <br>
   You can <b> hover over the graph </b> to view the number
    of people who identify as male or female from the country you selected and have decided to migrate. 
    Additionally, you can <b> click on the button </b> to switch between viewing migrants who are leaving solely 
    for the United States and those who are departing for any destination worldwide.</p>

  </div>

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

  p{
        max-width:500px;
        word-wrap:break-word;
        line-height: 1.56;
        font-family: New York Times, Georgia, Times New Roman;
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
         font-family: New York Times, Georgia, Times New Roman;
     }

  </style>
