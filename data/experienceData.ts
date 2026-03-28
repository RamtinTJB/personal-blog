export type Experience = {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
  skills: string[]
}

const experienceData: Experience[] = [
  {
    title: 'Software Engineering Intern',
    company: 'Jane Street',
    location: 'New York, NY',
    startDate: 'Jun 2026',
    endDate: 'Sep 2026',
    description:
      "Incoming Intern @ Summer 2026",
    skills: [],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Amazon',
    location: 'Seattle, WA',
    startDate: 'Aug 2025',
    endDate: 'Dec 2025',
    description:
      "DynamoDB Global Tables data plane team. Built an in-memory E2E testing framework in Java simulating multi-region replication locally, plus a fault injection layer for outages, network partitions, and latency. Reproduced real production bugs and got adopted by other teams.",
    skills: ['Java', 'DynamoDB', 'Log4j2', 'Distributed Systems'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Apple',
    location: 'San Diego, CA',
    startDate: 'May 2025',
    endDate: 'Aug 2025',
    description:
      "Darwin Process Management (CoreOS) team. Built a Mach-based service launcher in C and Swift that reads a JSON dependency graph and auto-wires IPC between services. Replaced manual bootstrap registration with a dynamic handshake protocol for exchanging Mach send/receive rights.",
    skills: ['C', 'Swift', 'Mach IPC', 'launchd']
  },
  {
    title: 'Software Engineering Intern',
    company: 'Capital One',
    location: 'Plano, TX',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    description:
      "Built and shipped a payment component processing $14M across 100k customers. Quadrupled Angular test coverage with Cypress and Cucumber, hitting 100% code coverage. Wrote company-wide docs on a new browser testing requirement that cut setup time by 50%.",
    skills: ['Angular', 'Java Spring', 'AWS', 'Cucumber'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Cubic Corporation',
    location: 'San Diego, CA',
    startDate: 'Jun 2023',
    endDate: 'Sep 2023',
    description:
      "Collaborated with two other devs to build a web app as part of a $50M enterprise project. Also improved the SonarQube score of a 200k+ LOC C++ codebase by fixing a large number of code smells.",
    skills: ['C++', 'JavaScript', 'SonarQube'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'General Atomics',
    location: 'San Diego, CA',
    startDate: 'Jan 2023',
    endDate: 'May 2023',
    description:
      "Built a Python log navigator using Linux syscalls and Redis that saved operators ~30 min/day navigating Data Acquisition and Plasma Control logs. Added two new experiment metrics in Python that check thresholds on each fusion shot and alarm operators when crossed. Also built a C++ Qt GUI app for operators to control a reactor component that previously had no dedicated interface.",
    skills: ['Python', 'C++', 'Qt Creator', 'Linux', 'Redis'],
  },
]

export default experienceData
