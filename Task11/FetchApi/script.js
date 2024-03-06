// Function to fetch data and update the DOM
async function fetchData() {
  const API_KEY = '37835f2db19f3415a4913b5487a1cd73';
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'
    );
    const data = await response.json();

    data.forEach((item) => {
      const parentContainer = document.getElementById('container');
      const containerElement = document.createElement('div');
      const countryNameElement = document.createElement('p');
      const countryFlagElement = document.createElement('img');
      const countryCapElement = document.createElement('p');
      const countryRegionElement = document.createElement('p');
      const countryCodeElement = document.createElement('p');
      const countryWeatherCheckButton = document.createElement('button');
      countryWeatherCheckButton.onclick = async function (event) {
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${item?.latlng[0]}&lon=${item?.latlng[1]}&appid=${API_KEY}`
        );
        const weatherRes = await weatherResponse.json();
        const countryWeather = document.createElement('p');
        const countryWeatherDesc = document.createElement('p');
        countryWeather.className = 'text-light mb-1';
        countryWeatherDesc.className = 'text-light mb-1';
        countryWeather.textContent = `Weather: ${weatherRes?.weather[0]?.main}`;
        countryWeatherDesc.textContent = `Weather description: ${weatherRes?.weather[0]?.description}`;
        containerElement.appendChild(countryWeather);
        containerElement.appendChild(countryWeatherDesc);
      };
      countryWeatherCheckButton.className = 'btn btn-outline-light my-2';
      countryWeatherCheckButton.textContent = 'click for weather';
      containerElement.className = 'd-flex flex-column align-items-center border mx-2 my-2 w-25 bg-dark';
      countryNameElement.className = 'h5 py-2 w-100 text-center bg-black text-light';
      countryCapElement.className = 'text-light my-1';
      countryRegionElement.className = 'text-light mb-1';
      countryCodeElement.className = 'text-light my-0';
      countryFlagElement.className = 'img-thumbnail w-50';
      countryFlagElement.src = item?.flag;
      countryFlagElement.alt = item?.name;
      countryCapElement.textContent = `Capital: ${item?.capital}`;
      countryNameElement.textContent = item?.name;
      countryRegionElement.textContent = `Region: ${item?.region}`;
      countryCodeElement.textContent = `Country Code: ${item?.alpha3Code}`;
      containerElement.appendChild(countryNameElement);
      containerElement.appendChild(countryFlagElement);
      containerElement.appendChild(countryCapElement);
      containerElement.appendChild(countryRegionElement);
      containerElement.appendChild(countryCodeElement);
      containerElement.appendChild(countryWeatherCheckButton);
      parentContainer.appendChild(containerElement);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function
fetchData();
