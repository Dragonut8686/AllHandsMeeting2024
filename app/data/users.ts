import { fetchSheetData } from "../utils/fetchSheetData";

export async function getUsers() {
  return fetchSheetData();
}

// Fallback data in case of errors
export const defaultUsers = [
  {
    name: "Загрузка...",
    leftPanelText: "Загрузка данных",
    rightPanelText: "Пожалуйста, подождите",
  },
];
