"use server";

export async function fetchSheetData() {
  try {
    const sheetId = "1bjd7ZXiIIS2bu6KtfkRd4o5zdn3XuBEpzn1sJQ1usiQ";
    const sheetName = "Sheet1";
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}&cachebuster=${Date.now()}`;

    console.log("Fetching URL:", url);

    // Добавляем заголовки для устранения проблем с декодированием
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        "Accept-Encoding": "identity",
        "Content-Type": "text/csv",
      },
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`Failed to fetch sheet data. Status: ${response.status}`);
    }

    const text = await response.text();

    console.log("Response text preview:", text.slice(0, 200)); // Логируем первые 200 символов

    if (!text || text.trim() === "") {
      throw new Error("No data returned from the sheet");
    }

    const rows = text.split("\n").map((row) => {
      const cells = [];
      let currentCell = "";
      let inQuotes = false;

      for (let i = 0; i < row.length; i++) {
        if (row[i] === '"') {
          inQuotes = !inQuotes;
        } else if (row[i] === "," && !inQuotes) {
          cells.push(currentCell.trim());
          currentCell = "";
        } else {
          currentCell += row[i];
        }
      }
      cells.push(currentCell.trim());

      return cells.map((cell) => cell.replace(/^["']|["']$/g, "").trim());
    });

    console.log("Parsed rows:", rows);

    const data = rows
      .slice(1)
      .map((row) => ({
        name: row[1] || "",
        leftPanelText: row[2] || "",
        rightPanelText: row[3] || "",
      }))
      .filter((user) => user.name && user.leftPanelText && user.rightPanelText);

    console.log("Filtered data:", data);

    return { data, timestamp: Date.now() };
  } catch (error) {
    console.error("Error fetching sheet data:", error.message);
    return { data: [], timestamp: Date.now() };
  }
}
