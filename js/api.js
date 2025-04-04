// API Configuration
const API_URL = 'https://dvkvmjdefaytycdbsntd.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2a3ZtamRlZmF5dHljZGJzbnRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MjE1MjAsImV4cCI6MjA1OTI5NzUyMH0.wYHbfTAJyIp2CLfU4LcIJfJAMrVq41zUK6kw5GZ01ts';

// API Service
const api = {
    // Headers for API requests
    headers: {
        'apikey': API_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
    },

    // Fetch all students
    async getStudents() {
        try {
            const response = await fetch(`${API_URL}/rest/v1/alumno`, {
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error('Failed to fetch students');
            }
            console.log(response);
            return await response.json();
        } catch (error) {
            console.error('Error fetching students:', error);
            throw error;
        }
    },

    async createNewStudent(student) {
        try {
            const response = await fetch(`${API_URL}/rest/v1/alumno`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(student)
            });
            if (!response.ok) {
                throw new Error('Failed to add student');
            }

            return await response.json();
        } catch (error) {
            console.log('error adding student:', error);
            throw error;
        }

    },

    async updateStudent(code, student) {
        try {
            const response = await fetch(`${API_URL}/rest/v1/alumno?codigo=eq${code}`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify(student)
            });

            if (!response.ok) {
                throw new Error('Failed to update student');
            }

            return await response.json();
        } catch (error) {
            console.error(`Error updating student with code ${code}:`, error);
            throw error;
        }
    },
    async deleteStudent(id) {
        try {
            const response = await fetch(`${API_URL}/student?code+=eq.${id}`, {
                method: 'DELETE',
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error('Failed to delete student');
            }
            return await response.json();
        } catch (error) {
            console.error(`Error deleting student with id ${id}:`, error);
            throw error;
        }
    },
    async getStudent(code){
        try {
            const response = await fetch(`${API_URL}/rest/v1/alumno?codigo=eq.${code}&select=*`, {
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error('Failed to fetch student');
            }
            const data = await response.json();
            return data[0]|| null;
        } catch (error) {
            console.error(`Error fetching student with the code ${code}:`, error);
            throw error;
        }
    }
}