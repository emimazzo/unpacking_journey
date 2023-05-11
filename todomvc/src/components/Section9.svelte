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

<h1>Voices Unheard: The Plurality of Stories That Remain to Be Told</h1>

<p>
  Even though you just learned about a particular story that matched your original choices,
   many more stories still remain to be told. 
  Take a moment to hover over the images below and discover a glimpse of the diverse experiences 
  of other migrants that you might have encountered if you had made different choices. 
  Each of these stories has its own unique perspective, challenges, and triumphs, offering 
  an insightful view of the migrant experience.
</p>

<div class="image-container">
  <div class="tooltip-container">
    <img
    src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Guatemala_F_10.jpg"
    alt="Map of El Salvador"
      
      class="image" />
    <div class="tooltip">
      Melissa Sical, 10
      <br>
      Melissa and her father traveled to the U.S. 
      <br>
       border during the summer of 2019, where they 
       <br>were subjected to the Migrant Protection Protocols
       <br> and required to wait in Juárez two months 
       <br>for a U.S. court hearing.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Alvina_Jeronimo_Perez_Guatemala_F_42_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Alvina Jerónimo Pérez, 42
      <br>
      Alvina Jerónimo Pérez and her husband shell 
      <br>
      homegrown beans at their home in Tizamarte, Guatemala. 
      <br>Jerónimo made a failed attempt to migrate 
      <br>last year to the U.S. in part to pay off a
      <br> loan on their single-story, concrete-block house.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Natividad_Galicia_Guatemala_F_79_color.jpg"
      alt="Map of Honduras"
      class="image"
    />
    <div class="tooltip">
      Natividad Galicia, 79
      <br>
      Natividad Galicia and her husband grow corn 
      <br>
      and broccoli on a farm in western Guatemala.
      <br> They've always been poor and never <br>
      considered immigrating.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Bacilio_Miguel_Guatemala_M_16_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Bacilio Miguel, 16
      <br>
      Bacilio Miguel immigrated to the U.S. from 
      <br>
      Guatemala with his family in 2016. In July 2019, 
      <br>
      his family's application for U.S. residency was 
      <br>
      rejected and they are currently appealing their case. 
      <br>
      Miguel hopes to attend college in Oregon, where he 
      <br>
      and his family currently live.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
    src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Guatemala_M_32.jpg"
    alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Oscar Lopez, 32
      <br>

      Guatemalan farmer Oscar Lopez stands next 
      <br>to his corn crop. Stunted by drought, the corn
      <br> should be as high as Lopez. If he loses his
      <br>crop, he will lose his income.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Diego_Saucedo_Guatemala_M_85_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Diego Saucedo, 85
      <br>
      Diego Saucedo and his wife grow corn and broccoli 
      <br>on a farm in western Guatemala. They've always <br>
      been poor and never considered immigrating.
      
    </div>
  </div>


  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Alison_Valiente_El Salvador_F_14_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Alison, Valiente, 20<br>
      Alison Valiente came to the U.S. and settled in Texas <br>
      in 2014 after gangs targeted her family. Today, she is a<br>
       college graduate, and working professional.
      
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Fernanda_Levin_El Salvador_F_27_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Fernanda, 27 <br>
      Fernanda, a 27 year old trans woman, fled<br>
       violence and persecution in El Salvador. <br>
       She undertook a perilous journey to seek safety<br>
        in the United States, where she faced further <br>
        challenges but ultimately found a supportive community.
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Mercedes_Garcia_El Salvador_F_58_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Mercedes garcia, 58 (then 25) <br>
      In the 1990s, Mercedes Garcia (then 25) left El Salvador<br>
       in with her son and husband to escape the civil war that had <br>
       been going on for 10 years. Since then, their family
       <br> has made the US their home. 
      
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Javier_Zamora_El Salvador_M_9_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Javier Zamora, 29 (Immigrated at age 9)<br>
      Javier left at the age of 9 with his grandparents 
      <br>
      to reunite with his parents in the United States. 
      <br>
      He remembers his life back in El Salvador running 
      <br>
      through cornfields and compares it to his present,
      <br> where life in the United States is not as luxurious 
      <br>as he first thought it was.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Tomas_Gueverra_El Salvador_M_41_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Tomas Gueverra, 41
      <br>
      Tomas Gueverra left El Salvador in 1999, at age 18, <br>
      thinking there were few opportunities for him at home. <br>
      His country had been a casualty the year before of Hurricane Mitch, <br>
      which decimated Central America, leaving more than 10,000 dead, and he<br>
       currently faces risks of deportation. 
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Carlos_Castro_El Salvador_M_68_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Carlos Castro, 68<br>
    Carlos Castro at age 25 left El Salvador due to the civil war <br>
    and built a life in Northern Virginia based on his core values <br>
    of hard work, integrity, and helping others.

      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Fernanda_Jacqueline Davila_Honduras_F_2_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Fernanda Jacqueline Davila, 2<br>
      Fernanda Jacqueline Davila was separated from her grandmother after <br>
      their arrival in the U.S. from Honduras. She was among more than 100 <br>
      children separated from their families that were living in shelters <br>
      and temporary foster care.

      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Jessica_Orellana_Honduras_F_30_bw.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Jessica Orellana, 30 <br>
      Jessica Orellana and her sons traveled for over four<br>
       months since fleeing Honduras in the first migrant caravan of 2021. <br>
       Their house was destroyed by the hurricanes Eta and Iota.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Margarita_Ramirez_El Salvador_F_72_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Margarita Ramirez, 72<br>
      Threatened by murderous street gangs, Margarita <br>
      Ramirez fled for Mexico where she is starting over at 72. 
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Oscar_Sanchez_Honduras_M_18_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Oscar Sanchez, 18<br>
      In March, Oscar Sanchez arrived in Texas, homeless <br>
      and parentless. In April, the Honduran turned 18, the legal <br>
      adult age, and he was released from a pop-up detention center in <br>
      Dallas and united with his aunt and grandmother in Indianapolis.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Wilmer_Gerardo Nunez_Honduras_M_35_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Wilmer Gerardo Nunez, 35<br>
    Wilmer Gerardo Nunez left Honduras for the United States in 2010. <br>
    He was 35 years old. He left his home because of gang threats, <br>
    just as thousands of other people have done. His mother has been <br>
    waiting over eight years for him to come home.

    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Fredi_Juarez_Honduras_M_50_color.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Fredi Juarez, 51<br>
      After back-to-back hurricanes destroyed his home in Honduras in 2020,<br>
       Fredi Juarez and his girlfriend joined the millions of people who fled<br>
        due to rising seas, drought, searing temperatures and other <br>
        climate catastrophes. Juarez resides in a tent at a migrant 
        <br> shelter in the border city of Tijuana, Mexico.

      
    </div>
  </div>
</div>




<br />
<br />



<style>
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

  .image {
    width: 112.5px;
    height: 112.5px;
  }

  .tooltip-container {
    position: relative;
  flex-basis: calc(16.66% - 10px);
  }



  .tooltip {
    visibility: hidden;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    color: white;
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

</style>
