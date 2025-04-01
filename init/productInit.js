const mongoose = require('mongoose');
const categoryModel = require('../models/category.js');


main().then((res)=>{
    console.log("Connected to DB Successfully!");
}).catch((err) =>{
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wow_skinscience');
}


async function createCategories() {
    const categories = [
        { name: "Shampoo", description: "Products for skincare routines" },
        { name: "Conditioner", description: "Shampoos, conditioners, and treatments" },
        { name: "Body Wash", description: "Body washes, scrubs, and moisturizers" },
        { name: "Scrubs", description: "Health supplements and vitamins" },
        { name: "Oil", description: "Gentle care products for kids" },
        { name: "Face Wash", description: "Gentle care products for kids" },
        { name: "Serum", description: "Gentle care products for kids" },
        { name: "Onion", description: "Enriched with red onion extract,this formula is designed to nourish,strenthen,and protect your skin and hair.Packed with antioxidants,sulfur,and essntial vitamins." },
        { name: "Vitamin C", description: "Infused with pure Vitamin C,this formula is designed to enhance skin radiance,reduce dark spots, and fight signs of aging.Packed with antioxidants and essential nutrients." },
        { name: "Rosemary", description: "Enriched with the natural goodness of Rosemary extract,this formula is dessigned to purify,hydrate, and restore your skin's vitality.Known for its properties,antibacterial and antioxidant properties." },
        { name: "Apple Cider Vinegar", description: "Infused with the powerful cleansing properties of Apple Cider Vinegar(ACV), this formula helps in balencing,clarifying,and refreshing your skin for a naturally radiant glow.AVC is rich in antimicrobial and exfoliating properties." },
        { name: "Aloe Vera", description: "Experience the refreshing cooling and hydrating benifits of Aloe Vera,known for its deep nourishment and healing properties." },
        { name: "Ubtan", description: "Inspired by the age-old beauty secrets of Ayurveda,this Ubtan-infused formula deeply cleanses,brightens,and nourishes your skin for a radiant, healthy glow" },
        { name: "Activated Charcoal", description: "Power-packed with the deep-cleansing benefits of Activated Charcoal,this formula draws out dirt,oil,and impurities,leaving your skin fresh,clear,and rejuvenated." },
        { name: "Multani Mitti", description: "Harness the power of Multani Mitti(Fuller's Earth) to deeply cleanse,detoxify,and refresh your skin.This age-old skincare remedy absorbs excess oil,unclogs pores,and gives you a naturally radiant complexion." },
        { name: "Green Tea", description: "Infused with the goodness of Green Tea Extracts, this skincare essential detoxifies, hydrates, and revitalizes your skin, leaving it fresh and glowing. Packed with antioxidants, it fights free radicals, reduces signs of aging, and keeps your skin youthful." },
        { name: "Amla", description: "Enriched with the Vitamin C-rich goodness of Amla (Indian Gooseberry), this skincare essential deeply nourishes, brightens, and revitalizes your skin. Amla's natural antioxidants help fight free radicals, delay signs of aging, and promote an even skin tone." },
        { name: "Argun Oil", description: "Experience the luxurious hydration of Argan Oil, the “Liquid Gold” of skincare, known for its deep moisturizing and skin-repairing properties. Rich in essential fatty acids, Vitamin E, and antioxidants, Argan Oil helps restore skin elasticity, fight dryness, and enhance your natural glow." },
        { name: "Coconut", description: "Give your skin the care it deserves with the natural hydration and nourishment of Coconut! Packed with essential fatty acids, vitamins, and antioxidants, Coconut deeply moisturizes, repairs dry skin, and restores its natural glow. Its antibacterial and anti-inflammatory properties make it perfect for soothing irritation and promoting healthy, radiant skin." },
        { name: "Himalayan Rose", description: "Infused with the pure essence of Himalayan Rose, this skincare product deeply hydrates, soothes, and refreshes your skin, leaving it soft, supple, and radiant. Known for its anti-inflammatory and antioxidant properties, rose helps calm irritation, reduce redness, and protect against environmental damage. Its delicate floral aroma provides a luxurious and calming self-care experience." },
        { name: "Hyaluronic Acid", description: "Packed with the power of Hyaluronic Acid, this skincare product provides intense hydration, plumps the skin, and restores a youthful glow. Known for its ability to retain up to 1000x its weight in water, Hyaluronic Acid deeply nourishes the skin, reduces dryness, and improves elasticity. Say goodbye to dull, dehydrated skin and hello to a radiant, dewy complexion!" },
        { name: "Retinol", description: "Infused with the power of Retinol, this advanced skincare formula works overnight to reduce fine lines, wrinkles, and dark spots while promoting cell renewal and collagen production. A must-have for anyone looking to achieve firmer, smoother, and more youthful-looking skin!" },
    ];

    await categoryModel.insertMany(categories);
    console.log("Categories Added!");
}

//createCategories();


const Product = require('../models/products.js');


const getCategoryId = async(categoryName) => {
    const category = await categoryModel.findOne({name: categoryName});
    if (!category) {
        console.warn(`Category ${categoryName} not found. Skipping product.`);
        return null; // Return null if category doesn't exist
    }
    return category._id;
};


async function createProducts() {
    //const categories = await categoryModel.find(); // Fetch all categories

    // const products = [
    //     {
    //         name: "Aloe Vera Face Wash",
    //         description: "Hydrating and soothing face wash",
    //         price: 299,
    //         stock:300,
    //         ingredients:[],
    //         categories:await getCategoryId("Face Wash")
    //     },
    //     {
    //         name: "Aloe Vera Face Wash",
    //         description: "Hydrating and soothing face wash",
    //         price: 299,
    //         stock:300,
    //         ingredients:[],
    //         categories:await getCategoryId("Face Wash")
    //     },
    //     {
    //         name: "Aloe Vera Face Wash",
    //         description: "Hydrating and soothing face wash",
    //         price: 299,
    //         stock:300,
    //         ingredients:[],
    //         categories:await getCategoryId("Face Wash")
    //     }
        // {
        //     name: "Argan Oil Shampoo",
        //     description: "Nourishing shampoo with Argan Oil",
        //     price: 499,
        //     stock:500,
        //     ingredients:[],
        //     categories:await getCategoryId("Oil")
        //     //categories.find(c => c.name === "Oil")._id
        // },
        // {
        //     name: "Shea Butter Body Lotion",
        //     description: "Moisturizing lotion with Shea Butter",
        //     price: 399,
        //     stock:99,
        //     ingredients:[],
        //     categories:await getCategoryId("Body Wash")
        //     //categories.find(c => c.name === "Body Wash")._id
        // },
        // {
        //     name: "Vitamin C Gummies",
        //     description: "Boost immunity with tasty Vitamin C gummies",
        //     price: 349,
        //     stock:499,
        //     ingredients:[],
        //     categories:await getCategoryId("Vitamin C")
        //     //categories.find(c => c.name === "Vitamin C")._id
        // },
        // {
        //     name: "Gentle Baby Shampoo",
        //     description: "Tear-free baby shampoo for delicate hair",
        //     price: 299,
        //     stock:19,
        //     ingredients:[],
        //     categories:await getCategoryId("Kids")
        //     //categories.find(c => c.name === )._id
        // }
    //];

    await Product.insertMany(products);
    console.log("Products Added!");
}
async function showProducts(){
    let valid_products = await Product.find();
    console.log(valid_products);
}
createProducts();
//showProducts();