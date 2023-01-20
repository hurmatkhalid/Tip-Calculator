// we will use three functions for creating the tip calculator
//-------------
// calculateBill()
// increasePeople()
// decreasePeople()

const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeople.innerText);
const calculateBill = () => {
	const bill = Number(billInput.value);
	const tipPercent = Number(tipInput.value) / 100;
	const tipAmount = bill * tipPercent;
	const total = tipAmount + bill;
	const perPersonTotal = total / numberOfPeople;
	perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};
