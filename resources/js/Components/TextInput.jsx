import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'w-3/5 mx-auto py-1 px-4 dark:border-gray-700  dark:text-gray-300 shadow-sm  bg-white/5 border border-white/20 rounded-xl  ' +
                className
            }
            ref={input}
        />
    );
});
