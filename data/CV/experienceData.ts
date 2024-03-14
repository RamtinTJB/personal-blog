type Experience = {
    company: string,
    date: string,
    location: string,
    jobTitle: string,
    logo: string,
    link: string
}

const experienceData: Experience[] = [
    {
        company: 'Capital One',
        date: 'Jun 2024 - Aug 2024',
        location: 'Plano, TX',
        jobTitle: 'Software Engineer Intern',
        logo: 'capital-one-logo.jpeg',
        link: 'https://www.capitalonecareers.com/internship-programs'
    },
    {
        company: 'Cubic Transportation Systems',
        date: 'Jun 2023 - Sep 2023',
        location: 'San Diego, CA',
        jobTitle: 'Software Engineer Intern',
        logo: 'cubic-transportation-systems.jpeg',
        link: 'https://www.cubic.com/transportation'
    },
    {
        company: 'General Atomics / DIII-D',
        date: 'Jan 2023 - May 2023',
        location: 'San Diego, CA',
        jobTitle: 'Software Engineer Intern',
        logo: 'general-atomics.png',
        link: 'https://www.ga.com/magnetic-fusion/diii-d'
    },
    {
        company: 'San Diego Mesa College',
        date: 'Feb 2022 - May 2023',
        location: 'San Diego, CA',
        jobTitle: 'Math Peer Mentor',
        logo: 'mesa-college.png',
        link: 'https://www.sdmesa.edu/academics/stem/stem-mentors.shtml'
    }
]

export default experienceData;