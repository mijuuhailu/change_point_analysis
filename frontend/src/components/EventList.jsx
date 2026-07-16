function EventList({ events, onSelectEvent}) {

    return (

        <div
            style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "20px"
            }}
        >

            <h2>Historical Events</h2>

            <ul>

                {events.map((event, index) => (

                    <li
                        key={index}
                        onClick={() => onSelectEvent(event)}
                        style={{
                            cursor: "pointer",
                            marginBottom: "8px"
                        }}
                    >
                        <strong>{event.Date}</strong>

                        {" - "}

                        {event.Event}
                    </li>

                ))}

            </ul>

        </div>

    )

}

export default EventList;