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

<h1>GO BACK AND CHANGE PICTURES!!</h1>

<p>
  El Salvador, Honduras, and Guatemala are three of the countries that see most
  migrants flee. All three countries, which are often referred as the Northern
  Triangle, are some of the poorest in the Western Hemisphere, with high rates
  of violence and conflict driving emigration.
  <br /> Hover over the images to learn more about each of the three countries and,
  when you are ready, choose one of them as the country of origin for the story.
</p>

<div class="image-container">
  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of El Salvador"
      
      class="image" />
    <div class="tooltip">
IMAGE 1
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 2
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Honduras"
      class="image"
    />
    <div class="tooltip">
IMAGE 3
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 4
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 5
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 6
    </div>
  </div>


  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 7
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
IMAGE 9
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 10
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 11
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 12
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 13
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Map of Guatemala"
      class="image"
    />
    <div class="tooltip">
IMAGE 14
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
