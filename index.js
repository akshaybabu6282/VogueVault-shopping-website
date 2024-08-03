fetch('https://fakestoreapi.com/products')
        .then((response)=>{
            console.log(response)
        response.json().then((data)=>{
            data.forEach(element => {
                result.innerHTML = result.innerHTML + `<div class="col mb-5">
                    <div class="card h-100" >
                        <!-- Product image-->
                        <img class="card-img-top " src=${element.image} alt="..." style="height:250px;"/>
                        <!-- Product details-->
                        <h5 class="text-center mt-2">${element.title.slice(0,20)}...</h5>
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h6>Rating: ${element.rating.rate}</h6>
                                <!-- Product price-->
                                &#x20B9;${element.price}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                        </div>
                    </div>
                </div> `
            });
        });
        })
        .catch((err)=>{
            console.log(err);
        })