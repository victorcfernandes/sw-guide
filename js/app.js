app = new Vue({
    el: '#root',

    data: {
        dados: {},
        select: 'people',
        searchText: '',
    },
    methods: {
        search(){
            axios.get(`${APIBaseURL}${this.select}/?search=${this.searchText}`)
                .then( response => {
                    let object = response.data.results[0];
                    this.dados = object;
                    for(let index in object) {
                        if (object.hasOwnProperty(index)) {
                            let attr = object[index];
                            if (app.isAnotherObject(index, attr)) {
                                if(attr.constructor === Array) {
                                    app.dados[index] = [];
                                    attr.forEach( function (attr) {
                                        axios.get(attr).then(response => app.dados[index].push(response.data))
                                        }
                                    );
                                }
                                else{
                                    axios.get(attr).then(response => this.dados[index] = response.data);
                                }
                            }
                        }
                    }
                });
        },
        isAnotherObject(key, value){
            if (value.constructor !== Array && value.constructor !== String){
                return false;
            }
            if( ( value.includes(APIBaseURL) && !key.includes('url') ) || value.constructor === Array ){
                return true;
            }
        },
        shouldRender(prop){
            if (prop.constructor !== Object && prop.constructor !== Array){
                return true;
            }
        }
    },

mounted(){
},
});