$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var nameInput = $("#product-name");
  var authorList = $("tbody");
  var authorContainer = $(".product-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an product
  $(document).on("submit", "#product-form", handleproductFormSubmit);
  $(document).on("click", ".delete-product", handleDeleteButtonPress);

  // Getting the intiial list of products
  getproducts();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleproductFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertproduct function and passing in the value of the name input
    upsertproduct({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating an product. Calls getproduct upon completion
  function upsertproduct(productData) {
    $.post("/api/products", productData)
      .then(getproducts);
  }

  // Function for creating a new list row for authors
  function createproductRow(productData) {
    var newTr = $("<tr>");
    newTr.data("product", productData);
    newTr.append("<td>" + productData.name + "</td>");
    newTr.append("<td> " + productData.Reviews.length + "</td>");
    newTr.append("<td><a href='/home?product_id=" + productData.id + "'>Go to Reviews</a></td>");
    newTr.append("<td><a href='/cms?product_id=" + productData.id + "'>Create a Review</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-product'>Delete product</a></td>");
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getproducts() {
    $.get("/api/products", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createproductRow(data[i]));
      }
      renderproductList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderproductList(rows) {
    productList.children().not(":last").remove();
    productContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      productList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.html("You must create a product before you can create a Review.");
    authorContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("product");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/products/" + id
    })
    .done(getproducts);
  }
});