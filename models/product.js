const product =
{

    faked : [] ,

    initDB()

    {

        this.faked.push({

            title : "Headphone",
            description : "Electronics & Accessories",
            price :"CAD 40",
            Featured : electronics,
            imgPath : "e1.jgp"
        })

        this.faked.push({

            title : "Accessories pack 01",
            description : "Electronics & Accessories",
            price :"CAD 120",
            Featured : electronics,
            imgPath : "e2.jgp"
        })
        this.faked.push({

            title : "Controller",
            description : "Electronics & Accessories",
            price :"CAD 65",
            Featured : electronics,
            imgPath : "e3.jgp"
        })
        this.faked.push({

            title : "GamePad",
            description : "Electronics & Accessories",
            price :"CAD 135",
            Featured : electronics,
            imgPath : "e4.jgp"
        })
        this.faked.push({

            title : "Tools",
            description : "Electronics & Accessories",
            price :"CAD 180",
            Featured : electronics,
            imgPath : "e5.jgp"
        })
        this.faked.push({

            title : "Digital Clock",
            description : "Electronics & Accessories",
            price :"CAD 15",
            Featured :electronics,
            imgPath : "e6.jgp"
        })
        this.faked.push({

            title : "Table",
            description : "Kitchen Revamped",
            price :"CAD 135",
            Featured : home,
            imgPath : "h1.jgp"
        })
        this.faked.push({

            title : "Vase",
            description : "Kitchen Revamped",
            price :"CAD 25",
            Featured : home,
            imgPath : "h2.jgp"
        })
        this.faked.push({

            title : "Holder",
            description : "Kitchen Revamped",
            price :" CAD 45",
            Featured : home,
            imgPath : "h3.jgp"
        })        
        
        this.faked.push({

            title : "Shelf",
            description : "Kitchen Revamped",
            price :"CAD 70",
            Featured : home,
            imgPath : "h4.jgp"
        })
        this.faked.push({

            title : "Lamp",
            description : "Kitchen Revamped",
            price :"CAD 40",
            Featured :"home",
            imgPath : "h5.jpg"
        })
        this.faked.push({

            title : "Dining",
            description : "Kitchen Revamped",
            price :"CAD 110",
            Featured : home,
            imgPath : "k1.jgp"
        })
        this.faked.push({

            title : "Weight Medium",
            description : "FitnessFriday",
            price :"CAD 35",
            Featured : fitness,
            imgPath: "f1.jpg"
        
         })
        
        this.faked.push({

            title : "Training Rope",
            description : "FitnessFriday",
            price :"CAD 35",
            Featured : fitness,
            imgPath : "f2.jgp"
        })
        
        this.faked.push({

            title : "Boxed Water",
            description : "FitnessFriday",
            price :"CAD 150",
            Featured :fitness,
            imgPath : "f3.jgp"
        })
        this.faked.push({

            title : "Weights X 3",
            description : "FitnessFriday",
            price :"CAD 75",
            Featured : fitness,
            imgPath : "f4.jgp"
        })
                this.faked.push({

            title : "Dumbles X 2",
            description : "FitnessFriday",
            price :"CAD 40",
            Featured : fitness,
            imgPath : "f5.jgp"
        })
        this.faked.push({

            title : "Dumbles X 3",
            description : "FitnessFriday",
            price :"CAD 75",
            Featured : fitness,
            imgPath : "f5.jgp"
        })

    
    
    

    },

    getAllProducts()

    {

        return this.faked;

    },

    getFeaturedProducts()
    {


    }


}


product.initDB();

module.exports=products;
