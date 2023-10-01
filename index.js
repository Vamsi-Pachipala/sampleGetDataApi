
//https://gauravgitacc.github.io/postAppData/auctionData.json

// let prom=fetch("https://gauravgitacc.github.io/postAppData/auctionData.json");

// prom.then((resposePromise)=>{

//     let result=resposePromise.json();

//     result.then((data)=>{

//         console.log(data);
//     })

// })


async function getData() {
    try {
        let Data = await fetch("https://gauravgitacc.github.io/postAppData/auctionData.json");
        let result = await Data.json();
        appendintoUI(result);
    }
    catch (error) {
        console.log(error);
    }
}
let cardsContainer = document.getElementsByClassName("cards-container")['0'];
function appendintoUI(dataList) {
    for (let i = 0; i < dataList.length; i++) 
    {
        let card = document.createElement("div");
        card.className = "card";
        let eachCard=dataList[i];
        let status=dataList[i].status.toLowerCase();
        console.log(status);
        card.innerHTML = `
    <div class="top">
             <div class="status">
                 <b class = ${status} class="status-chip">${dataList[i].status}</b>
                 <span class="case-number">${dataList[i].caseNumber}</span>
             </div>
             <span>${dataList[i].date}</span>
    </div>
    <div class="lower">
             <span class="to">${dataList[i].fromLocation}</span>
             <span class="from">${dataList[i].toLocation}</span>
     </div>
    <span class="ruppe">${dataList[i].fare}</span>

     `
     cardsContainer.append(card);
    }
}
getData();
/*
 <div class="card">
            <div class="top">
                <div class="status">
                    <b class="status-chip" class="$">APPROVED</b>
                    <span class="case-number">12345478</span>
                </div>
                <span>Mar 24, 2023,5:03:24 PM</span>
            </div>
            <div class="lower">
                <span class="to">Kambhampadu A.koduru</span>
                <span class="from">
                    KHB Colony,Hyderabad Nagar,Andhra Pradesh Vamsi
                </span>
            </div>
            <span class="ruppe">₹ 100</span>
            
  </div>

  
: 
caseNumber
: 
"S230SKAN"
date
: 
"Mar 24, 2023, 5:03:24 PM"
fare
: 
"₹ 0"
fromLocation
: 
"Bellenduru spike lake"
status
: 
"APPROVED"
toLocation
: 
"KHB Colony, Basaveshwar Nagar, Bengaluru, Karnataka, India"

:
*/
