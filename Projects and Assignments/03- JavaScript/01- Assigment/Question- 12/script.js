/* Question 12.
Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm 
*/

let now = new Date();

// YYYY-MM-DD HH:mm
console.log(now.getFullYear() + "-" + (now.getMonth() + 1).toString().padStart(2, "0") + "-" + now.getDate().toString().padStart(2, "0") + " " + now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0"));

// DD-MM-YYYY HH:mm
console.log(now.getDate().toString().padStart(2, "0") + "-" + (now.getMonth() + 1).toString().padStart(2, "0") + "-" + now.getFullYear() + " " + now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0"));

// DD/MM/YYYY HH:mm
console.log(now.getDate().toString().padStart(2, "0") + "/" + (now.getMonth() + 1).toString().padStart(2, "0") + "/" + now.getFullYear() + " " + now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0"));
