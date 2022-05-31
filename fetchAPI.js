const url = 'https://api.github.com/users'


//----------------------fetch style jutsu form 1 -------------

// function getAPI() {
//     let promise = fetch(url);
//     promise.then(gotData);
//     promise.catch(gotErr)
// }

// function gotData(data) {
//     console.log(data)
// }

// function gotErr(err) {
//     console.log(err)
// }

//getAPI()



//----------------------fetch style jutsu form 2 -------------
// fetch(url)
//     .then(function (data) {
//         console.log(data)
//     })
//     .catch(function (err) {
//         console.log(err)
//     });


//----------------------fetch style jutsu form 3 -------------

// fetch(url)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//Fetch api return a promise and promise is an object so to get the

//Now if I want a specific data from the api so
//if I do this .then((data) => console.log(data.login)) --> this will thrown an error.
//To overcome this we get the response in json format.


//----------------------fetch style jutsu form 4 -------------

// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))


//----------------------fetch style jutsu form 5 passing function to response -------------

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

function creatP(json) {
    const p = document.getElementById('p');

    for (let i = 0; i < json.length; i++) {
        p.innerHTML = json.login;
    }

}