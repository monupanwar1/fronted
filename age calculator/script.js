// Get references to the input field, button, and h5 element
const inputDate = document.getElementById('date');
const calculateBtn = document.getElementById('btn');
const ageDisplay = document.getElementById('age-p');

// Function to calculate age
const calculateAge = () => {
    let birthDate = new Date(inputDate.value);
    let today = new Date();


    let years = today.getFullYear()-birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
     let days =today.getDate()-birthDate.getDate();

     // Adjust age if birthdate hasn't occurred this
    
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    // Adjust days if birthdate hasn't occurred this month
if (days < 0) {
    const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    days += prevMonth.getDate();
    months--;
}


    // Display the age
    ageDisplay.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
};

// Add event listener to the button to trigger the age calculation
calculateBtn.addEventListener('click', calculateAge);
