import { useState } from "react";

export const RandomCat = () => {
    const [data, setData] = useState("");

    const getJoke = async () => {
        try {
            const response = await fetch(
                `https://api.freeapi.app/api/v1/public/cats/cat/random`,
            );
            const data = await response.json();
            console.log(data);

            setData(data.data);
        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    };

    return (
        <div className="bg-neutral-950 text-white min-h-screen flex flex-col items-center justify-center space-y-4">
            <h1 className="text-2xl font-medium">Random Cat</h1>
            <button
                className="px-2.5 py-1.25 bg-sky-500 text-white rounded-xl text-base cursor-pointer hover:bg-sky-400"
                onClick={getJoke}
            >
                Get Cat
            </button>

                    { data && (
                        <div className="flex flex-col items-center space-y-2 max-w-xl">
                            <h2 className="text-xl font-bold">{data.name}</h2>
        <p className="text-sm text-gray-300">{data.description}</p>
        <p><strong>Origin:</strong> {data.origin}</p>
        <p><strong>Temperament:</strong> {data.temperament}</p>
                        </div>
                    )}
                
        </div>
    );
};
