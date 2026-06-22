class Wind {
	constructor(windSpeed, windGusts, windDirection) {
		this.windSpeed = windSpeed;
		this.windGusts = windGusts;
		this.windDirection = windDirection;
	}

	getCardText() {
		// Low Wind
		if (this.windSpeed <= 5) {
			return `The Stick enjoys the Gentle Breeze. ${this.getGustText()}`;
		}

		// Medium Wind
		if (this.windSpeed <= 10) {
			return `The Stick is Leaning ${this.getWindDirection()}. ${this.getGustText}`;
		}

		// High Wind
		if (this.windSpeed > 10) {
			return `The Stick Bends ${this.getWindDirection()}. ${this.getGustText()}`;
		}
	}

	getGustText() {
		// Low Gust
		if (this.windGusts <= 5) {
			return "";
		}

		// Medium Gust
		if (this.windGusts <= 10) {
			return `It occasionally sways ${this.getWindDirection()}`;
		}

		// Large Gust
		if (this.windGusts > 10) {
			return `It occasionally gets thrown ${this.getWindDirection}`;
		}
	}

	getWindDirection() {
		if (this.windDirection <= 22.5 || this.windDirection >= 337.5) {
			return "North";
		}
		if (this.windDirection < 67.5) {
			return "North East";
		}
		if (this.windDirection < 112.5) {
			return "East";
		}
		if (this.windDirection < 157.5) {
			return "South East";
		}
		if (this.windDirection < 202.5) {
			return "South";
		}
		if (this.windDirection < 247.5) {
			return "South West";
		}
		if (this.windDirection < 292.5) {
			return "West";
		}
		if (this.windDirection < 337.5) {
			return "North West";
		}
	}
}

export default Wind;
