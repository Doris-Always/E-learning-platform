import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Determine the path to the db.json file
  const filePath = path.resolve('.', 'db.json');
  
  // Read the db.json file content
  const jsonData = readFileSync(filePath, 'utf-8');
  
  // Parse the JSON data
  const data = JSON.parse(jsonData);
  
  // Return the data as a JSON response
  res.status(200).json(data);
}
