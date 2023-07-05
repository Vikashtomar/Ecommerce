// URL   "https://dummyjson.com/products"



function somesh(){
    fetch("https://dummyjson.com/products")
    .then((res)=>{ 
         return res.json()

    })
        
            
        .then(result=>{
            show(result.products)
            console.log(result);
        })
}
somesh()

function show(data){
    for(let i= 0; i<data.length; i++)
    {
        let div= document.createElement("div");
        div.classList.add("products");
        let img = document.createElement("img");
        img.src = data[i].thumbnail;
        let links = document.createElement("a");

        links.href = "singleproducts.html?id="+data[i].id;
        
        
        links.append(img)
        let h3 = document.createElement("h3");

        let title = document.createElement("title");
        title.innerHTML = data[i].title;
        let description = document.createElement("p");
        description.innerHTML = data[i].description;
        let price = document.createElement("p");
        price.innerHTML = data[i].price;

    div.append(links);
    div.append(h3);
    div.append(title);
    div.append(description);
    div.append(price)



    document.querySelector("#products").append(div)

    }

    

}


