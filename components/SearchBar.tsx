
import React from 'react';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search for a podcast..."
                className="block w-full bg-slate-700 border border-slate-600 rounded-full py-3 pl-10 pr-4 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
            />
        </div>
    );
};
