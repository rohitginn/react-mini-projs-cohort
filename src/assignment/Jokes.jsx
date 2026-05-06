import { useState } from 'react'

export const Jokes = () => {
    const [joke, setJoke] = useState("");


    const getJoke = async () => {
        try {
            const response = await fetch(`https://api.freeapi.app/api/v1/public/randomjokes/joke/random`);
            const data = await response.json()
            console.log(data);
            
            setJoke(data.data.content)
        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    }

  return (
    <div className='bg-neutral-950 text-white min-h-screen flex flex-col items-center justify-center space-y-4'>

        <h1 className='text-2xl font-medium'>Random Joke</h1>
        <button className='px-2.5 py-1.25 bg-sky-500 text-white rounded-xl text-base cursor-pointer hover:bg-sky-400' onClick={getJoke}>Get Joke</button>
        <p className='text-lg text-center max-w-md'>{joke}</p>
        
    </div>
  )
}
