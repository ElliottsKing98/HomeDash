// Data for Steroid Schedule
const steroidSchedule = {
  MonSte: "No Steroid",
  TueSte: "Steroid Day",
  WedSte: "No Steroid",
  ThurSte: "No Steroid",
  FriSte: "Steroid"
};

// Data for Meal Plan
const mealPlan = {
  Rogue1: "Takeout",
  Rogue2: "Bits",
  Rogue3: "Thanksgiving Din",
  Rogue4: "Thanksgiving Leftovers",
  Rogue5: "Bits",
  Rogue6: "Baked Salmon & Couscous",
  Rogue7: "Bits"
};

// Data for Updates
const updates = {
  Samuel: "A bum",
  Leaky: "Starting to spit out steroids",
  Udon: "Perfect, no notes"
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
