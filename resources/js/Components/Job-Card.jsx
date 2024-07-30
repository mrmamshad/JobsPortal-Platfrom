import React from 'react';
import JobTags from './JobTags';
import EmployerLogo from './EmployerLogo';
import { Link } from '@inertiajs/react';

const maxTag = 3;
export default function JobCard({ job, tags }) {
    console.log(job.employer.logo);

  return (
    <div className="p-4 bg-white/5 rounded-xl flex flex-col text-center border border-white/15 hover:border-blue-600 transition-colors duration-700 group">
      <div className="self-start text-sm">{job.employer.name}</div>
      <div className="py-8">
        <h3 className='group-hover:text-blue-600 text-lg font-bold transition-colors duration-1000'>
          {
            <a href={`${job.url}`} target='_blank' >{job.title}</a>
          }
        </h3>
        <p className='text-sm text-gray-400 mt-4'>{job.schedule} - From ${job.salary}</p>
      </div>
      <div className="flex justify-between items-center mt-auto">
      <div className="gap-1 flex">
                    {tags.slice(0, maxTag).map(tag => ( // Modify the map function to slice the array
                        <JobTags key={tag.id} tag={tag} size="small" />
                    ))}
                </div>
        <EmployerLogo width={42} logo = {job.employer.logo} />
      </div>
    </div>
  );
}
