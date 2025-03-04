// main.ts
// Class to manage fitness routines
var FitnessPlanner = /** @class */ (function () {
    function FitnessPlanner() {
        this.routines = [];
        this.storageKey = "fitness_routines";
        this.loadRoutines();
    }
    // Save routines to local storage
    FitnessPlanner.prototype.saveToStorage = function () {
        localStorage.setItem(this.storageKey, JSON.stringify(this.routines));
    };
    // Load routines from local storage
    FitnessPlanner.prototype.loadRoutines = function () {
        var savedRoutines = localStorage.getItem(this.storageKey);
        this.routines = savedRoutines ? JSON.parse(savedRoutines) : [];
    };
    // Add a new routine
    FitnessPlanner.prototype.addRoutine = function (name, exercises) {
        var newRoutine = {
            id: Date.now(),
            name: name,
            exercises: exercises,
        };
        this.routines.push(newRoutine);
        this.saveToStorage();
    };
    // Get all routines
    FitnessPlanner.prototype.getAllRoutines = function () {
        return this.routines;
    };
    // Remove a routine by ID
    FitnessPlanner.prototype.removeRoutine = function (id) {
        this.routines = this.routines.filter(function (routine) { return routine.id !== id; });
        this.saveToStorage();
    };
    // Clear all routines
    FitnessPlanner.prototype.clearAllRoutines = function () {
        this.routines = [];
        localStorage.removeItem(this.storageKey);
    };
    return FitnessPlanner;
}());
// Ensure 'planner' is only declared once
var planner = new FitnessPlanner();
// Example Usage (Testing without UI)
planner.addRoutine("Morning Workout", ["Push-ups", "Squats", "Jogging"]);
planner.addRoutine("Evening Stretch", ["Yoga", "Foam Rolling", "Meditation"]);
// Logging all routines (You can later connect this with UI)
console.log("All Routines:", planner.getAllRoutines());
