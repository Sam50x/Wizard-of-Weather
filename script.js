const input = document.querySelector('#city')
const btn = document.querySelector('#city-btn')
const weatherContainer = document.querySelector('.weather-container')


btn.addEventListener('click', async () =>{
    let city = input.value
    if (city === ''){
        alert('WE NEED A CITY TO SEARCH FOOOOOR!!')
    }
    else{
        try{
            const apiKey = 'e04622e2baf54f12bfa103855241308'
            let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`)
            if (!response.ok) throw new Error('shit happens')
            else {
                let data = await response.json()
                display(data)
            }
        }
        catch(e){
            alert('no city with that name')
        }
    }
})

const display = (data) =>{
    const {location, current} = data

    weatherContainer.innerHTML = `<h2>${location.name}</h2>
                                 <p>Temperature: ${current.temp_c}C</p>
                                 <p>Weather: ${current.condition.text}</p>`
}