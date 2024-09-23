const Product = require('../Model/productModel');
const Cart = require('../Model/Cart')

exports.AddCard = async (req, res, next) => {
           console.log(req.body);
           
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let cart = await Cart.findOne({ user: req.user._id });
           console.log(cart);
           
        if (cart) {
            // Find if the product already exists in the cart
            const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
            
            if (itemIndex > -1) {
                // If the product exists, increase the quantity
                cart.items[itemIndex].quantity += quantity;
            } else {
                // If not, add the new product
                cart.items.push({ product: productId, quantity });
            }
        } else {
            // If cart doesn't exist, create a new one
            cart = new Cart({
                user: req.user._id,
                items: [{ product: productId, quantity }]
            });
        }

        await cart.save();
      
        cart = await Cart.findById(cart._id).populate('items.product');
        console.log('from cardConroll',cart);
        
        res.status(200).json(cart);
    } catch (error) {
         console.error(error)
        res.status(500).json({ message: 'Server error' });
    }


}