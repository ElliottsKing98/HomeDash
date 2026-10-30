import Papa from "https://esm.sh/papaparse@5.3.0";

// Clear Console
console.clear();

// Variable declarations
let data = undefined;
let remoteFile = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEQoH_G0h3KMjMtSXhYV2FIAbJGDRQws3bksoAPKpV1kAS2y0g1DbjE6l3_opl98iwTGdwNLuqnK8Y/pub?gid=0&single=true&output=csv";
{
    Papa.parse(remoteFile, {
      download: true,
      complete: function (result) {
        console.log(result);
        data = result.data;
        renderData(data)
      }
    });
  };
function renderData(data) {
//Weekday cards subnotes
Mon_B2.innerHTML = data[1][2] // Monday Note
Tue_B3.innerHTML = data[2][2] // Tuesday Note
Wed_B4.innerHTML = data[3][2] // Wednesday Note
Thur_B5.innerHTML = data[4][2] // Thursday Note
Fri_B6.innerHTML = data[5][2] // Friday Note
Sat_B7.innerHTML = data[6][2] // Saturday Note
Sun_B8.innerHTML = data[7][2] // Sunday Note

//Mealplan sidebar notes
Meal_B10.innerHTML = data[8][2] // Meal1
Meal_B11.innerHTML = data[9][2] // Meal2
Meal_B12.innerHTML = data[10][2] // Meal3
Meal_B13.innerHTML = data[11][2] // Meal4
Meal_B14.innerHTML = data[12][2] // Meal5
Meal_B15.innerHTML = data[13][2] // Meal6
Meal_B16.innerHTML = data[14][2] // Meal7

//Pet sidebar notes
Sam_B18.innerHTML = data[15][2] // Samuel Note
Lea_B19.innerHTML = data[16][2] // Leaky Note
Udo_B20.innerHTML = data[17][2] // Udon Note
Ktn_B21.innerHTML = data[18][2] // Kimten Note
Shr_B22.innerHTML = data[19][2] // Shrimp Note
}
