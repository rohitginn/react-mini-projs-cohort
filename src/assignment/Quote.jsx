import { useState } from "react";

export const Quote = () => {
    const [data, setData] = useState([]);
    const call = async (page) => {
        try {
            const response = await fetch(`https://api.freeapi.app/api/v1/public/quotes?page=${page}&limit=10`);
            const result = await response.json();
            setData(result.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [page, setPage] = useState(1);
    const previous = async () => {
        const newPage = page - 1;
        setPage(newPage);
        await call(newPage);
    };
    const next = async () => {
        const newPage = page + 1;
        setPage(newPage);
        await call(newPage);
    };

    return (
        <div className="min-h-screen font-inter bg-neutral-950 text-white flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-neutral-800 text-neutral-100 rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-semibold text-gray-100">Quotes</h1>
                    <button
                        onClick={() => call(page)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Fetch Quotes
                    </button>
                </div>

                <ul className="space-y-3">
                    {data.map((item) => {
                        return (
                            <li key={item.id} className="p-4 bg-neutral-700 rounded-md border border-gray-500">
                                <p className="text-gray-300">{item.content}</p>
                                <p className="mt-2 text-sm text-gray-400">— {item.author}</p>
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-6 flex items-center justify-center space-x-4">
                    <button
                        onClick={previous}
                        disabled={page === 1}
                        className="px-3 py-2 bg-neutral-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <span className="text-sm font-medium text-gray-100">{page}</span>
                    <button onClick={next} className="px-3 py-2 bg-neutral-600 rounded-md hover:bg-neutral-500">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
