// Data for Steroid Schedule
const steroidSchedule = {
  MonSte: "No Steroid",
  TueSte: "Steroid Day",
  WedSte: "No Steroid",
  ThurSte: "Steroid Day",
  FriSte: "No Steroid"
};

// Data for Meal Plan
const mealPlan = {
  Rogue1: "Butternut Squash Mac n Cheese",
  Rogue2: "Bruschetta Chicken",
  Rogue3: "Ramen w/ Tofu",
  Rogue4: "Beef Stew",
  Rogue5: "Gnocchi Skillet",
  Rogue6: "Pita Chicken",
  Rogue7: "Soup & Sanmmich"
};

// Data for Updates
const updates = {
  Samuel: "Has training on Sunday",
  Leaky: "Still sick and getting steroid",
  Udon: "Just ate, is in shed"
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
