


const getImagen = async() => {

    try{
        const apiKey = 'DG87zCTVi9Z8Wbn3ogwOAGWlviA9PKP8'; //Key obtenida al darnos de alta en GIPHY Developers
        const tag = 'car'; //Tag que le pasamos en la url para obtener gif de una tematica concreta
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`);

        const {data} = await resp.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    }catch (error){
        console.error(error);
    }
    
}

getImagen();


// const apiKey = 'DG87zCTVi9Z8Wbn3ogwOAGWlviA9PKP8'; //Key obtenida al darnos de alta en GIPHY Developers
// const tag = 'fitness'; //Tag que le pasamos en la url para obtener gif de una tematica concreta
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`);

// peticion
//     .then( resp => resp.json()) //Obtenemos el json de la respuesta en forma de promise, por eso concatenamos otro then de la promesa que obtenemos
//     .then( ({ data }) =>{
//         //console.log(data.images.original.url)
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );
//     })
//     .catch( console.warn );