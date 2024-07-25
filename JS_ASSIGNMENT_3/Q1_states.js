// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

let states = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa", "Gujarat","Haryana","Himachal Pradesh",
    "Jammu and Kashmir","Jharkhand", "Karnataka","Kerala", "Madhya Pradesh", "Maharashtra","Manipur","Meghalaya","Mizoram",
    "Nagaland", "Odisha", "Punjab","Rajasthan","Sikkim","Tamil Nadu", "Telangana","Tripura", "Uttarakhand","Uttar Pradesh",
    "West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"
]; // Array of States...

// Array.filter()---- method traverse each value in the array , checks the values against particular condition 
// and returns the values which satisfiy the conditon...

const regex = /^[aeiouAEIOU]/;

const new_states = states.filter( (val)=>
{
    return !regex.test(val);  // tests the val with regular expression.. & returns
}
)

console.log("The states that does not start with VOWELS....");
console.log(new_states);