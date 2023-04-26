<script>
	export let todos_text_all = "";
	import * as d3 from 'd3';
	import WordCloud from "svelte-d3-cloud";


    todos_text_all = 'good bad good hey not bad lala bad bad good'

    let words_freq_dict = freq_dict(todos_text_all);
	$: words_freq_dict = freq_dict(todos_text_all);

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

    console.log('wordi', words_freq_dict)

</script>


{#key words_freq_dict}
	<WordCloud words={words_freq_dict} width='500' font='Nunito'/>
{/key}

