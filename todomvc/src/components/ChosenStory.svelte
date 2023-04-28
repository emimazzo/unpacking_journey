<script>
    import { country, age, gender, chosen_story } from './store.js'
  
    // GUATEMALA FEMALES
    $: if ($country === "Guatemala" && $age === '0-19' && $gender === 'Female') {
      chosen_story.set(1)
      console.log('CHOSEN STORY', $chosen_story)
    }
  
    $: if ($country === "Guatemala" && $age === '20-49' && $gender === 'Female') {
      chosen_story.set(2)
      console.log('CHOSEN STORY', $chosen_story)
    }
      
    $: if ($country === "Guatemala" && $age === '50+' && $gender === 'Female') {
      chosen_story.set(3)
      console.log('CHOSEN STORY', $chosen_story)
    }

    // GUATEMALA MALES
        $: if ($country === "Guatemala" && $age === '0-19' && $gender === 'Male') {
      chosen_story.set(4)
      console.log('CHOSEN STORY', $chosen_story)
    }
  
    $: if ($country === "Guatemala" && $age === '20-49' && $gender === 'Male') {
      chosen_story.set(5)
      console.log('CHOSEN STORY', $chosen_story)
    }
      
    $: if ($country === "Guatemala" && $age === '50+' && $gender === 'Male') {
      chosen_story.set(6)
      console.log('CHOSEN STORY', $chosen_story)
    }


/////////////


    // EL SALVADOR FEMALES
        $: if ($country === "El Salvador" && $age === '0-19' && $gender === 'Female') {
      chosen_story.set(7)
      console.log('CHOSEN STORY', $chosen_story)
    }
  
    $: if ($country === "El Salvador" && $age === '20-49' && $gender === 'Female') {
      chosen_story.set(8)
      console.log('CHOSEN STORY', $chosen_story)
    }
      
    $: if ($country === "El Salvador" && $age === '50+' && $gender === 'Female') {
      chosen_story.set(9)
      console.log('CHOSEN STORY', $chosen_story)
    }

    // EL SALVADOR MALES
        $: if ($country === "El Salvador" && $age === '0-19' && $gender === 'Male') {
      chosen_story.set(10)
      console.log('CHOSEN STORY', $chosen_story)
    }
  
    $: if ($country === "El Salvador" && $age === '20-49' && $gender === 'Male') {
      chosen_story.set(11)
      console.log('CHOSEN STORY', $chosen_story)
    }
      
    $: if ($country === "El Salvador" && $age === '50+' && $gender === 'Male') {
      chosen_story.set(12)
      console.log('CHOSEN STORY', $chosen_story)
    }

/////////////


    // HONDURAS FEMALES
    $: if ($country === "Honduras" && $age === '0-19' && $gender === 'Female') {
      chosen_story.set(13)
      console.log('CHOSEN STORY', $chosen_story)
    }
  
    $: if ($country === "Honduras" && $age === '20-49' && $gender === 'Female') {
      chosen_story.set(14)
      console.log('CHOSEN STORY', $chosen_story)
    }
      
    $: if ($country === "Honduras" && $age === '50+' && $gender === 'Female') {
      chosen_story.set(15)
      console.log('CHOSEN STORY', $chosen_story)
    }

    // HONDURAS MALES
        $: if ($country === "Honduras" && $age === '0-19' && $gender === 'Male') {
      chosen_story.set(16)
      console.log('CHOSEN STORY', $chosen_story)
    }
  
    $: if ($country === "Honduras" && $age === '20-49' && $gender === 'Male') {
      chosen_story.set(17)
      console.log('CHOSEN STORY', $chosen_story)
    }
      
    $: if ($country === "Honduras" && $age === '50+' && $gender === 'Male') {
      chosen_story.set(18)
      console.log('CHOSEN STORY', $chosen_story)
    }



    // //// UPDATING IMAGE COLORS
    // var myImage1 = document.getElementById("image1");

    // if ($chosen_story === 1) {
    //   myImage1.style.opacity = 1;
    // }
     
  </script>
  