let rowCount = 0;
let totalMath = 0;
let totalEnglish = 0;
function addGrade() {
    const mathInput = document.getElementById('math');
    const englishInput = document.getElementById('english');
    const math = parseFloat(mathInput.value);
    const english = parseFloat(englishInput.value);
    if (isNaN(math) || isNaN(english)) {
        alert('Please enter valid grades for both Math and English.');
        return;
    }
    rowCount++;
    totalMath += math;
    totalEnglish += english;
    const average = ((math + english) / 2).toFixed(2);
    const tableBody = document.querySelector('#gradeTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${average}</td>
    `;
    tableBody.appendChild(row);

    updateAverages();

    mathInput.value = '';
    englishInput.value = '';
    mathInput.focus();
}
function updateAverages() {
    const mathAvg = (totalMath / rowCount).toFixed(2);
    const englishAvg = (totalEnglish / rowCount).toFixed(2);
    const overallAvg = ((totalMath + totalEnglish) / (rowCount * 2)).toFixed(2);

    document.getElementById('mathAvg').textContent = mathAvg;
    document.getElementById('englishAvg').textContent = englishAvg;
    document.getElementById('overallAvg').textContent = overallAvg;
}
