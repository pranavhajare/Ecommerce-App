import { products } from "./constants/data.js"
import Products from "./model/product-schema.js";



const DefaultData = async () => {
    try{
        // await Products.deleteMany({});
        await Products.insertMany(products);

        console.log('Data imported Successfully');
    }catch(error){
        console.log("error while inserting default data",error.message);
    }
}

export default DefaultData;