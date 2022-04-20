const Product = require("../models/product.model");  

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json()

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({ price: { $gt: 20 } })

    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}; 

const getSingleProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ msg: "Product not found"}); 
        }
        res.status(200).json({ error: error.message });


    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        let product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ msg: "Product not found"}); 
        }
        product = await product.Product.findByIdAndUpdate(poroductId, req.body, { 
            new: true,
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    };

    const deleteProduct = async (req, res) => {
        try {
            const productId = req.params.productId;
            let product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ msg:"Product deleted"})
            } 
            await Product.findByIdAndDelete(productId);
            res.status(200).json({ msg: "Product deleted."})
        } catch (error) {
                res.status(400).json({ error: error.message });
            }
        };
    

module.exports = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
}