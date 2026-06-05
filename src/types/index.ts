// Hold Apllication Types Here and Exports.

export type ApplicationState =  'Applied' | 'Interviewing' | 'Rejected' | 'Offered';

export interface Application {
    id: string;
    company: string;
    position: string;
    dateApplied: Date;
    state: ApplicationState;
    Location?: string;
    TravelTime?: number; // in minutes
    notes?: string;
};

export type ApplicationFormData = Omit<Application, 'id'>; // Exclude 'id' when creating a new application
