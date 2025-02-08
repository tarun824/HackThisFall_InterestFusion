import React, { useState } from "react";

const CommunityEvents = () => {
  const [events, setEvents] = useState([]);

  // Function to handle adding a new event
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Community Events</h1>
      </header>

      {/* Main Content */}
      <main className="p-4">
        {/* Events Section */}
        <section id="events" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <EventList events={events} />
        </section>

        {/* Create Event Section */}
        <section id="create-event">
          <h2 className="text-xl font-semibold mb-4">Create a New Event</h2>
          <CreateEventForm addEvent={addEvent} />
        </section>
      </main>
    </div>
  );
};

// Component to display the list of events
const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.length > 0 ? (
        events.map((event, index) => <EventCard key={index} event={event} />)
      ) : (
        <p className="text-gray-600">No events available. Create one!</p>
      )}
    </div>
  );
};

// Component to display a single event card
const EventCard = ({ event }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
      <p className="text-gray-700 mb-2">{event.description}</p>
      <span className="text-sm text-blue-600 font-medium">
        Date: {event.date}
      </span>
    </div>
  );
};

// Component for the "Create Event" form
const CreateEventForm = ({ addEvent }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new event
    addEvent({
      title: eventTitle,
      description: eventDescription,
      date: eventDate,
    });

    // Clear the form
    setEventTitle("");
    setEventDescription("");
    setEventDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg shadow-lg p-6 space-y-4"
    >
      <input
        type="text"
        placeholder="Event Title"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        required
      />
      <textarea
        placeholder="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        required
      ></textarea>
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Event
      </button>
    </form>
  );
};

export default CommunityEvents;
