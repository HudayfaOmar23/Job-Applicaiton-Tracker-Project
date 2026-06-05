

import { useState, useEffect } from 'react';
import { Application, ApplicationFormData } from '../types';

const STORAGE_KEY = 'jobApplications';

function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function useApplications () {

const [applications, setApplications] = useState<Application[]>([]);

const [applicatoins, setApplications] = useState<Application[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
});

useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}, [applications]);

function addApplication(data: ApplicationFormData) {
    const newItem: Application = {
        ...data,
        id: generateId(),
        createdAt: new Date ().toISOString(),
    };
    setApplications(prev => [...prev, newItem]);
}

function updateApplication(id: string, updatedData: ApplicationFormData) {
    setApplications(prev =>
        prev.map(item => item.id === id ? { ...item, ...updatedData } : item)
    );
}

function deleteApplication(id: string) {
    setApplications(prev => prev.filter(item => item.id !== id));
    }


return { applications, addApplication, updateApplication, deleteApplication };
}