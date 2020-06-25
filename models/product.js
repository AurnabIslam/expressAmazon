const product =
{

    fakedb : [],

    initdb()
    {

        this.fakedb.push  ({
            title: "Test 01",
            description : "Please work",
            price :"145",
            featured: true,
            imgPath: 05.jpg 
        })


        this.fakedb.push ({
            title: "Test 02",
            description : "Please work2",
            price :"15",
            featured: false,
            imgPath: 06.jpg 

        })

        this.fakedb.push ({
            title: "Test 03",
            description : "Please work3",
            price :"45",
            featured: true,
            imgPath: 05.jpg 

        })

    },

    getAllProducts()

    {
        return this.fakedb;


    },

    getFeatuedProducts()
    {


    }
}

product.initdb();

module.exports = product;