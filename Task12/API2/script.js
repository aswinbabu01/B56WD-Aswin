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