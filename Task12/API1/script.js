async function getdata() {
    try {
        const url = 'https://api.thecatapi.com/v1/images/0XYvRd7oD';
        const response = await fetch(url);
        const data = await response.json();
        const img = data.url
        const description = data.breeds[0].description
        const origin = data.breeds[0].origin
        const lifespan = data.breeds[0].life_span
        let div = document.createElement("div")
        div.className = "cards"
        div.innerHTML = `<div class="card" style="width: 18rem ;">
            <img src= ${img} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Abyssinian Cat</h5>
                    <p class="card-text">description : ${description}</p> 
                    <p class="card-text">Origin : ${origin} </p>
                    <p class="card-text">LifeSpan : ${lifespan} </p>

                </div>
        </div>`
        document.body.append(div)
    } catch (error) {
        console.error("Error:", error);
    }

}

getdata();