function getInputValueById(elementId) {
    const Element = document.getElementById(elementId);
    const Estring = Element.value;
    const Value = parseFloat(Estring);
    return Value;
}

function getTextValueById(elementId, value) {
    const Text = document.getElementById(elementId);
    Text.innerText = value;

}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const IncomeAmount = getInputValueById('incomeField');
    const saveAmount = getInputValueById('save-input');
    // console.log(IncomeAmount);
    const FoodAmount = getInputValueById('food-input');
    const RentAmount = getInputValueById('rent-input');
    const ClothAmount = getInputValueById('cloth-input');


    const TotalExpense = FoodAmount + RentAmount + ClothAmount;
    const TotalBalance = IncomeAmount - TotalExpense;
    // console.log(TotalExpense, TotalBalance);
    if (TotalExpense <= IncomeAmount) {
        getTextValueById('update-expense', TotalExpense);
        getTextValueById('update-balance', TotalBalance);
    }
    else {
        alert('Your Expense Amount is more than Income Amount')
    }

    // 


});

document.getElementById('btn-save').addEventListener('click', function () {
    const saveAmount = getInputValueById('save-input');
    const IncomeAmount = getInputValueById('incomeField');
    const FoodAmount = getInputValueById('food-input');
    const RentAmount = getInputValueById('rent-input');
    const ClothAmount = getInputValueById('cloth-input');


    const TotalExpense = FoodAmount + RentAmount + ClothAmount;
    const TotalBalance = IncomeAmount - TotalExpense;
    const calculationOfSaving = IncomeAmount * (saveAmount / 100);
    getTextValueById('saving-amount', calculationOfSaving);
    const remain = TotalBalance - calculationOfSaving;
    if (remain < 0) {
        remain = 0;
        getTextValueById('remain', remain);
    }
    else {
        getTextValueById('remain', remain);
    }



})
