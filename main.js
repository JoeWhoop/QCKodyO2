document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('goButton').addEventListener('click', function() {
        var stationValue = document.getElementById('stationDropdown').value;
        var mechanicValue = document.getElementById('mechanicDropdown').value;

        // Pobierz link 1 i link 2
        var link1 = document.getElementById('link1');
        var link2 = document.getElementById('link2');

        // Jeśli wybrano QC - A7 w dropdownie dla stacji, użyj linku 1
        if (stationValue === "QC - A7") {
            link1.click();
        } 
        // Jeśli wybrano QC1 lub QC2 w dropdownie dla stacji, użyj linku 2
        else if (stationValue === "QC1" || stationValue === "QC2") {
            link2.click();
        }
    });
});
