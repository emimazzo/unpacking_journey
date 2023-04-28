<script>
	// export let todos_text_all = "";
	import * as d3 from 'd3';
	import WordCloud from "./WordCloud.svelte";
	import { response1 } from './store.js'
	// import { response2 } from './store.js'


let words_freq_dict_response1 = freq_dict($response1);
// let words_freq_dict_response2 = freq_dict($response2);
$: words_freq_dict_response1 = freq_dict($response1);
// $: words_freq_dict_response2 = freq_dict($response2);
$: console.log("On change:", words_freq_dict_response1);

function freq_dict(todos_text_all) {
		var freq = todos_text_all.split(' ').reduce(function(p, c) {
			p[c] = (p[c] || 0) + 1;
			return p;
		}, {});
		var freq_dict = Object.keys(freq).map(function(key) {
			return { text: key, count: freq[key] };
		});

		return freq_dict
    }

    console.log('wordi', words_freq_dict_response1)

</script>


<div >
    {#key words_freq_dict_response1}
            <WordCloud words={words_freq_dict_response1} 
			id={"wordcloud-1"}
			font='Nunito'
			width = "300"/>
    {/key}
</div>
