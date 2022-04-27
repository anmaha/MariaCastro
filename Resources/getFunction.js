

const getPics = () =>{

    url = 'https://jsonplaceholder.typicode.com/photos'

    fetch(url).then(response => response.json()).then(data => console.log(data){
        // get data
        data.forEach(photo =>{
            console.log(photo.url)
        } )
    } );
}