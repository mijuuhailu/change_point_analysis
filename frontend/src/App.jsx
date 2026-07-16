import { useEffect, useState } from "react"
import StatsCard from "./components/StatsCard"
import PriceChart from "./components/PriceChart"
import EventList from "./components/EventList"
import axios from "axios"

function App(){

  const [prices, setPrices] = useState([])
  const [changePoint, setChangePoint] = useState({})
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [search , setSearch] = useState("")
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");



  useEffect(() =>{
    axios.get("http://127.0.0.1:5000/price")
    .then((response) =>{
      setPrices(response.data)
    })

    axios.get("http://127.0.0.1:5000/change-point")
    .then((response) =>{
      setChangePoint(response.data)
    })

    axios.get("http://127.0.0.1:5000/events")
    .then((response) =>{
      setEvents(response.data)
    })


  }, []);

  const filteredEvents = events.filter(event=>
    event.Event.toLowerCase().includes(search.toLowerCase())
  )

  const filteredPrices = prices.filter(price => {

  const date = new Date(price.Date);

  if(startDate && date < new Date(startDate))

  return false;

  if(endDate && date > new Date(endDate))

  return false;

  return true;

  });

    return(
    <div>
      <h1> Brent Oil Dashboard</h1>
      <h3>Total Records: {prices.length}</h3>
      <StatsCard totalRecords={prices.length} changePoint={changePoint}
      ></StatsCard>
      {selectedEvent && (

        <div

        style={{

        background:"#f4f4f4",

        padding:"15px",

        marginTop:"20px",

        borderRadius:"10px"

        }}

        >

        <h3>Selected Event</h3>

        <p>

        <strong>Date:</strong>

        {selectedEvent.Date}

        </p>

        <p>

        <strong>Event:</strong>

        {selectedEvent.Event}

        </p>

        </div>

        )}

      <input

        type="date"

        value={startDate}

        onChange={(e)=>setStartDate(e.target.value)}

        />

      <input

        type="date"

        value={endDate}

        onChange={(e)=>setEndDate(e.target.value)}

      />
      <PriceChart prices={filteredPrices}/>

      <input

        type="text"

        placeholder="Search events..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        style={{

        padding:"10px",

        width:"100%",

        marginBottom:"20px"

        }}

        />
      <EventList events={filteredEvents} onSelectEvent={setSelectedEvent}/>
    </div>
  )
}

export default App