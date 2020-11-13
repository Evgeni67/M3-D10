const showCancelAlert = function(){
    alert("Membership Ended");
}
const handleSubmit = async (e) => {
    
        e.preventDefault(); 
       addToServer();
}
const addToServer = async () => {
        let myMovie = {
                  "name": document.querySelector("#name").value,
                  "description": document.querySelector("#description").value,
                 "category":document.querySelector("#category").value,
                  "imageUrl": document.querySelector("#image").value,
          }
      try{
     let addResponse = await fetch('https://striveschool-api.herokuapp.com/api/movies/',{
            method: "POST", 
            body: JSON.stringify(myMovie),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzVkZDRiY2RlMTAwMTc2MTZhOGEiLCJpYXQiOjE2MDUyNjE2NTksImV4cCI6MTYwNjQ3MTI1OX0.XXnz9Rgj7ONcuXlQ3nRzZuPnLSclMfDsyFgxgA6Cv80"
            })
        })
        alert("Item Added Succesfully")
      }catch(error)
      {
          console.log("Error at 9-25 Description:" + error)
      }
}
const showData = () => {
    fetch("https://striveschool-api.herokuapp.com/api/movies/",{
        method:"GET",
    headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzVkZDRiY2RlMTAwMTc2MTZhOGEiLCJpYXQiOjE2MDUxMDE4NDYsImV4cCI6MTYwNjMxMTQ0Nn0.xVUPVAU5SCXoMhfv62Zd68K0AzOrboL8AfZxnFRHIMA"
})
}).then(response => response.json()).then(body => {
    console.log(body.forEach(element => {
        console.log(element)
    }))})

}