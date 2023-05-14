<script>
  import { country } from './store.js'
  console.log($country)

  // export let country;
  function myFunction4(country_name) {
    console.log('original_value', $country)
    // country = country_name;
    country.set(country_name);

    //// ADDING THANK YOU TEXT IN HTML (PART 1; THERE IS A PART 2)
    const text = `Thank you for choosing ${country_name} as your country of origin!`;
    const element = document.getElementById('Thank_you');
    element.innerHTML = (text)


    console.log("changed", $country);
  }
</script>

<div class="title" >
<h1>Voices Unheard: The Plurality of Stories That Remain to Be Told</h1>
</div>

<div class="container" >
<p>
  Even though you just learned about a particular story that matched your original choices,
   many more stories still remain to be told. 
  Take a moment to <b>hover over the images below </b>and discover a glimpse of the diverse experiences 
  of other migrants that you might have encountered if you had made different choices. 
  Each of these stories has its own unique perspective, challenges, and triumphs, offering 
  an insightful view of the migrant experience.
</p>
</div>

<div class="image-container">
  <div class="tooltip-container">
    <img
    src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Guatemala_F_10.jpg"
    alt="Map of El Salvador"
      
      class="image" />
    <div class="tooltip">
      <b>Melissa Sical, 10  </b>
      <br>
      Melissa and her father traveled to the US border, where
      <br>
      they were subjected to the Migrant Protection Protocols <br> 
        and required to wait <b> two months  </b> for a U.S. court hearing.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Alvina_Jeronimo_Perez_Guatemala_F_42_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
     <b> Alvina Jerónimo Pérez, 42 </b>
      <br>
      Alvina and her husband shell homegrown beans
      <br>
      in Guatemala. Jerónimo made a failed attempt
      <br> 
       to migrate to the U.S. <b>to pay off a loan on their house.</b> 
      <br> 
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Natividad_Galicia_Guatemala_F_79_color.jpg"
      alt="Map of Honduras"
      class="image"
    />
    <div class="tooltip">
     <b>Natividad Galicia, 79 </b>
      <br>
      Natividad and her husband grew corn and broccoli 
      <br>
      on a farm in Guatemala. They had always been poor <br>
      but <b>never considered immigrating.</b>
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Bacilio_Miguel_Guatemala_M_16_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      <b>Bacilio Miguel, 16 </b>
      <br>
      Bacilio immigrated to the U.S. from Guatemala
      <br>
       with his family in 2016. In July 2019, his family's
      <br>
      <b> application for U.S. residency was rejected. </b>

      
    </div>
  </div>

  <div class="tooltip-container">
    <img
    src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Guatemala_M_32.jpg"
    alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
     <b> Oscar Lopez, 32 </b>
      <br>
      Oscar is a Guatemalan farmer. The country has 
      <br>
      been suffering from <b>drought</b> and he is at risk 
      <br>
      of <b>losing everything if he loses his crop.</b>
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Diego_Saucedo_Guatemala_M_85_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      <b>Diego Saucedo, 85</b>
      <br>
      Diego and his wife grew vegetables
      <br>on a farm in Guatemala. They had always <br>
      been poor and <b>never considered immigrating.</b>
      
    </div>
  </div>


  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Alison_Valiente_El Salvador_F_14_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      <b>Alison, Valiente, 20 </b><br>
      Alison came to the U.S. as a child 
      <br> and settled in 2014 after <br>
       <b>gangs targeted her family. </b>
      
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Fernanda_Levin_El Salvador_F_27_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      <b>Fernanda, 27 </b> <br>
      Fernanda <b>fled violence and persecution </b> in  <br>
      El Salvador. She undertook a perilous  <br>
       journey to seek safety in the US.<br>
        
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Mercedes_Garcia_El Salvador_F_58_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      <b>Mercedes garcia, 58 (then 25)</b>  <br>
      Mercedes left El Salvador in the 1990s with<br>
        her son and husband to <b>escape the civil  <br>
       war </b> that had been going on for 10 years.
      
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Javier_Zamora_El Salvador_M_9_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      <b>Javier Zamora, 29 (then 9) </b><br>
      Javier left at the age of 9 with his grandparents 
      <br>
      to <b>reunite with his parents in the US </b>. Life in
      <br>
       the US, however, is not challenge-free.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Tomas_Gueverra_El Salvador_M_41_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      <b>Tomas Gueverra, 41 (then 18)</b>
      <br>
      Tomas left El Salvador in 1999, a year after  <br>
      <b>Hurricane Mitch </b>, which killed thousands of people.<br>
      Now, he faces risks of deportation. 
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Carlos_Castro_El Salvador_M_68_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
    <b>Carlos Castro, 68 (then 25) </b><br>
    Carlos left El Salvador when he was 25  <br>
    yearsold due to the <b>civil war </b>and found 
    <br> a new home in Virginia, US.

      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Fernanda_Jacqueline Davila_Honduras_F_2_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
     <b>Fernanda Jacqueline Davila, 2 </b> <br>
      Fernanda was separated from her grandmother <br>
      after their arrival in the U.S. from Honduras. <br>
      She lived in <b>shelters and temporary foster care.</b>

      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Jessica_Orellana_Honduras_F_30_bw.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      <b> Jessica Orellana, 30 <br> </b>
      Jessica and her sons left Honduras after their house <br>
      was <b>destroyed by the hurricanes Eta and Iota.</b> They travelled <br>
      for over four months in the first migrant caravan of 2021.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Margarita_Ramirez_El Salvador_F_72_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
     <b> Margarita Ramirez, 72 </b> <br>
     Margarita fled for Mexico at 72 years old because<br>
      she was <b> threatened by murderous street gangs.</b>
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Oscar_Sanchez_Honduras_M_18_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      <b>Oscar Sanchez, 18 (then 17)<br></b>
      Oscar arrived in Texas and spent a month in a 
      <br>
      <b>pop-up detention center </b>until he turned 18 and  
      <br>
      reunited with his aunt and grandmother. 
      

      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Wilmer_Gerardo Nunez_Honduras_M_35_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
    <b>Wilmer Gerardo Nunez, 35<br></b>
    Wilmer left Honduras in 2010 due to <b>gang  <br>
    threats.</b> His mother has been waiting over 
    <br> eight years for him to come home.

    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Fredi_Juarez_Honduras_M_50_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      <b>Fredi Juarez, 51<br></b>
      Fredi left Honduras with his girlfriend in 2020 after <br>
      <b>back-to-back hurricanes destroyed his home.</b><br>
      He now resides in a tent at the migrant shelter.


      
    </div>
  </div>
</div>




<br />
<br />



<style>
.image-container {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  width: 100%; /* Set the width of the container to 100% */
  height: auto; 
}

  .image {
    width: 112.5px;
    height: 112.5px;
    margin-bottom: 15px; 
  }

  .tooltip-container {
    position: relative;
  flex-basis: calc(16.66% - 10px);
  }



  .tooltip {
    font-family: New York Times, Georgia, Times New Roman;
    visibility: hidden;
    position: absolute;
    padding: 10px 20px;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border: 1px solid black;
    color: black;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    white-space: nowrap;
    z-index: 1;
  }

  .image-container:hover .image:not(:hover) {
    opacity: 0.5;
  }

  .tooltip-container:hover .tooltip {
    visibility: visible;
  }

  .tooltip-container:hover .image {
    opacity: 1;
  }

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
   font-family: New York Times, Georgia, Times New Roman;
}

</style>
