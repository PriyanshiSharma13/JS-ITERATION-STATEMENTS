// Q 6. Print the Pattern.
// Write a program which ask user for no of lines and print a pattern using an asterik .

// Note: You have to complete Print_pattern. No need to take any input.

const Print_pattern = (N) => {
    for(let i = 0 ; i <= N ;i++){
        let star= '';
        for(let k = 0 ; k < i ; k++){
        star = star + '*';
        }
        console.log(star);
        }      
    };
console.log(Print_pattern(5));

