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