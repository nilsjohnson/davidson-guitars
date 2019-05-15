export default class DAO {
	constructor() {
		let Strings = {
			name: "Davidson Guitar",
			header: "Quality Repair and Restoration of all Fretted Instruments",
			description: "Owen Davidson is a luthier located Northfield Massachuessets, specializing in guitar resoration, refinishing and custom inlay work. With professional experience since 1989, you can be assured of Owen's commitment to high quality work, knowlege and expertice.",
			hours: [ "Tues-Fri | 10:00 - 5:00", "Sat | 10:00 - 4:00" ],
			email: "owen@davidsonguitars.com",
			phoneNum: "(413) 498-4400",
			addr_1: "62A Main St.",
			addr_2: "Northfield, MA 01260",

			//for footer
			footer: "Davidson Guitars - 2019 ©",
	
			// for reverb blerb
			reverbHeader: "Check out current inventory online!",
			reverbDescription: ""
		};
	}

	getString(key, callback) {
		callback(Strings[key]);
	}

}