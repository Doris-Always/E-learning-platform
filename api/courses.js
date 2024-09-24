import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  
  const filePath = path.resolve('.', 'db.json');
  const jsonData = readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  res.status(200).json(data);
}
