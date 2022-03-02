// Problem: 1
function anaToVori(ana){
    if(typeof(ana) != 'number'){
        return 'Please input a number '
    }
    if(ana < 0){
        return 'Please input a positive number';
    }
    
    let calculatedVori = ana / 16;
    return calculatedVori;

}
const vori = anaToVori(64);
console.log(vori);

// Problem 2:
function pandaCost(singaraQuentity,somuchaQuentity,jilapiQuentity){
    if(typeof(singaraQuentity || somuchaQuentity || jilapiQuentity) != 'number'){
        return 'Please input number only';
    }

    const singaraPricePerPiece = 7;
    const somuchaPricePerPiece = 10;
    const jilapiPricePerPiece = 15;

    const singaraPrice = singaraPricePerPiece * singaraQuentity;
    const somuchaPrice = somuchaPricePerPiece * somuchaQuentity;
    const jilapiPrice = jilapiPricePerPiece * jilapiQuentity;

    const totalPrice = singaraPrice + somuchaPrice + jilapiPrice;
    return totalPrice;
}
const totalPrice = pandaCost(2,4,6);
console.log(totalPrice);


// Problem: 3
function picnicBudget(people){

    if(typeof(people) != 'number'){
        return 'Please input a number';
    }
    if(people < 0){
        return 'Please input a number greater than 0';
    }

    const subscriptionForFirst100 = 5000;
    const subscriptionForSecond100 = 4000;
    const subscriptionForThird100 = 3000;

    if(people <=100){
        const budgetForFirst100 = subscriptionForFirst100 * people;
        return budgetForFirst100;
    }
    else if(people <= 200){
        const first100PeopleBudget = 100 * subscriptionForFirst100;
        const theRestPeople = people - 100;
        const second100PeopleBudget = theRestPeople * subscriptionForSecond100;
        const totalBudgetForFirst200 = first100PeopleBudget + second100PeopleBudget;
        return totalBudgetForFirst200;

    }
    else{
        const first100PeopleBudget = 100 * subscriptionForFirst100;
        const second100PeopleBudget = 100 * subscriptionForSecond100;
        const theRestPeople = people - 200;
        const third100PeopleBudget = theRestPeople * 3000;
        const totalBudgetForUpto200 = first100PeopleBudget + second100PeopleBudget + third100PeopleBudget;
        return totalBudgetForUpto200;
    }
}

const totalBudget = picnicBudget(300);
console.log(totalBudget);

// Problem: 4
function oddFriend(friends){
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length % 2 != 0){
            return friends[i];
        }
    }

}

const friends = ['Shahriar','Tarek','Munna','Rubel','Habibur'];
const oddFriendName = oddFriend(friends);
console.log(oddFriendName);
