app = new Vue({
    el: '#root',
    data: {
        dados: {},
        select: 'people',
        searchText: '',
    },
    methods: {
        search(){
            axios.get(`${APIBaseURL}${app.select}/?search=${app.searchText}`)
                .then( response => {
                    let object = response.data.results[0];
                    app.dados = object;
                    app.getRelatedObjects(object);
                });
        },
        isAnotherObject(key, value){
            if (value === null){
                return false;
            }
            if (value.constructor !== Array && value.constructor !== String){
                return false;
            }
            if( ( value.includes(APIBaseURL) && !key.includes('url') ) || value.constructor === Array ){
                return true;
            }
        },
        shouldRender(prop){
            if (prop === null){
                return false;
            }
            if (prop.constructor !== Object && prop.constructor !== Array){
                return true;
            }
        },
        showRelated(relatedProp){
            app.dados = relatedProp;
            app.getRelatedObjects(relatedProp);
        },
        getRelatedObjects(object){
            for(let index in object) {
                if (object.hasOwnProperty(index)) {
                    let attr = object[index];
                    if (app.isAnotherObject(index, attr)) {
                        if(attr.constructor === Array) {
                            app.dados[index] = [];
                            attr.forEach( function (attr) {
                                let obj = JSON.parse(sessionStorage.getItem(attr));
                                if(obj){
                                    app.dados[index].push(obj);
                                }
                                else {
                                    axios.get(attr).then(response => {
                                        app.dados[index].push(response.data);
                                        sessionStorage.setItem(attr, JSON.stringify(response.data));
                                    });
                                }
                            });
                        }
                        else{
                            let obj = JSON.parse(sessionStorage.getItem(attr));
                            if(obj){
                                app.dados[index] = obj;
                            }
                            else {
                                axios.get(attr).then(response => {
                                    app.dados[index] = response.data;
                                    sessionStorage.setItem(attr, JSON.stringify(response.data));
                                });
                            }
                        }
                    }
                }
            }
        },
    },
});