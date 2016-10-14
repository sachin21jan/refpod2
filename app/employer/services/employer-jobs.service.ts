import { Injectable }       from '@angular/core';
import { Http }             from '@angular/http';
import { EmployerJob }          from '../jobs/employer-job';

@Injectable()
export class EmployerJobsService {
    private _url = "http://localhost:3000/employerjobs/";

    favorites : string[] = [];

    addToFavorites(jobHeading) {        
        if(this.favorites.find(i => i == jobHeading) == undefined){
            this.favorites.unshift(jobHeading);
        }
    }

    getFavorites() : string[]{
        return this.favorites;
    }

    listCompanyJobs() : EmployerJob[] { 
        return [ 
            new EmployerJob(
            "Programmer Analyst - Java Developer", 
            "2", 
            "Developer", 
            "4", 
            "", 
                [
                    "Design and Develop high scale SharePoint 2010/2013 intranet, internet facing sites",
                    "Work on research and development of latest SharePoint tools and technologies",
                    "Should have knowledge in architecture and design of SharePoint implementations using best practices"      
                ]
            ),

            new EmployerJob(
            "Senior Programmer Analyst", 
            "6", 
            "Sr. Analyst", 
            "4", 
            "", 
                [
                    "Expertise in LAMP and ROR Environment.",
                    "Agile and waterfall life cycles.",
                    "MY SQL, PostgreSQL, SQL Server"      
                ]
            ),

            new EmployerJob(
            "Sales Co Ordinator", 
            "1", 
            "Sales Executive", 
            "10", 
            "", 
                [
                    "Contact qualified leads by telephone, network, or personally.",
                    "Setup meetings with leads to promote and win business.",
                    "Achieve agreed-upon targets of lead qualification and revenue generation every month."      
                ]
            )
        ];       
    }

    
    listFriendsJobs():EmployerJob[] { 
        return [ 
            new EmployerJob(
            "Software Architect, Professional Services", 
            "1", 
            "Software Architect", 
            "12", 
            "Dealer.com", 
                [
                    "Collaborate across business, engineering and product stakeholders to drive holistic technology implementations while maintaining a constant focus on delivering client value",
                    "Lead application and software/solution architecture practice across engineering scrum teams while exposing project and solution related architectural issues to the wider architecture team",
                    "Lead and participate in the conceptual phases of identifying and solving business problems and initiatives",
                    "Facilitate integration, alignment and excellent communication within the solution group, and across the enterprise",
                    "Work with other architects and senior technologists to curate and maintain a technology portfolio for the group that is aligned with the goals of the enterprise",
                    "Provide educational/mentoring resources to architecture and engineering teams",
                    "Define and evangelize design and modeling methodologies in an Enterprise Agile environment",
                    "Consult with architecture, development, infrastructure and operational teams to address issues relating to application architecture, such as performance or availability, and recommend solutions",
                    "Work across the solution group to evaluate emerging technologies, and drive the evolution of current technologies, defining a roadmap which increases the value of technology to the business, while collaborating with architects across the enterprise to accelerate learning",
                    "Performs other related duties as assigned"      
                ]
            ),

            new EmployerJob(
            "Senior Programmer Analyst", 
            "2", 
            "Sr. Analyst", 
            "4", 
            "Intel Corporation", 
                [
                    "Expertise in LAMP and ROR Environment.",
                    "Agile and waterfall life cycles.",
                    "MY SQL, PostgreSQL, SQL Server"      
                ]
            ),

            new EmployerJob(
            "Sales Co Ordinator", 
            "1", 
            "Sales Executive", 
            "10", 
            "Lenovo Group Ltd", 
                [
                    "Contact qualified leads by telephone, network, or personally.",
                    "Setup meetings with leads to promote and win business.",
                    "Achieve agreed-upon targets of lead qualification and revenue generation every month."      
                ]
            )
        ];       
    }

    constructor(private _http: Http){
    }

    getCompanyJobs(): EmployerJob[] {
         return this.listCompanyJobs();
    }

    getFriendsJobs(): EmployerJob[] {
        return this.listFriendsJobs();
    }
}