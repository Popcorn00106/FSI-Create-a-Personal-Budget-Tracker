let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    let numberAnwser = parseFloat(stringAnswer)
    console.log("numberAnswer", numberAnwser, typeof numberAnwser)
    weeklyExpenses = weeklyExpenses + numberAnwser
    console.log("weeklyExpenses", weeklyExpenses)
}
for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    let numberAnwser = parseFloat(stringAnswer)
    console.log("numberAnswer", numberAnwser, typeof numberAnwser)
    monthlyExpenses = monthlyExpenses + numberAnwser
    console.log("monthlyExpenses", monthlyExpenses)
}
for (let i = 0; i < totalAnnualExpenses.length; i++) {
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    let numberAnwser = parseFloat(stringAnswer)
    console.log("numberAnswer", numberAnwser, typeof numberAnwser)
    totalAnnualExpenses = annualExpenses + numberAnwser
    console.log("totalAnnualExpenses", totalAnnualExpenses)
}