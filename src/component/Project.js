import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
    return (
        <div className='my-5 pt-4 text-center container ' id='project'>
            <h1 className='mt-5 p-5'>Projects</h1>
            <div className='row'>
                <ProjectCard />
                <ProjectCard
                title='Appointment Booking System'
                description='This is a patient doctor appointment booking Web Application.Integrated Google Calendar and Google Meet for virtual appointment bookings. Also implement a stripe payment gateway.'
                website='https://healthcareapp.netlify.app/'
                github='https://github.com/Project-Based-Learning-IT/healthcare-appointment-scheduling-app'
                />
                <ProjectCard 
                title='GitHub Clone'
                description='A web application that displays GitHub profile and Repository info
                according to the username search.'
                stack={['React', 'Firebase', 'GitHub API','Bootstrap']}
                website='https://mayankgithub.netlify.app/'
                github='https://github.com/Mayank8085/firbase-github'
                />
                <ProjectCard 
                title='JS World'
                description='Collection of mini js projects using dom-manipulation and basic
                javascript. Also basic of CSS & HTML.'
                stack={['HTML', 'CSS', 'JavaScript']}
                website='https://mayank8085.github.io/minijavascriptworld/'
                github='https://github.com/Mayank8085/minijavascriptworld'
                />

            </div>
            
            

        </div>
    );
}

export default Project;
