async function getCryptoList() {
  try {
    const response = await fetch("http://localhost:3000/crypto-list");
    const data = await response.json();
    document.getElementById("result").innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById("result").innerText = error.message;
  }
}

async function getQuote() {
    try{
        const response = await fetch("http://localhost:3000/quote", {
            method: "POST",                              
            headers: {
                "Content-Type": "application/json"         
            }
        });
        const data = await response.json();
        document.getElementById("result").innerText = JSON.stringify(data, null, 2);
    }catch(error){
        document.getElementById("result").innerText = error.message;
    }
}

async function createSession(){
    try{
        const response = await fetch("http://localhost:3000/create-session", {
            method: "POST",                              
            headers: {
                "Content-Type": "application/json"         
            }
        });
        const data = await response.json();
        document.getElementById("result").innerText = JSON.stringify(data, null, 2);
    }catch(error){
        document.getElementById("result").innerText = error.message;
    }
}