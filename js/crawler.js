crawler = new Vue({
	el: "#root",
	data: {
		movie: {},
        isActive: false,
	},
	methods: {
		getMovie(url){
            let obj = JSON.parse(sessionStorage.getItem(url));
            if(obj){
                crawler.movie = obj;
            }
            else {
                axios.get(url).then(response => {
                    crawler.movie = response.data;
                    crawler.movie.episode_id = crawler.toRoman(crawler.movie.episode_id);
                    sessionStorage.setItem(url, JSON.stringify(response.data));
                });
            }
            crawler.isActive = true;
		},
		toRoman(num){
			let result = '';
			const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
			const roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
			for (let i = 0; i<=decimal.length; i++) {
				// looping over every element of our arrays
				while (num%decimal[i] < num) {
					// keep trying the same number until it won't fit anymore
					result += roman[i];
					// add the matching roman number to our result string
					num -= decimal[i];
					// remove the decimal value of the roman number from our number
				}
			}
			return result;
		},
	}
});