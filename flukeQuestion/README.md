Problem:
You're given an array of numbers representing sales figures for a company's various products over a week. Your task is to create a set of functions that perform the following operations:

getTotalSales(...arrays)
Description: Accepts multiple arrays and returns a single array containing the total sales for each day.
Parameters: Accepts a rest parameter allowing any number of arrays.
Returns: An array containing the total sales for each day, summing up the corresponding elements from all input arrays.

getAverageSalesPerDay(salesArray)
Description: Calculates the average sales per day.
Parameters: Accepts an array of sales figures for each day.
Returns: The average sales per day as a number.

getDaysWithSalesAboveThreshold(salesArray, threshold)
Description: Identifies days where sales are above a certain threshold.
Parameters: Accepts an array of sales figures for each day and a threshold number.
Returns: An array containing the indices of days where sales are above the threshold.

findMaximumSalesDay(salesArray)
Description: Finds the day with the maximum sales.
Parameters: Accepts an array of sales figures for each day.
Returns: The index of the day with the maximum sales.

Feel free to implement these functions using array methods like map, filter, reduce, and make use of concepts like rest and spread operators. Remember to consider edge cases and handle them appropriately!

//data for test
const salesArray = [
  [100, 150, 200, 180, 220], // Sales for Product A
  [120, 100, 90, 110, 95],  // Sales for Product B
  [80, 70, 60, 90, 100]     // Sales for Product C
];