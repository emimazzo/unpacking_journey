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
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images/el%20salvador.png"
      alt="Map of El Salvador"
      
      class="image"
      data-tooltip="Population: 6.29 million, Number of Migrants leaving in 2020: 1,599,058, Average Yearly Salary in USD 2020: $3,740, GDP: $26.88 billion"
    />
    <figcaption>El Salvador</figcaption>
    <div class="tooltip">
IMAGE 1
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images/guatemala.png"
      alt="Map of Guatemala"
      class="image"
      data-tooltip="Population: 16.86 million, Number of Migrants leaving in 2020: 1,368,431, Average Yearly Salary in USD 2020: $4,490, GDP: $77.63 billion"
    />
    <figcaption>Guatemala</figcaption>
    <div class="tooltip">
IMAGE 2
    </div>
  </div>

  <div class="tooltip-container">
    <img
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images/hondur.png"
      alt="Map of Honduras"
      class="image"
      data-tooltip="Population: 10.12 million, Number of Migrants leaving in 2020: 985,077,  Average Yearly Salary in USD 2020: $2,150 , GDP: $23.3 billion"
    />
    <figcaption>Honduras</figcaption>
    <div class="tooltip">
IMAGE 3
    </div>
  </div>
</div>

<br />
<br />



<style>
  .image-container {
    display: flex;
    justify-content: space-between;
  }

  .image {
    width: 150px;
    height: 150px;
    margin-right: 10px;
  }

  .tooltip-container {
    position: relative;
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
