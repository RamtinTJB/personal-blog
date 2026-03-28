import experienceData from '@/data/experienceData'

export default function ExperienceSection() {
  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Experience
      </h2>
      <div className="space-y-8">
        {experienceData.map((exp) => (
          <div key={`${exp.company}-${exp.startDate}`} className="border-l-2 border-primary-500 pl-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">{exp.company}</span>
                <span className="mx-2 text-gray-400">·</span>
                <span className="text-gray-700 dark:text-gray-300">{exp.title}</span>
              </div>
              <div className="mt-0.5 text-sm text-gray-500 dark:text-gray-400 sm:text-right">
                {exp.startDate} – {exp.endDate}
                <span className="mx-2 hidden sm:inline">·</span>
                <span className="block sm:inline">{exp.location}</span>
              </div>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{exp.description}</p>
            {exp.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary-100 px-3 py-0.5 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
