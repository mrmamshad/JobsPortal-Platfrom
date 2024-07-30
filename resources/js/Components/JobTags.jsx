import React from 'react';
import classNames from 'classnames';
import { Link } from '@inertiajs/react'; // Using Inertia's Link component

export default function JobTags({ size = 'base', tag }) {
    if (!tag || !tag.name) {
        return null;
    }

    // Base styles for the tag link
    const baseClasses = 'bg-white/5 font-bold rounded-xl hover:bg-white/25 transition-colors duration-300';

    // Size-specific styles for the tag link
    const sizeClasses = classNames({
        'px-5 py-1 text-sm': size === 'base',
        'px-3 py-1 text-2xs': size === 'small',
    });

    // Convert tag name to lowercase for the URL
    const tagNameLower = tag.name.toLowerCase();

    // Convert first letter of each word in the tag name to uppercase
    const tagNameUcwords = tag.name.replace(/\b\w/g, char => char.toUpperCase());

    return (
        <Link href={`/tags/${tagNameLower}`} className={`${baseClasses} ${sizeClasses}`}>
            {tagNameUcwords}
        </Link>
    );
}
