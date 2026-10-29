import Papa from "https://esm.sh/papaparse@5.3.0";

// Clear Console
console.clear();

// Variable declarations
let data = undefined;
let monSte = document.getElementById("monSte");
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
  //udon
  monSteb2.innerHTML = data[1][2]
  //leaky
  //sam
  //kimten
  //shrimpz
}
