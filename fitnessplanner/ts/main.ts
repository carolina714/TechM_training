// main.ts

// Interface for a fitness routine
interface Routine {
    id: number;
    name: string;
    exercises: string[];
}

// Class to manage fitness routines
class FitnessPlanner {
    private routines: Routine[] = [];
    private storageKey = "fitness_routines";

    constructor() {
        this.loadRoutines();
    }

    // Save routines to local storage
    private saveToStorage(): void {
        localStorage.setItem(this.storageKey, JSON.stringify(this.routines));
    }

    // Load routines from local storage
    private loadRoutines(): void {
        const savedRoutines = localStorage.getItem(this.storageKey);
        this.routines = savedRoutines ? JSON.parse(savedRoutines) : [];
    }

    // Add a new routine
    addRoutine(name: string, exercises: string[]): void {
        const newRoutine: Routine = {
            id: Date.now(),
            name,
            exercises,
        };
        this.routines.push(newRoutine);
        this.saveToStorage();
    }

    // Get all routines
    getAllRoutines(): Routine[] {
        return this.routines;
    }

    // Remove a routine by ID
    removeRoutine(id: number): void {
        this.routines = this.routines.filter(routine => routine.id !== id);
        this.saveToStorage();
    }

    // Clear all routines
    clearAllRoutines(): void {
        this.routines = [];
        localStorage.removeItem(this.storageKey);
    }
}

// Ensure 'planner' is only declared once
const planner = new FitnessPlanner();

// Example Usage (Testing without UI)
planner.addRoutine("Morning Workout", ["Push-ups", "Squats", "Jogging"]);
planner.addRoutine("Evening Stretch", ["Yoga", "Foam Rolling", "Meditation"]);

// Logging all routines (You can later connect this with UI)
console.log("All Routines:", planner.getAllRoutines());
