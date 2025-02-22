const { FusionEvent } = require('../models/fusionEvent.model');

// Create Event
const createEvent = async (req, res) => {
  try {
    const { u_id } = req.body;
    const { title, date, description, location, image } = req.body;

    if (!title || !date || !description || !location) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }

    const event = new FusionEvent({
      title,
      date,
      description,
      location,
      image,
      createdBy: u_id,
    });

    await event.save();
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create event', error: error.message });
  }
};

// Get All Events
const getAllEvents = async (req, res) => {
  try {
    const events = await FusionEvent.find().populate('createdBy'); // Assuming User has name & email
    res.status(200).json({ events });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch events', error: error.message });
  }
};

// Delete Event
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await FusionEvent.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete event', error: error.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  deleteEvent,
};
