const solution = (arr) => {
  // TODO: Implement me!
  return arr.map((num) => num * 2);
};

console.log(solution([1, 2, 3]));


/**
 * 
 * DEMO】Restaurant Reservation System
Description
You are asked to design a class to manage a table reservation system for a restaurant that has tables of different sizes.
In this system, there are three types of tables: small, medium, and large, each with a specific ID.

The tableId represents the size of the table, where 1 (small), 2 (medium), and 3 (large).

Implement the RestaurantReservation class according to the following specifications:

Constructor
RestaurantReservation(int small, int medium, int large)
Initializes the number of tables of each size with the three integers provided.
Method
boolean reserve(int tableId)
Reserves the table with the specified ID. If the table with the specified ID is available, the reservation is successful, and true is returned.
If the table is not available, the reservation fails, and false is returned.
Example
Example 1:
Input: ["RestaurantReservation", "reserve", "reserve", "reserve", "reserve"]
[[1,1,0],[1],[2],[3],[1]]
Output: [null,true,true,false,false]
Explanation:
RestaurantReservation reservation = new RestaurantReservation(1, 1, 0);
reservation.reserve(1); // The small table is available, so it is reserved, and true is returned.
reservation.reserve(2); // The medium table is available, so it is reserved, and true is returned.
reservation.reserve(3); // The large table is not available, so false is returned.
reservation.reserve(1); // The small table is not available, so false is returned.
Constraints:
0 <= small, medium, large <= 100
reserve will be called at most 10^2 times.
 * 
 * 
 */




class RestaurantReservation {
    constructor(small, medium, large) {
        // Store the available tables by type
        this.tables = {
            1: small,   // small tables
            2: medium,  // medium tables
            3: large    // large tables
        };
    }

    reserve(tableId) {
        // Check if there is an available table of the requested type
        if (this.tables[tableId] > 0) {
            this.tables[tableId]--;  // Reserve it by decreasing the count
            return true;
        } else {
            return false; // No table left to reserve
        }
    }
}



/**
 * Children's allowance
Description
The function is passed two arguments: allowances, which is an array of int, and extraAllowances, which is an array of int.
allowances[i] represent the amount of allowance the i th child has, respectively, and extraAllowances represent the amount of extra allowance you have
the amount of allowance you have.

In this case, write a function that compares the amount of extraAllowances given to each of all children to the amount of money the child had the most allowance before the additional distribution, and returns true if the amount of money possessed is the same or more, and false otherwise, by filling the array with false. If not, write a function that returns an array filled with true and false.

Example
Example 1
Input: allowances = [10, 20, 30], extraAllowances = 10
Output: [false, true, true]
Explanation:
The first child has 20 after adding 10, which is less than 30 before the additional distribution, so false
The second child has 30 after adding 10, which is more than 30 before the additional distribution, so true
The third child has 40 after adding 10, which is more than 30 before the additional distribution, so true
Example 2
Input: allowances = [10, 20, 10, 20, 50], extraAllowances = 20
Output: [false, false, false, false, true]
Explanation:
The first child has 30 after adding 20, which is less than 50 before the additional distribution, so false
The second child has 40 after adding 20, which is less than 50 before the additional distribution, so false
The third child has 30 after adding 20, which is less than 50 before the additional distribution, so false
The fourth child has 40 after adding 20, which is less than 50 before the additional distribution, so false
Assumptions
- n == allowances.length
- 1 <= allowances[i] <= 100
- 2 <= n <= 100
- 1 <= extraAllowances <= 50
 */


const solution = (allowances, extraAllowances) => {
    // TODO: Implement me!
    const target = Math.max(...allowances);

    return allowances.map(allowance => (allowance + extraAllowances) >= target)
}










/**
 * Implementation of LRUCache class
Description
Design a data structure of LRU (Least Recently Used) cache using a class.

LRU refers to a cache algorithm that removes the least recently used data from the cache.
The timing of updating the frequency of use this time is when get and put are called.
Please implement the LRUCache class according to the following specifications.

Constructor.
LRUCache(int limit)
initializes the cache with a positive integer limit argument.
methods.
int get(string key)
Returns the cache value associated with the key, if it exists. If it does not exist, return **-1. **
If this method is called, update the usage frequency.
void put(string key, int value)
If the key exists, update the cache value associated with the key. If it does not exist, add a new key/value pair to the cache.
If the limit given in the constructor is exceeded, the least recently unused key will be deleted.**
If this method is called, update the usage frequency.
Example
Example 1
Input: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[3], ["a", 1], ["b", 2], ["a"], ["c", 3],  ["b"], ["d", 4], ["a"], ["c"], ["d"]]
Output: [null, null, null, 1, null, 2, null, -1, 3, 4]
Explanation:
LRUCache lRUCache = new LRUCache(3);
lRUCache.put("a", 1);  // {"a"=1}
lRUCache.put("b", 2);  // {"a"=1, "b"=2}
lRUCache.get("a");     // return 1
lRUCache.put("c", 3);  // {"c"=3, "a"=1, "b"=2}
lRUCache.get("b");     // return 2
lRUCache.put("d", 4);  // {"d"=4, "c"=3, "b"=2}
lRUCache.get("a");     // return -1
lRUCache.get("c");     // return 3
lRUCache.get("d");     // return 4
Constraints
1 <= limit <= 3000
0 <= value <= 10^5
get and put are called at most 2 * 10^5 times.
 */



class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // mark as recently used
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.limit) {
      this.cache.delete(this.cache.keys().next().value); // remove oldest
    }
  }
}
