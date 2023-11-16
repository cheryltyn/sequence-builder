const BASE_URL = "https://airtable.com/appoBT9Iv5LWjgpzz/tbloSz8LJMOm3C9aq/"

async function createRecordInAirtable(data) {
  const endpoint = BASE_URL
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ records: [ { fields: {
        // Duration:
        // Focus Area: 
        Sequence: data
    } } ] })
  };

  try {
    const response = await fetch(endpoint, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log('Record created:', result);
    return result;
  } catch (error) {
    console.error('Error creating record in Airtable:', error);
  }
}

createRecordInAirtable(newData);
