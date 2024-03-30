//Cat API ('https://api.thecatapi.com/v1/images/0XYvRd7oD')

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

//Fox API ('https://randomfox.ca/floof/')


async function getdata1() {
    try {
        const foxurl = 'https://randomfox.ca/floof/';
        const response = await fetch(foxurl);
        const dataDog = await response.json();
        const fox = dataDog.image;
        const link = dataDog.link
        const div = document.createElement("div")
        div.className = "cards"
        div.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src= ${fox} class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Fox</h5>
                        <p class="card-text"> fox link :<a href = "${link}"> Click Link <a> </p>
                </div>
                </div>`

        document.body.append(div)

    }
    catch (error) {
        console.error("Error:", error)
    }
}
getdata1()

async function getDogData() {
    try {
        const dogUrl = 'https://dog.ceo/api/breeds/image/random';
        const response = await fetch(dogUrl);
        const data = await response.json();
        const dogImg = data.message;

        const div = document.createElement("div");
        div.className = "cards";
        div.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${dogImg}" class="card-img-top" alt="Dog Image">
            <div class="card-body">
                <h5 class="card-title">Dog</h5>
                <p class="card-text">Click <a href="${dogImg}" target="_blank">here</a> to view image</p>
            </div>
        </div>`;

        document.body.append(div);
    } catch (error) {
        console.error("Error:", error);
    }
}

getDogData();



