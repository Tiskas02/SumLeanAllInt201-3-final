# LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# Product Requirements

Your JavaScript allows users to add new product name by entering text into the input field, clicking the "Add" button, and remove individual products by clicking the "Remove" button associated with each product. Additionally, there is a "Remove All" button that clears the entire product list.

## HTML Structure:

The HTML contains a product container with an input field, an "Add" button, and a "Remove All" button.
There is a separate container for the product list identified by the product-list id.

## JavaScript Program:

### registerEvent Function

1. Add an event listener to the "Add" button to call the "addNewProduct" function when clicked.
2. Add an event 'click' to the "Remove All" button by calling handler function named "removeAllProduct" to clear the entire product items inside product list.

### addNewProduct Function:

You AddNewProduct function must check the input value is not an empty string before proceeding to create and add a new product to the product list. If the input is empty, the program does not add an empty product to the product list.

1. query the input element to get the new product and then dynamically create HTML elements structure as follow:

   - Create a new div element with a unique id based on the entered product name and a class name "product-item"
   - Create a p element to display the product name
   - Create a "Remove" button for each product, with an event listener to call the "removeProduct" function by sending its id to the function.
   - Append the p element and "Remove" button to the product-list.
   - Clear a previous product name in the input textbox.
   - For example, filling an product name "abc" in input element, it will create a new product element inside <div id="product-list"></div> like this:

```
<div id="abc" class="product-item">
      <p>abc</p>
      <button>Remove</button>
 </div>
```

### removeProduct Function:

accept the product id as its parameter and then select that product element to be removed from product-list parent element.

### removeAllProduct Function:

remove all the entire product items inside product list

# Screen Capture Outputs

- ![demo clip](demoOutput/demo.mp4)
