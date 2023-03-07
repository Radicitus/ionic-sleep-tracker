/* from the Stanford sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */

import { SleepData } from './sleep-data';

export class StanfordSleepinessData extends SleepData {
	public static ScaleValues = [undefined,//sleepiness scale starts at 1
	'Feeling active, vital, alert, or wide awake', //1
	'Functioning at high levels, but not at peak; able to concentrate', //2
	'Awake, but relaxed; responsive but not fully alert', //3
	'Somewhat foggy, let down', //4
	'Foggy; losing interest in remaining awake; slowed down', //5
	'Sleepy, woozy, fighting sleep; prefer to lie down', //6
	'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7

	private loggedValue:number;
  private notes:string;

	constructor(loggedValue:number, notes:string = "", loggedAt:Date = new Date()) {
		super();
		this.loggedValue = loggedValue;
		this.loggedAt = loggedAt;
    this.notes = notes;
	}

	override summaryString():string {
		return this.loggedValue + ": " + StanfordSleepinessData.ScaleValues[this.loggedValue];
	}

  public getNotes():string {
    return this.notes;
  }
}
