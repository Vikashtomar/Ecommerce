const pageurl = window.location.href
console.log(pageurl)


if(!pageurl.includes("id")){

}
else{
    const id = pageurl.split("=")[1]
    console.log(id)
    see(id)
}


async function see(id){
    const response = await fetch("https://dummyjson.com/products/"+id)
    const result =  await response.json()
    console.log(result)
    show(result)
}


function show(result){
    let div = document.createElement("div");
    div.classList.add("products");
    let img = document.createElement("img");
    img.src = result.thumbnail;
    let h3 = document.createElement("h3");
    let price = document.createElement("p");
    price.innerHTML = result.price
    let des = document.createElement("p");
    des.innerHTML = result.description;
    let addtoCart = document.createElement("a");
    addtoCart.innerHTML = "AddToCart"


    div.append(img)
    div.append(h3)
    div.append(price)
    div.append(des)
    div.append(addtoCart)

    let a = document.querySelector("#singleproduct");


    a.append(div)



}