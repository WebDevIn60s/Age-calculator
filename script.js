// Set max date to today when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('birthdate').max = new Date().toISOString().split('T')[0];
});

// Calculate Age Function
function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');

    // Clear previous error
    errorDiv.classList.remove('show');
    errorDiv.textContent = '';

    // Validate input
    if (!birthdateInput) {
        showError('Please select your birth date!');
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();

    // Check if birthdate is in the future
    if (birthdate > today) {
        showError('Birth date cannot be in the future!');
        return;
    }

    // Calculate age
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    // Adjust for negative days
    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate next birthday
    const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    const monthsUntilBirthday = Math.floor(daysUntilBirthday / 30);
    const remainingDays = daysUntilBirthday % 30;

    // Display results with animation
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;

    let birthdayText = '';
    if (daysUntilBirthday === 0) {
        birthdayText = '🎉 Happy Birthday! 🎉';
    } else if (monthsUntilBirthday > 0) {
        birthdayText = `${monthsUntilBirthday} month${monthsUntilBirthday > 1 ? 's' : ''} and ${remainingDays} day${remainingDays !== 1 ? 's' : ''}`;
    } else {
        birthdayText = `${daysUntilBirthday} day${daysUntilBirthday !== 1 ? 's' : ''}`;
    }

    document.getElementById('nextBirthday').textContent = birthdayText;

    // Show result with animation
    resultDiv.classList.remove('show');
    setTimeout(() => {
        resultDiv.classList.add('show');
    }, 10);
}

// Show Error Function
function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
    
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('show');
}

// Reset Calculator Function
function resetCalculator() {
    document.getElementById('birthdate').value = '';
    document.getElementById('result').classList.remove('show');
    document.getElementById('error').classList.remove('show');
}

// Allow Enter key to calculate
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('birthdate').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateAge();
        }
    });
});
