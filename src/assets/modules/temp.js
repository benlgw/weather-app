class Temp {
	constructor(temperature, feelsLike) {
		this.temperature = Math.floor(temperature);
		this.feelsLike = Math.floor(feelsLike);
	}

	getCardText() {
		// Freezing
		if (this.temperature <= 0) {
			return (
				`The Stick is Frozen Solid. It's ${this.temperature}°C` +
				(this.temperature === this.feelsLike
					? ""
					: ` but feels like ${this.feelsLike}°C`)
			);
		}

		// Cold
		if (this.temperature <= 10) {
			return (
				`The Stick is Cold. It's ${this.temperature}°C` +
				(this.temperature === this.feelsLike
					? ""
					: ` but feels like ${this.feelsLike}°C`)
			);
		}

		// Cool
		if (this.temperature <= 15) {
			return (
				`The Stick is Comfertable. It's ${this.temperature}°C` +
				(this.temperature === this.feelsLike
					? ""
					: ` but feels like ${this.feelsLike}°C`)
			);
		}

		// Warm
		if (this.temperature <= 20) {
			return (
				`The Stick is Warm. It's ${this.temperature}°C` +
				(this.temperature === this.feelsLike
					? ""
					: ` but feels like ${this.feelsLike}°C`)
			);
		}

		// Hot
		if (this.temperature > 20) {
			return (
				`The Stick is Sweating. It's ${this.temperature}°C` +
				(this.temperature === this.feelsLike
					? ""
					: ` but feels like ${this.feelsLike}°C`)
			);
		}
	}
}

export default Temp;
