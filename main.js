 const champText = document.getElementById("champ");
 const contendText = document.getElementById("contend");
 const champBtn = document.getElementById("champBtn");
 const contendBtn = document.getElementById("contendBtn");

 champBtn.addEventListener("click", generateChamp)
 contendBtn.addEventListener("click", generateContend)

 generateChamp()
 generateContend()

 async function generateChamp(){
     const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon/'
     )
     const data = await res.json();
     console.log(data)

   let items = [1,2,4,6,8,10,11,12,13,14,15,16,17,18,19,20]
   let i = items[Math.floor(Math.random() * items.length)];
     console.log(data.results[i].name); 
//      let address = ''
//     // if (data.address == undefined) {
//     // address = 
//     // } else {
//     //     address = data.address
//     // }
champText.innerHTML = "You chose: " +  data.results[i].name.toUpperCase();
    
}

async function generateContend(){
    const res = await fetch(
       'https://pokeapi.co/api/v2/pokemon/'
    )
    const data = await res.json();
    console.log(data)

    let items = [1,2,4,6,8,10,11,12,13,14,15,16,17,18,19,20]
    let i = items[Math.floor(Math.random() * items.length)];
      console.log(data.results[i].name);
//      let address = ''
//     // if (data.address == undefined) {
//     // address = 
//     // } else {
//     //     address = data.address
//     // }
contendText.innerHTML = "You chose: " + data.results[i].name.toUpperCase();
   
}

// let mewtwo = 150

// const url = `https://pokeapi.co/api/v2/pokemon/${mewtwo}`;

// fetch(url)
//     .then(res => res.json())
//     .then(pokemon => {
//         console.log(pokemon);
//     });

