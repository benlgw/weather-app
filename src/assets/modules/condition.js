class Condition {
	constructor(condition) {
		this.condition = condition;
	}

	getCardtext() {
		// Clear
		if (this.condition === "Clear") {
			return "The Stick looks Fabulous today. It must be Clear Skies";
		}

		// Cloudy
		if (
			this.condition.includes("cloudy") ||
			this.condition === "Overcast" ||
			this.condition.includes("Sky")
		) {
			return "The Stick is Darker than usual. It must be Cloudy";
		}

		// Drizzle
		if (
			this.condition.includes("Drizzle") &&
			!this.condition.includes("Freezing")
		) {
			return "The Stick is Damp. It must be Drizzling";
		}

		// Rain
		if (
			(this.condition.includes("Rain") ||
				this.condition.includes("Precipitation")) &&
			(!this.condition.includes("Freezing") ||
				!this.condition.includes("Thunderstorm") ||
				!this.condition.includes("Snow"))
		) {
			return "This Stick is Wet. It must be Raining";
		}

		// Snow
		if (this.condition.includes("Snow")) {
			return "The Stick is White. It must be Snowing";
		}

		// Freezing Rain
		if (
			this.condition.includes("Freezing") &&
			!this.condition.includes("Fog")
		) {
			return "The Stick is Wet... Wait no it's Icey. There must be freezing rain";
		}

		// Hail
		if (this.condition.includes("Hail")) {
			return "Is someone chucking Ice at the Stick? Maybe it's just Hailstone";
		}

		// Ice
		if (this.condition === "Ice") {
			return "Oh No! The Stick is Frozen. It must be Icey";
		}

		// Fog
		if (
			this.condition.includes("Fog") ||
			this.condition === "Mist" ||
			this.condition === "Smoke Or Haze"
		) {
			return "The Stick... Where is the Stick? It must be Foggy";
		}

		// Storm
		if (
			this.condition.includes("Thunder") ||
			this.condition.includes("Lightning")
		) {
			return "The Stick is Terrified. There must be a Storm";
		}

		// Tornado
		if (this.condition.includes("Tornado")) {
			return "The Stick holds on for Dear Life! There's a Tornado about";
		}

		// Squalls
		if (this.condition === "Squalls") {
			return "Suddenly the Stick blows away! It must be Windy";
		}

		// Dust Storm
		if (this.condition.includes("Dust")) {
			return "The Stick is covered in Dust. There must be a Dust Storm";
		}

		return "The Stick is just Sitting there. It must be a Normal Day";
	}
}

export default Condition;
