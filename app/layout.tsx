// Удаляем импорт globals.css, так как стили подключаются через <link>
import type { Metadata } from "next";
import Snowflake from "./components/Snowflake"; // Подключение компонента Snowflake

export const metadata: Metadata = {
  title: "All Hands Meeting 2024",
  description: "HFLabs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        {/* Подключение скомпилированных стилей */}
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        {children}
        <Snowflake /> {/* Отображение снежинок */}
      </body>
    </html>
  );
}
