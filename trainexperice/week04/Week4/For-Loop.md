1. Print "Hello World" 5 times.



2. Modify each database's salary with newSalary array.
    -Scenario 1 : database.length = 5 & newSalary.length = 5

    -Scenario 2 : database.length = 6 & newSalary.length = 5
        Note: If there is no newSalary for some index, let it be the same.

    -Scenario 3 : database.length = 5 & newSalary.length = 6
        Note: Same result with Scenario 1

    -Scenario 4 : newSalary has id for specific data modification. {id:1,newSalary:10000}
        Note 1 : Try to use newSalary[i].id to specific the modification to the database.
        Note 2 : Nested ForLoop.

    -Scenario 5 : Don't modify salary if newSalary is higher than 25000 (because we don't have that much profit.)
        Note 1 : Use if-clause or Conditional-Operator to check condition.
        Note 2 : If newSalary is higher than limit, let it be the same.



3. Add user's favorite fruits with fruits array.
    -Scenario 1 : user.length = 3 & fruits.length = 3

    -Scenario 2 : fruits.length = 3, But has array inside

    -Scenario 3 : user.favorite already has value inside, please add fruit without changing it.
        Remember, DON'T CHANGE THE ORIGINAL FAVORITE!!!
        Note : Use Spread Operator (...)

    -Scenario 4 : fruit.length = 10, Each fruit has ID, indicated which user to insert to.
        Note : Nested ForLoop.