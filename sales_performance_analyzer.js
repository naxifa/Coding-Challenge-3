
// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales) 
{
if (sales.length === 0) 
{return 0}; 
console.log(`Sales Figures: , sales`); // Individual sales values

const totalSales = sales.reduce((acc,sale) => acc + sale, 0); 
console.log(`Total Sales: , totalSales`); // Total sales values 

const averageSales = totalSales / sales.length;
console.log(`Average Sales: , averageSales`); // Average sales value

return averageSales; 
}


