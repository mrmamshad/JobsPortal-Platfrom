import JobHading from "@/Components/JobHading";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        salary: '',
        location: '',
        schedule: 'Part Time',
        url: '',
        featured: false,
        tags: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('store-job'), {
            onFinish: () => reset(),
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Create" />
            <h1 className="text-xl font-semibold text-center hover:text-green-500 transition-colors duration-500  ">Create a Job</h1>
            <form onSubmit={submit} className=" mt-10 space-y-8">
                <div>
                    <InputLabel htmlFor="title" value="Title" />
                    <TextInput
                        id="title"
                        name="title"
                        value={data.title}
                        className="mt-1 block "
                        onChange={(e) => setData('title', e.target.value)}
                        required
                    />
                    <InputError message={errors.title} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="salary" value="Salary" />
                    <TextInput
                        id="salary"
                        name="salary"
                        value={data.salary}
                        className="mt-1 block "
                        onChange={(e) => setData('salary', e.target.value)}
                        required
                    />
                    <InputError message={errors.salary} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="location" value="Location" />
                    <TextInput
                        id="location"
                        name="location"
                        value={data.location}
                        className="mt-1 block "
                        onChange={(e) => setData('location', e.target.value)}
                        required
                    />
                    <InputError message={errors.location} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="schedule" value="Schedule" />
                    <select
                        id="schedule"
                        name="schedule"
                        value={data.schedule}
                         className="mt-1 block w-3/5 mx-auto py-1 px-4 dark:border-gray-700  text-gray-500 shadow-sm  bg-white/5 border border-white/20 rounded-xl "
                        onChange={(e) => setData('schedule', e.target.value)}
                    >
                        <option>Part Time</option>
                        <option>Full Time</option>
                        <option>Remote</option>
                    </select>
                    <InputError message={errors.schedule} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="url" value="URL" />
                    <TextInput
                        id="url"
                        name="url"
                        value={data.url}
                        className="mt-1 block "
                        onChange={(e) => setData('url', e.target.value)}
                        required
                    />
                    <InputError message={errors.url} className="mt-2" />
                </div>

                <div className="mt-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="featured"
                            checked={data.featured}
                            className="form-checkbox"
                            onChange={(e) => setData('featured', e.target.checked)}
                        />
                        <span className="ml-2">Feature (Costs Extra)</span>
                    </label>
                    <InputError message={errors.featured} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="tags" value="Tags (comma separated)" />
                    <TextInput
                        id="tags"
                        name="tags"
                        value={data.tags}
                        className="mt-1 block "
                        onChange={(e) => setData('tags', e.target.value)}
                        required
                    />
                    <InputError message={errors.tags} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4 mr-20 ">
                    <PrimaryButton className="ms-4  " disabled={processing}>
                        Publish
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
