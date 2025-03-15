let tdate = document.querySelector('.date');
// Set max date to today
tdate.max = new Date().toISOString().split("T")[0];

let button = document.querySelector('.button');
let display = document.querySelector('.display');

// Calculate age when the button is clicked
button.addEventListener("click", () => {
    let birthdate = new Date(tdate.value);

    if (isNaN(birthdate)) {
        display.innerHTML = "Please select a valid date!";
        return;
    }

    let today = new Date();
    let b_year = birthdate.getFullYear();
    let b_month = birthdate.getMonth();
    let b_date = birthdate.getDate();

    let t_year = today.getFullYear();
    let t_month = today.getMonth();
    let t_date = today.getDate();

    let y3, m3, d3;

    // Calculate years
    y3 = t_year - b_year;

    // Calculate months
    if (t_month >= b_month) {
        m3 = t_month - b_month;
    } else {
        y3--;
        m3 = 12 + t_month - b_month;
    }

    // Calculate days
    if (t_date >= b_date) {
        d3 = t_date - b_date;
    } else {
        m3--;
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
        d3 = new Date(t_year, t_month, 0).getDate() + t_date - b_date;
    }

    display.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
});


