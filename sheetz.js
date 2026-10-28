const Papa = require("papaparse");

Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQEQoH_G0h3KMjMtSXhYV2FIAbJGDRQws3bksoAPKpV1kAS2y0g1DbjE6l3_opl98iwTGdwNLuqnK8Y/pub?gid=0&single=true&output=csv", {
    download: true,
    header: true,
    complete: (results) => {
        const data = results.data;
        console.log(data);
    }
});
