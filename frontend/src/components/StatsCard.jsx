function StatsCard({ totalRecords, changePoint}){

    return(
        <div
            style ={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px"
            }}
        >
        <h2> Summary</h2>
        <p><strong>Total Records:</strong> {totalRecords}</p>
        <p><strong>Average Before:</strong> ${changePoint.price_before}</p>
        <p><strong>Average After:</strong> ${changePoint.price_after}</p>
        <p><strong>Increase:</strong> {changePoint.increase_percent}%</p>
        </div>
    )
}

export default StatsCard