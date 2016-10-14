export class UserJob {
    heading : string;
    timeElapsed: string;
    position: string;
    experience: string;
    company: string;
    skillRequirements: string[];

    constructor(heading, timeElapsed, position, experience, company, skillRequirements){
        this.heading = heading;
        this.timeElapsed = timeElapsed;
        this.position = position;
        this.experience = experience;
        this.company = company;
        this.skillRequirements = skillRequirements;
    }
}