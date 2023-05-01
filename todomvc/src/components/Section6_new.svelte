<h1> Stories of Central American Migrants</h1>

<p> Now that you have made those selections, you are well on your
  way to understanding the journey of migrants.
  Given your choices of country of origin, age range, and gender, you have been matched with 
    the following migrant story. 
    Get ready to embark on a virtual migrant
      journey and gain a deeper appreciation for the experiences of those who have had to leave 
      their homes in search of hope and a better life.</p>



<div class="image-container">
    <img
      id = "image1"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Guatemala_F_10.jpg"
      alt = "Silhouette 1"
      class="image1" />



    <img
      id = "image2"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 2"
      class="image2"
    />



    <img
    id = "image3"    
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 3"
      class="image3"
    />


    <img
    id = "image4"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 4"
      class="image4"
    />


    <img
    id = "image5"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Guatemala_M_32.jpg"
      alt="Silhouette 5"
      class="image5"
    />

    <img
    id = "image6"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 6"
      class="image6"
    />


    <img
    id = "image7"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 7"
      class="image7"
    />


    <img
    id = "image8"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 8"
      class="image8"
    />

 
    <img
    id = "image9"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 9"
      class="image9"
    />

    <img
    id = "image10"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 10"
      class="image10"
    />

    <img
    id = "image11"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 11"
      class="image11"
    />


    <img
    id = "image12"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 12"
      class="image12"
    />

    <img
    id = "image13"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 13"
      class="image13"
    />


    <img
    id = "image14"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 14"
      class="image14"
    />


    <img
    id = "image15"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 15"
      class="image15"
    />

    <img
    id = "image16"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 16"
      class="image16"
    />


    <img
    id = "image17"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 17"
      class="image17"
    />


    <img
    id = "image18"
      src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
      alt="Silhouette 18"
      class="image18"
    />

</div>




<br />
<br />



<style>
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

  .image1 {
    width: 112.5px;
    height: 112.5px;
  }

  .image2 {
    width: 112.5px;
    height: 112.5px;
  }

  .image3 {
    width: 112.5px;
    height: 112.5px;
  }

  .image4 {
    width: 112.5px;
    height: 112.5px;
  }

  .image5 {
    width: 112.5px;
    height: 112.5px;
  }

  .image6 {
    width: 112.5px;
    height: 112.5px;
  }

  .image7 {
    width: 112.5px;
    height: 112.5px;
  }

  .image8 {
    width: 112.5px;
    height: 112.5px;
  }

  .image9 {
    width: 112.5px;
    height: 112.5px;
  }

  .image10 {
    width: 112.5px;
    height: 112.5px;
  }

  .image11 {
    width: 112.5px;
    height: 112.5px;
  }

  .image12 {
    width: 112.5px;
    height: 112.5px;
  }

  .image13 {
    width: 112.5px;
    height: 112.5px;
  }

  .image14 {
    width: 112.5px;
    height: 112.5px;
  }

  .image15 {
    width: 112.5px;
    height: 112.5px;
  }

  .image16 {
    width: 112.5px;
    height: 112.5px;
  }

  .image17 {
    width: 112.5px;
    height: 112.5px;
  }

  .image18 {
    width: 112.5px;
    height: 112.5px;
  }

  img {
    opacity: 0.3; /* set the opacity to a low value for all images */
  }

  
</style>





  <script>
    import { chosen_story } from './store.js'
  

  $: if ($chosen_story === 1){
    console.log('chose', $chosen_story)
      image1.style.opacity = '1'
  }
   else if ($chosen_story ===2){
    console.log('chose', $chosen_story)
      image2.style.opacity = '1'
  }

  else if ($chosen_story ===3){
    console.log('chose', $chosen_story)
      image3.style.opacity = '1'
  }

  else if ($chosen_story ===4){
    console.log('chose', $chosen_story)
      image4.style.opacity = '1'
  }

  else if ($chosen_story ===5){
    console.log('chose', $chosen_story)
      image5.style.opacity = '1'
  }

  else if ($chosen_story ===6){
    console.log('chose', $chosen_story)
      image6.style.opacity = '1'
  }

  else if ($chosen_story ===7){
    console.log('chose', $chosen_story)
      image7.style.opacity = '1'
  }

  else if ($chosen_story ===8){
    console.log('chose', $chosen_story)
      image8.style.opacity = '1'
  }

  else if ($chosen_story ===9){
    console.log('chose', $chosen_story)
      image9.style.opacity = '1'
  }

  else if ($chosen_story ===10){
    console.log('chose', $chosen_story)
      image10.style.opacity = '1'
  }

  else if ($chosen_story ===11){
    console.log('chose', $chosen_story)
      image11.style.opacity = '1'
  }

  else if ($chosen_story ===12){
    console.log('chose', $chosen_story)
      image12.style.opacity = '1'
  }

  else if ($chosen_story ===13){
    console.log('chose', $chosen_story)
      image13.style.opacity = '1'
  }

  else if ($chosen_story ===14){
    console.log('chose', $chosen_story)
      image14.style.opacity = '1'
  }

  else if ($chosen_story ===15){
    console.log('chose', $chosen_story)
      image15.style.opacity = '1'
  }

  else if ($chosen_story ===16){
    console.log('chose', $chosen_story)
      image16.style.opacity = '1'
  }

  else if ($chosen_story ===17){
    console.log('chose', $chosen_story)
      image17.style.opacity = '1'
  }

  else if ($chosen_story ===18){
    console.log('chose', $chosen_story)
      image18.style.opacity = '1'
  }



  </script>