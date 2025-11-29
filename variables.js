// Data for Steroid Schedule
const steroidSchedule = {
  MonSte: "Steroid Day",
  TueSte: "No Steroid",
  WedSte: "No Steroid",
  ThurSte: "Steroid Day",
  FriSte: "No Steroid"
};

// Data for Meal Plan
const mealPlan = {
  Rogue1: "Grilled Cheese & Tomato Soup",
  Rogue2: "Salmon & Couscous",
  Rogue3: "Pesto Chicken & Broccoli",
  Rogue4: "Jar Chili & Cornbread",
  Rogue5: "Bits",
  Rogue6: "Bits",
  Rogue7: "Bits"
};

// Data for Updates
const updates = {
  Samuel: "A bum, cytopoint on 11/14/25",
  Leaky: "Starting to spit out steroids",
  Udon: "Ate on 11/28/25 & tank cleaned on 9/27/25"
};

// Function to update DOM
function updateContent(data) {
  for (const id in data) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = data[id];
    }
  }
}

// Apply updates
updateContent(steroidSchedule);
updateContent(mealPlan);
updateContent(updates);
