<script>
    // import { loop_guard } from 'svelte/internal';
    import { country, age, gender, chosen_story} from './store.js'




if ($country === "Guatemala" && $age === '50+' && gender === 'Female') {
    chosen_story.set(1)
    console.log('CHOSEN STORY',chosen_story)
}


</script>