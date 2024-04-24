// const fibonacciSeries = () => 
// {
//     let fibonacciSeries = [0, 1];

//     for(let i = 2; i < limit; i++)
//     {
//         const nextnumber = fibonacciSeries[i-1] + fibonacciSeries[i-2];
//         fibonacciSeries.push(nextnumber);
//     }

//     return fibonacciSeries;
// }

// const limit = 10;

// const series = fibonacciSeries(limit);

// alert(`Fibonacci seris : ${series.join(', ')}`);

// const output = document.getElementById('output');

// output.innerHTML = 
// `<p> Fiobnacci series : ${series.join(', ')} </p> `




const fibonacciSeries = () =>
{
let fibonacciSeries = [0,1];

for(let i = 2; i < limit ; i++)
{
	const nextnumber = fibonacciSeries[i-1] + fibonacciSeries[i-2];
	fibonacciSeries.push(nextnumber);
}

return fibonacciSeries;
}



const limit = 10;
const series = fibonacciSeries(limit);


alert(`the fibonacci Series upto ${limit} is ${series.join(', ')}`);

const output = document.getElementById('output');

output.innerHTML = 
`<p> The first output is\n
 the fibonacci Series upto ${limit} is ${series.join(', ')} </p>`;