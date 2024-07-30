import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import JobWideCard from "@/Components/JobWideCard";

export default function Search({ auth , jobs , tags}) {
  
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Searched Value" />

            <div className="mt-6 space-y-6">
                {jobs.map((job) => (
                    <JobWideCard key={job.id} job={job} tags={tags} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
