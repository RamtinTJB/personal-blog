import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import experienceData from '@/data/CV/experienceData'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <h1>Experience</h1>
        <div className="flex flex-col gap-y-2">
          {experienceData.map((exp, idx) => (
            <div className="w-full p-3 border-2 border-teal-500 rounded-md flex gap-5 items-center">
              <img className="m-0 w-16 rounded-full" src={`/static/images/${exp.logo}`}/>
              <div className="flex flex-col w-full">
                <div className="flex justify-between font-bold">
                  <span>{exp.company}</span>
                  <span>{exp.date}</span>
                </div>
                <div className="flex justify-between italic">
                  <span>{exp.jobTitle}</span>
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AuthorLayout>
    </>
  )
}
