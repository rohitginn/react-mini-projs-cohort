import { useState } from "react";

export const RandomUser = () => {
    const [data, setData] = useState({});
    const [page, setPage] = useState(1);

    const getRandomUser = async (page) => {
        try {
            const response = await fetch(
                `https://api.freeapi.app/api/v1/public/randomusers?limit=5&page=${page}`,
            );
            const res = await response.json();
            setData(res.data);
            console.log(data);
            setPage(page + 1);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen font-inter bg-neutral-950 text-white flex items-center justify-center p-6">
            <div className="w-full max-w-xl bg-neutral-800 text-neutral-100 rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-semibold text-gray-100">
                        Random User
                    </h1>
                    <button
                        onClick={() => getRandomUser(page)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                    >
                        Fetch Random User
                    </button>
                </div>

                <ul className="space-y-3 w-full flex items-center justify-center flex-col mx-auto">
                    {data &&
                        data.data &&
                        data.data.map((user) => {
                            return (
                                <li
                                    key={user.id}
                                    className="p-4 bg-neutral-700 rounded-md border border-gray-500 w-full"
                                >
                                    <div className="flex justify-between">
                                        <div className="flex-1">
                                            {Object.entries(user).map(
                                                ([key, value]) => {
                                                    // Skip nested objects for now, or handle them separately
                                                    if (
                                                        typeof value !==
                                                            "object" ||
                                                        value === null
                                                    ) {
                                                        return (
                                                            <p
                                                                key={key}
                                                                className="text-gray-300 text-sm"
                                                            >
                                                                <strong>
                                                                    {key}:
                                                                </strong>{" "}
                                                                {String(value)}
                                                            </p>
                                                        );
                                                    }
                                                    return null;
                                                },
                                            )}
                                        </div>
                                        <img
                                            src={user.picture.large}
                                            alt={user.name.first}
                                            className="rounded-lg"
                                        />
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};
