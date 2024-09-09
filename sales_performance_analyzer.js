
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


// Task 3: Creating a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(salespeople)  
{
const output = salespeople.reduce((acc, current) => {if (current.totalSales > acc.topPerformer.totalSales)
    {acc.topPerformer = current;}})

if (current.totalSales < acc.bottomPerformer.totalSales)
{acc.bottomPerformer = current;}

return acc;

topPerformer: salespeople[0]
bottomPerformer: salespeople[0]

}


// Task 4: Combining Functions to Generate a Performance Report

function generatePerformanceReport(salesRecords) 
{
const performanceSummary = salesRecords.map(person => {
const averageSales = calculateAverageSales(person.sales);
const performanceRating = determinePerformanceRating(averageSales);
const totalSales = person.sales.reduce((sum,sale) => sum + sale, 0);

return 
{
    employeeName: person.name, 
    performanceRating, 
    totalSales
};
});
const { topPerformer, bottomPerformer } = identifyTopAndBottomPerformers(performanceSummary);

return { 
    performanceSummary,
    topPerformer: {employeeName: topPerformer.employeeName, totalSales: topPerformer.totalSales},
    bottomPerformer: {employeeName: bottomPerformer.employeeName, totalSales: bottomPerformer.totalSales}
};
}
