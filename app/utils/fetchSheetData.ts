'use server'

export async function fetchSheetData() {
  try {
    const sheetId = "2PACX-1vRPSMNBjNkdDpDs2TA7UEVAaFSp0yPEYZRMUqLAuzFD2bg2bmOGbr6BeKV4pX9813lFYv0cyODQm7aJ"
    const url = `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv&cachebuster=${Date.now()}`
    
    console.log('Fetching URL:', url);

    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Accept-Encoding': 'identity',
        'Content-Type': 'text/csv',
      },
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`Failed to fetch sheet data. Status: ${response.status}`);
    }

    const text = await response.text();

    console.log('Response text preview:', text.slice(0, 200));

    if (!text || text.trim() === '') {
      throw new Error('No data returned from the sheet');
    }

    const rows = text.split('\n').map(row => {
      const cells = [];
      let currentCell = '';
      let inQuotes = false;

      for (let i = 0; i < row.length; i++) {
        if (row[i] === '"') {
          inQuotes = !inQuotes;
        } else if (row[i] === ',' && !inQuotes) {
          cells.push(currentCell.trim());
          currentCell = '';
        } else {
          currentCell += row[i];
        }
      }
      cells.push(currentCell.trim());

      return cells.map(cell => cell.replace(/^["']|["']$/g, '').trim());
    });

    console.log('Parsed rows:', rows);

    const data = rows.slice(1).map(row => ({
      name: row[1] || '',
      leftPanelText: row[2] || '',
      rightPanelText: row[3] || ''
    })).filter(user => user.name && user.leftPanelText && user.rightPanelText);

    console.log('Filtered data:', data);

    return { data, timestamp: Date.now() };
  } catch (error) {
    console.error('Error fetching sheet data:', error.message);
    return { data: [], timestamp: Date.now() };
  }
}

