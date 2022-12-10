var doorList = ["kapıkule kara ve demir yolu", 
         "ipsala kara yolu", 
         "uzunköprü demir yolu", 
         "aktaş kara yolu", 
         "dilucu kara yolu", 
         "gürbulak kara yolu", 
         "kapıköy kara ve demir yolu", 
         "habur kara yolu", 
         "nusaybin kara ve demir yolu", 
         "çobanbey kara ve demir yolu", 
         "canbaz kara ve demir yolu", 
         "zeytindalı kara yolu",
         "üzümlü"
];

var countryList = [
"bulgaristan", 
         "yunanistan",
         "yunanistan",
         "gürcistan", 
         "nahçivan", 
         "iran", 
         "iran",
         "ırak", 
         "suriye",
         "suriye",
         "gürcistan",
         "suriye",
         "ırak"

];

const wrongsList = [];
const doorListCopy = [];
const countryListCopy = [];

const labelNumberOfQues = document.getElementById("labelNumberOfQues");
const label = document.getElementById("quesLabel");
const inputAnswer = document.getElementById("inputAnswer");
const button = document.getElementById("button");
const labelResult = document.getElementById("labelResult");

document.getElementById("inputAnswer").autofocus;

doorList.map(country => {
    doorListCopy.push(country);
})

countryList.map(country => {
    countryListCopy.push(country);
})

const input = document.getElementById("inputAnswer");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
    }
});

function randomQues() {
    labelNumberOfQues.innerHTML = `Kalan soru sayısı: ${doorList.length}`;
    label.innerHTML = `${doorList[Math.floor(Math.random() * doorList.length)]}`;
}
randomQues();

button.addEventListener("click", buttonFunction);
function buttonFunction() {
if (doorList.length > 0) {
  
   if(countryList[doorList.indexOf(label.innerHTML)] == inputAnswer.value ) { 
        
        labelResult.innerHTML = "Doğru";
        inputAnswer.value = "";
        for(let i=0; i < doorList.length; i++) {
        if(doorList[i] == label.innerHTML){
            doorList.splice(i, 1);
            countryList.splice(i,1);
            } 
        }

        console.log(doorList);
        if(doorList.length > 0) {
            randomQues();
        }

        else if(doorList.length == 0) {
            
            let wrongsListAlert = `TEST TAMAMLANDI \n`;
            wrongsListAlert += `Yanlış Sayısı: ${wrongsList.length} \n` 
            
            for(let i = 0; i < wrongsList.length; i++){
                wrongsListAlert += `Soru: ${wrongsList[i]} -->`;
                wrongsListAlert += `Doğru Cevap: ${countryListCopy[doorListCopy.indexOf(wrongsList[i])]} \n`;
            }
            
            alert(wrongsListAlert);
        }
    }
    else {
    
        labelResult.innerHTML = "Yanlış";
        inputAnswer.value = "";
        console.log(doorList);
        
        if(wrongsList.indexOf(label.innerHTML) != -1) 
            console.log("Yanlışlar listesinde var");
        else {
            wrongsList.push(doorList[doorList.indexOf(label.innerHTML)]);   
        }
        console.log(wrongsList);
        randomQues();
    }
}
else {
   console.log("Listeye soru ekleyin");
}
}
