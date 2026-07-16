import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"

function PriceChart({ prices = [] }) {
    if (!prices.length) {
        return <p>No price data available.</p>
    }

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={prices}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Price" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default PriceChart
