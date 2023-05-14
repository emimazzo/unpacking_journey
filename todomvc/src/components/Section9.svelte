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
  of other migrants that you might have encountered if you had made different choices. You can also <b>click on
  the names </b> to learn more about the stories! 
  <br>
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
      <b><a href="https://www.elpasotimes.com/in-depth/news/2020/12/10/immigration-guatemala-migrant-father-el-paso-detention-center/3772406001/" target="_blank">Melissa Sical, 10</a></b>
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
      <b><a href="https://www.latimes.com/world-nation/story/2021-06-04/guatemalan-lives-are-thrown-into-upheaval-by-failed-immigration-bids" target="_blank">Alvina Jerónimo Pérez, 42</a></b>
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
     <b><a href="https://www.npr.org/2018/09/19/649300559/a-guatemalan-village-tells-the-story-of-immigration-to-the-u-s" target="_blank">Natividad Galicia, 79</a></b>

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
      <b><a href="https://www.youtube.com/watch?app=desktop&v=pXZ914J6yDU" target="_blank">Bacilio Miguel, 16 </a></b>

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
     <b> </b>
     <b><a href="https://www.npr.org/2018/09/19/649300559/a-guatemalan-village-tells-the-story-of-immigration-to-the-u-s" target="_blank">Oscar Lopez, 32 </a></b>

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
      <b><a href="https://www.npr.org/2018/09/19/649300559/a-guatemalan-village-tells-the-story-of-immigration-to-the-u-s" target="_blank"> Diego Saucedo, 85 </a></b>
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
      <b><a href="https://www.dallasnews.com/news/immigration/2021/06/17/this-garland-immigrant-fled-violence-in-el-salvador-now-she-tells-her-story-for-world-refugee-day/" target="_blank"> Alison, Valiente, 20 </a></b>
      <br>
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
      <b><a href="https://www.rescue.org/article/trans-womans-journey-el-salvador-united-states" target="_blank"> Fernanda, 27  </a></b>
      <br>
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
      <b><a href="https://www.postindependent.com/news/local/immigrant-stories-escaping-civil-war-in-el-salvador/" target="_blank"> Mercedes garcia, 58 (then 25)  </a></b>
      <br>
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
      <b><a href="https://www.latimes.com/entertainment-arts/books/story/2022-09-15/javier-zamora-on-his-harrowing-journey-from-el-salvador-to-the-u-s-at-age" target="_blank"> Javier Zamora, 29 (then 9) </a></b>
      <br>
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
      <b><a href="https://www.nytimes.com/2019/01/05/neediest-cases/immigrants-el-salvador-irc.html" target="_blank"> Tomas Gueverra, 41 (then 18) </a></b>

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
    <b><a href="https://iir.gmu.edu/immigrant-stories-dc-baltimore/el-salvador/el-salvador-summary-of-interview-with-carlos-castro" target="_blank"> Carlos Castro, 68 (then 25) </a></b>
      <br>
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
     <b><a href="https://www.nytimes.com/2018/10/25/us/migrant-honduras-family-separation.html" target="_blank"> Fernanda Jacqueline Davila, 2  </a></b>
      <br>
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
      <b><a href="https://latinarepublic.com/2021/05/17/in-her-shoes-stories-of-migrant-women/" target="_blank"> Jessica Orellana, 30  </a></b>
      <br>
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
     <b><a href="https://www.unhcr.org/news/stories/elderly-and-run-el-salvadors-street-gangs" target="_blank"> Margarita Ramirez, 72   </a></b>
     <br>
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
      <b><a href="https://www.keranews.org/news/2021-06-18/relief-and-remorse-for-mom-hope-and-renewal-for-her-son-an-immigrant-teen-on-why-he-fled-to-u-s" target="_blank"> Oscar Sanchez, 18 (then 17) </a></b>
        <br>
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
    <b><a href="https://learningenglish.voanews.com/a/from-honduras-to-the-us-a-migrant-story/4686817.html" target="_blank"> Wilmer Gerardo Nunez, 35 </a></b>
      <br>
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
      <b><a href="https://apnews.com/article/storms-mexico-honduras-climate-and-environment-2f3d094582bee139a9225d6abd5681ca" target="_blank"> Fredi Juarez, 51 </a></b>
      <br>
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
