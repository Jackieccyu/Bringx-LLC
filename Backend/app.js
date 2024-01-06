const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Array of U.S. states as objects
const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", 
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", 
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
].map(name => ({ name })); // Convert to array of objects with 'name' property

app.get('/states', (req, res) => {
    const query = (req.query.q || '').toLowerCase();
    // Filter states based on the query and sort them
    const filteredStates = states
      .filter(state => state.name.toLowerCase().includes(query))
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 8); // Limit to a maximum of 8 results

    res.json(filteredStates); // Sends the filtered and limited states
});

app.listen(port, () => console.log(`Server running on port ${port}`));