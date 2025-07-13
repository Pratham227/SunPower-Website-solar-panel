// Function to switch between forms
function showForm(formId) {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.classList.remove('active');
    });

    document.getElementById(formId).classList.add('active');

    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelector(`button[onclick="showForm('${formId}')"]`).classList.add('active');
}
