let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let fact = await getfact();
//   console.log(fact);
  let p = document.querySelector("#fact");
  p.innerText = fact;
  
}
)




async function getfact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log(e);
        
        return "NO FACTS FOUND!!!";
    }
}


