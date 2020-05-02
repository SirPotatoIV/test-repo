const connection = require("../config/connection");
const userQuaries = require("../models/products/productQueries");

// connection.connect((err)=>{
//     if(err){
//         return err
//     }
// })

module.exports = {
  SELECT_ALL_PRODUCTS: (req, res) => {
    connection.query(userQuaries.SELECT_ALL_PRODUCTS, (err, products) => {
      if (err) {
        console.log(err);
      }
      res.set("Access-Control-Allow-Origin", "*");
      return res.json(products);
    });
  },
};
