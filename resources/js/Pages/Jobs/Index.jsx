import JobCard from "@/Components/Job-Card";
import JobHading from "@/Components/JobHading";
import JobTags from "@/Components/JobTags";
import JobWideCard from "@/Components/JobWideCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { LiaSearchSolid } from "react-icons/lia";

export default function Index({ auth, tags , PopulerJobs , recentjobs}) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Home" />
            <div className="space-y-10">
                <section className="text-center pt-10">
                    <h1 className="text-3xl font-bold">
                        Let's find a Job for you
                    </h1>
                    <form action="/search" className="relative max-w-xl mx-auto mt-6">
                        <input
                            type="text"
                            name="q"
                            placeholder="Software Engineer...."
                            className="w-full py-3 px-4 pr-12 bg-white/5 border border-white/20 rounded-xl relative"
                        />
                        <LiaSearchSolid className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </form>
                </section>

                <section className="pt-6">
                    <JobHading name="Popular Jobs" />
                    <div className="grid lg:grid-cols-3 gap-8 mt-6">
                        {PopulerJobs.map((job) => (
                            <JobCard key={job.id} job={job} tags={tags} />
                        ))}
                    </div>
                </section>

                <section>
                    <JobHading name="Tags" />
                    <div className="mt-6 space-x-2">
                        {tags.map((tag) => (
                            <JobTags key={tag.id} tag={tag} />
                        ))}
                    </div>
                </section>

                <section>
                    <JobHading name="Recent Jobs" />
                    <div className="mt-6 space-y-6">
                        {recentjobs.map((job) => (
                            <JobWideCard key={job.id} job={job} tags={tags} />
                        ))}
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
