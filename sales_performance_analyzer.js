

  // Task 1: Creating a Function to Calculate Average Sales

function calculateAverageSales(sales) 
{
if (sales.length === 0) 
{return 0;} 
console.log(`Sales Figures: ${sales}`); // Individual sales values

const totalSales = sales.reduce((sum, sale) => sum + sale, 0); 
console.log(`Total Sales: ${totalSales}`); // Total sales values 

const averageSales = totalSales / sales.length;
console.log(`Average Sales: ${averageSales}`); // Average sales value

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

function findTopAndBottomPerformers(salesPeople) {

let topPerformer;
let bottomPerformer;

let max = -1;
let min = 99999999; 

for (let i = 0; i < salesPeople.length; i++) { 
   if (salesPeople[i].totalSales  > max)  {
    topPerformer = salesPeople[i];
    max = salesPeople [i]. totalSales; 
}

    if (salesPeople[i].totalSales < min)  {
        bottomPerformer = salesPeople[i];
        min = salesPeople [i].totalSales;}

        return {topPerformer: Object.assign({},topPerformer), bottomPerformer: Object.assign({}, bottomPerformer)};
    }

}


// Task 4: Combining Functions to Generate a Performance Report

function generatePerformanceReport(salesRecords) 
{
const performanceSummary = salesRecords.map(person => 
    {
const averageSales = calculateAverageSales(person.sales);
const performanceRating = determinePerformanceRating(averageSales);
const totalSales = person.sales.reduce((sum,sale) => sum + sale, 0);

return 
{
    name: person.name, 
    performanceRating, 
    totalSales
};
});
const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(performanceSummary);

return { 
    performanceSummary,
    topPerformer: {name: topPerformer.name, totalSales: topPerformer.totalSales},
    bottomPerformer: {name: bottomPerformer.name, totalSales: bottomPerformer.totalSales}
};
}



// Task 5: Testing Functions with Sample Data

const salesFigures = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] },
    
  ];

  const performanceReport = generatePerformanceReport(salesFigures);
  console.log (performanceReport);
