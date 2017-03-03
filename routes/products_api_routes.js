var db = require("../models");

module.exports = function(app) {
  app.get("/api/products/all", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Product.findAll({
      include: [db.Review]
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.get("/api/products/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Review]
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  // Get route for returning posts of a specific category
 /* app.get("/products/create", function(req, res) {
    db.Product.create({
      where: {
        product_name: req.body.product_name
      }
    })
    .then(function(dbProduct) {
      res.json(dbProduct);
      //res.redirect('/burgers');
    });
  }); */

app.post('/products/create', function(req, res){
  console.log(req.body.product_Name);
  console.log(req.body.price);
  console.log(req.body.Condition);
  console.log(req.body.photo);
  db.Product.create({
    product_name:req.body.product_Name,
    pricing:req.body.price,
    short_description:req.body.Condition,
    photo:req.body.photo
  }).then(function(){
    res.redirect('/lend')
  });
});

app.delete("/products/products:id", function(req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

// PUT route for updating products
  app.put('/products/update/:id', function(req, res) {
  var condition = 'id : ' + req.params.id;

  console.log('condition ', condition);

  db.Product.update({'exchanged': req.body.exchanged}, {where: {id: req.params.id}}).then(function(dbProduct){
    res.redirect('/rent');
  });
<<<<<<< HEAD:routes/products_api_routes.js
};
=======
});
};
>>>>>>> master:routes/products_api_routes.js
