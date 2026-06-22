class Temp {
	constructor(temperature, feelsLike) {
		this.temperature = temperature;
		this.feelsLike = feelsLike;
	}

	getCardText() {
		// Freezing
		if (this.temperature <= 0) {
			return `The Stick is Frozen Solid. It's ${this.temperature} but feels like ${this.feelsLike}`;
		}

		// Cold
		if (this.temperature <= 10) {
			return `The Stick is Cold. It's ${this.temperature} but feels like ${this.feelsLike}`;
		}

		// Cool
		if (this.temperature <= 15) {
			return `The Stick is Comfertable. It's ${this.temperature} but feels like ${this.feelsLike}`;
		}

		// Warm
		if (this.temperature <= 20) {
			return `The Stick is Warm. It's ${this.temperature} but feels like ${this.feelsLike}`;
		}

		// Hot
		if (this.temperature > 20) {
			return `The Stick is Sweating. It's ${this.temperature} but feels like ${this.feelsLike}`;
		}
	}
}

export default Temp;
