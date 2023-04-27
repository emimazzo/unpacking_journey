<script>
	import * as d3 from 'd3';
	import WordCloud from "svelte-d3-cloud";
	import { response2 } from './store.js'



let words_freq_dict_response2 = freq_dict($response2);

$: words_freq_dict_response2 = freq_dict($response2);

function freq_dict(todos_text_all2) {
		var freq = todos_text_all2.split(' ').reduce(function(p, c) {
			p[c] = (p[c] || 0) + 1;
			return p;
		}, {});
		var freq_dict2 = Object.keys(freq).map(function(key) {
			return { text: key, count: freq[key] };
		});

		return freq_dict2
    }

    console.log('wordi', words_freq_dict_response2)

</script>


<div >
    {#key words_freq_dict_response2}
            <WordCloud words={words_freq_dict_response2} 
			font='Nunito'
			width = "300"/>
    {/key}
</div>
