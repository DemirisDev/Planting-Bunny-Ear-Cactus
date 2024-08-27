// Step 1: Define a Cactus class with appropriate types
class Cactus {
    type: string;
    potSize: string;
    soilType: string;
    isPlanted: boolean;
    isWatered: boolean;
    isInSunlight: boolean;

    constructor(type: string, potSize: string, soilType: string) {
        this.type = type;
        this.potSize = potSize;
        this.soilType = soilType;
        this.isPlanted = false;
        this.isWatered = false;
        this.isInSunlight = false;
    }

    // Step 2: Method to plant the cactus
    plant(): void {
        if (this.potSize && this.soilType) {
            this.isPlanted = true;
            console.log(`${this.type} is planted in a ${this.potSize} pot with ${this.soilType} soil.`);
        } else {
            console.log('Please provide a suitable pot and soil to plant the cactus.');
        }
    }

    // Step 3: Method to water the cactus
    water(): void {
        if (this.isPlanted) {
            this.isWatered = true;
            console.log(`${this.type} has been watered.`);
        } else {
            console.log('Plant the cactus first before watering.');
        }
    }

    // Step 4: Method to place the cactus in sunlight
    placeInSunlight(): void {
        if (this.isPlanted) {
            this.isInSunlight = true;
            console.log(`${this.type} is now placed in sunlight.`);
        } else {
            console.log('Plant the cactus first before placing it in sunlight.');
        }
    }

    // Step 5: Method to check the status of the cactus
    checkStatus(): void {
        console.log(`Cactus Type: ${this.type}`);
        console.log(`Is Planted: ${this.isPlanted}`);
        console.log(`Is Watered: ${this.isWatered}`);
        console.log(`Is in Sunlight: ${this.isInSunlight}`);
    }
}

// Step 6: Use the Cactus class to simulate the planting process
const myCactus = new Cactus('Bunny Ear Cactus', 'small', 'cactus mix');

myCactus.plant();          // Plant the cactus
myCactus.water();          // Water the cactus
myCactus.placeInSunlight(); // Place the cactus in sunlight

myCactus.checkStatus();    // Check the status of the cactus
