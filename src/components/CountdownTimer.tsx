import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0)

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning && remainingTime > 0) {
            timer= setInterval(() => {
                setRemainingTime((prev) => prev - 1);
            }, 1000)
        }

        else if (remainingTime === 0) {
            setIsRunning(false)
        }
        return () => {
            clearInterval(timer);
        }
    }, [isRunning, remainingTime])

const handleStart = () => {
    if (time > 0) {
        setRemainingTime(time)
        setIsRunning(true)
    }
}

const handlePause = () => {
    setIsRunning(false)
}

const handleReset = () => {
    setIsRunning(false)
    setRemainingTime(0)
    setTime(0)
}

return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-black to-grey">

        <img src="/Logo.png" alt="my-logo" 
        className="absolute top-4 right-4 h-auto w-[7rem]"
        />

        <h1 className="text-4xl font-extrabold uppercase mb-6">
            Counterdown Time </h1>

            <input 
            type="number"
            className="border-2 border-grey-400 bg-transparent p-3 mb-6 text-sky-400 text-4xl rounded"
            placeholder="Enter Time in Seconds"
            value={time > 0 ? time: ""}
            onChange={(e) => setTime(Number(e.target.value))}
            />

            <div className="text-2xl font-semibold uppercase mb-6 text-red-600">
                {remainingTime} Seconds Remaining
            </div>

            <div className="flex spacing-x-6 hover:text-lg">
                <button
                onClick={handleStart} 
                className="text-white px-2 py-2 font-bold bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 mr-5 justify-center"
                >
                    Start
                </button>

                <button onClick={handlePause} 
                className="text-white px-2 py-2 font-bold bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 mr-5 justify-center"
                >
                
                    Pause
                </button>
            
                <button
                onClick={handleReset} 
                className="text-white px-2 py-2 font-bold bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 mr-5 justify-center"
                >
                    Reset
                </button>
            </div>

    </div>
)
}
export default CountdownTimer