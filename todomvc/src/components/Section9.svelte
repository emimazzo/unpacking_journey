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
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
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
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Honduras"
      class="image"
    />
    <div class="tooltip">
      Natividad Galicia, 79
      <br>
      Natividad Galicia and her husband grow corn 
      <br>
      and broccoli on a farm in western Guatemala.
      <br> They've always been poor and never considered immigrating.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
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
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
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
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Maribel, 14
      <br>
      Maribel was 14 when she was raped by members 
      <br>
      of the Maras gang and threatened with death if 
      <br>
      she told anyone. Despite her mother's attempts 
      <br>
      to seek help from the police, they receive no protection
      <br>
      from the gang's threats and violence. The family decides 
      <br> to leave their country and migrate to the
      <br> United States in search of safety.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 8
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Guadalupe De Los Ángeles, 54 <br>
      Guadalupe De Los Ángeles was born in San Salvador <br>
      in 1969 and immigrated to California when she was 19 <br>
      years old in search of better opportunities. She had a <br>
      difficult journey and felt scared and alone, but eventually<br>
       settled in, learned English, got a job, and met her husband.
       <br>
        She still holds onto her Salvadoran roots and occasionally
        <br> cooks food from different cultures, but feels grateful
        <br> for the decisions she made and the successful life 
        <br>she has built in the US.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
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
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
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
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Francisco Lopez, 54  <br>
      Francisco, now 54, left El Salvador at the ripe age of 22, <br>
       due to the Civil war from 1978 to 1996, leaving his family behind.  <br>
       He fled to the United States in hopes for a better livelihood.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
      Debora Castillo, 17<br>
      Debora Castillo lost two children during childbirth.<br>
       Honduras has an infant mortality rate over three times that of the U.S.
      
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
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
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 15
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 16
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 17
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 18
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
