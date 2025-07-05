export default async function handler(req, res) {
    const {city} = req.query;

    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    try {
        const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        );

        if(!weatherRes.ok) return res.status(404).json({message: "City Not Found!"});

        const weatherData = await weatherRes.json();

        res.status(200).json(weatherData);

    } catch (error) {
        res.status(500).json({message: "Server Error"+ error})
    }
}