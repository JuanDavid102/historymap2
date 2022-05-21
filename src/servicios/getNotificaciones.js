
export function getNotificaciones () { 

    const apiURL = `http://127.0.0.1:8000/api/notificaciones`;
    console.log(apiURL)
    //Usamos la ID pasada por parámetro.
    let token;
    if (localStorage.getItem('userToken') !== null){
      token = JSON.parse(localStorage.getItem("userToken")).token_type+" "+JSON.parse(localStorage.getItem("userToken")).access_token
    } else {
      token = ""
    }
  
    return fetch(apiURL, {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        const data = response.json();
        console.log(data)
        return data;
    })
  }