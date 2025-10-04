function chooseFavColor(c)
{
    let color=c.toLowerCase();
    switch(color)
    {
        case 'red':
            console.log('the apple is red');
            break;

        case 'green':
            console.log(`grass is ${color}`) ; 
            break;

        case 'yellow':
            console.log(`sun is ${color}`)  ;
            break;  
            
        case 'blue':
            console.log(`sky is ${color}`) ; 
            break;    
        
        default:
            console.log(`${color}  is not found`) ;
    }
}

chooseFavColor('Red');
chooseFavColor('blue');
chooseFavColor('black');
