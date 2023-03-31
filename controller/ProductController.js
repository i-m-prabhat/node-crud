const ProductModel = require("../model/ProductModel");

const ProductController = {
    getProduct: async (req, res, next) =>
    {
        await ProductModel.find({}, (err, data) =>
        {
            if (err == null)
            {
                if (typeof (data) == 'object')
                {
                    if (Array.isArray(data))
                    {
                        if (data.length > 0)
                        {
                            res.status(200).json({
                                code: "201",
                                message: "Product Found Successfully",
                                success: true,
                                data: data,
                                error: false
                            });
                        } else
                        {
                            res.status(404).json({
                                code: "404",
                                message: "Product Not Found",
                                data: [],
                                error: false
                            })
                        }
                    } else
                    {
                        console.log(data)
                    }
                }
            }
        })
    },
    createProducts: (req, res, next) =>
    {
        console.log(req.body);
        ProductModelObject = new ProductModel(req.body);
        ProductModelObject.save((err, data) =>
        {
            if (err == null)
            {
                console.log("Inserted Successfully");
                res.status(200).json({
                    code: "201",
                    message: "Record Inserted Successfully",
                    status: true,
                    data: data,
                    error: false
                });
            } else
            {
                res.status(404).json({
                    code: "404",
                    message: "Oops, Something wents Wrong",
                    data: [],
                    error: false
                })
            }
        })

    },
    updateProducts: (req, res, next) =>
    {

        let ObjectId = req.params.id;

        ProductModel.findOne({ _id: ObjectId }, (error, data) =>
        {
            if (error == null)
            {
                // Add Validation code for Object & Array 
                // console.log(data);

                data.name = req.body.name;
                data.brand = req.body.brand;
                data.price = req.body.price;

                data.save((err, data) =>
                {
                    if (err == null)
                    {
                        console.log("Data updated successfully");
                        res.status(200).json({
                            code: "201",
                            message: "Data updated successfully",
                            status: true,
                            data: data,
                            error: false
                        });
                    } else
                    {
                        res.status(404).json({
                            code: "404",
                            message: "Oops, Something wents Wrong",
                            data: [],
                            error: false
                        })
                    }
                });
            }
        })


    },
    deleteSingleProduct: (req, res, next) =>
    {
        let ObjectId = req.params.id;
        ProductModel.deleteOne({ _id: ObjectId }, (error, data) =>
        {
            if (error == null)
            {
                res.status(200).json({
                    code: "201",
                    message: "record deleted successfully",
                    status: true,
                    data: [],
                    error: false
                })
            } else
            {
                res.status(404).json({
                    code: "404",
                    message: "Can't Delete Record",
                    status: false,
                    data: [],
                    error: error
                })
            }
        })
    },
    getSingleProduct: (req, res, next) =>
    {
        let ObjectId = req.params.id;
        ProductModel.findOne({ _id: ObjectId }, (error, data) =>
        {
            if (error == null)
            {
                if (typeof (data) == 'object')
                {
                    if (Array.isArray(data))
                    {
                        // console.log('data is array of object');
                    } else
                    {
                        // console.log("data is single object");
                        if (data == null)
                        {
                            // console.log("Invalid data", data)
                            res.status(404).json({
                                code: "404",
                                message: "No Record Found for id " + ObjectId,
                                data: [],
                                error: false
                            })
                        } else
                        {
                            // console.log("Valid data", data)
                            res.status(200).json({
                                code: "201",
                                message: "Record Found for id " + ObjectId,
                                status: true,
                                data: data,
                                error: false
                            });
                        }
                    }
                } else
                {
                    console.log("Not a valid Object");
                }
            } else
            {
                console.log("Exception Occured");
            }
        })
    }
}


module.exports = ProductController