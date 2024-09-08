
// Task 1: Creating a Function to Calculate Average Sales

function calculateAverageSales(sales) 
{
if (sales.length === 0) 
{return 0;} 
console.log(`Sales Figures: , ${sales}`); // Individual sales values

const totalSales = sales.reduce((acc,sale) => acc + sale, 0); 
console.log(`Total Sales: , ${totalSales}`); // Total sales values 

const averageSales = totalSales / sales.length;
console.log(`Average Sales: , ${averageSales}`); // Average sales value

return averageSales; 
}


// Task 2: Creating a Function to Determine Performance Rating

function determinePerformanceRating(averageSales) 
{
    if (averageSales>10000)
    {return "Excellent";}
    else if (averageSales >= 7000 && averageSales <= 10000) 
    {return "Good";}
    else if (averageSales >= 4000 && averageSales <= 7000)
    {return "Satisfactory";}
    else if (averageSales<4000) 
    {return "Needs Improvement";}
}


