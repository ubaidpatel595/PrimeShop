export function getAllProducts(category) {
    const productObj = {
        pid: "AH89P",
        title: "SuperRep Go Training & Gym Shoes For Men",
        disciption: "",
        price: 990,
        mrp: 1990,
        variants:[
            {type:"Color",options:[
                {name:"Green",imgSet:this.images[0]},
                {name:"Blue",imgSet:this.images[1]},
                {name:"Red",imgSet:this.images[2]}
            ]},
            {type:"Sizes",options:[
                {name:"7 IN",imgSet:this.images[0]},
                {name:"8 IN",imgSet:this.images[0]},
                {name:"8 IN",imgSet:this.images[0]}
            ]},
        ],
        delivery: 6, 
        imageGroups:[
            ["carou1.jpg","carou2.jpg","carou3.jpg"],
            ["carou3.jpg","carou2.jpg","carou1.jpg"],
            ["carou2.jpg","carou1.jpg","carou3.jpg"]
        ]
    }
    return([productObj,productObj,productObj,productObj])
}

export function getProduct(pid){
    const productObj = {
        pid: "AH89P",
        title: "SuperRep Go Training & Gym Shoes For Men",
        disciption: "",
        price: 990,
        mrp: 1990,
        variants:[
            {type:"Color",options:[
                {name:"Green",imgSet:this.images[0]},
                {name:"Blue",imgSet:this.images[1]},
                {name:"Red",imgSet:this.images[2]}
            ]},
            {type:"Sizes",options:[
                {name:"7 IN",imgSet:this.images[0]},
                {name:"8 IN",imgSet:this.images[0]},
                {name:"8 IN",imgSet:this.images[0]}
            ]},
        ],
        delivery: 6, 
        imageGroups:[
            ["carou1.jpg","carou2.jpg","carou3.jpg"],
            ["carou3.jpg","carou2.jpg","carou1.jpg"],
            ["carou2.jpg","carou1.jpg","carou3.jpg"]
        ]
    }
    return(productObj)
}

export function getReviews(pid){
    const reviewObj = {
        name: "Ubaid Patel",
        photo: null,
        title: "Very Nice Product",
        date: "20 December 2023",
        description: "Best Quality ant Very Affordable Rates",
        rating:[12,0,13,78,89]
    }
    return(reviewObj)
}

export function getRecomendations(){
    let result = getAllProducts();
    return(result)
}