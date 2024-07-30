import React from "react";
import JobTags from "./JobTags";
import EmployerLogo from "./EmployerLogo";
import { Link } from '@inertiajs/react';

export default function JobWideCard({ job, tags }) {

    return (
        <div className="p-4 bg-white/5 rounded-xl flex gap-x-6  border border-white/15  hover:border-blue-600 transition-colors duration-700 group  ">
            <div>
            <EmployerLogo  logo = {job.employer.logo} />
            </div>

            <div className="flex-1  flex flex-col ">
                <a href="#" className="self-start text-sm">
                    {job.employer.name}
                </a>
                <h3 className="font-bold text-xl mt-3  group-hover:text-blue-400 transition-colors duration-1000 ">
                <a href={`${job.url}`} target="_blank">{job.title}</a>
                </h3>
                <p className="text-sm text-gray-400  mt-auto ">
                    {job.schedule} - From ${job.salary}
                </p>
            </div>

            <div className="">
                {tags
                    ? tags.map((tag) => (
                          <JobTags key={tag.id} tag={tag} size="small" />
                      ))
                    : null}
            </div>
        </div>
    );
}
