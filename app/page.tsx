import InteractiveMap from "../components/InteractiveMap";
import { SearchPanel } from "../components/SearchPanel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-4">
      <div className="w-full h-[calc(100vh-32px)] flex justify-center items-center">
        <InteractiveMap />
      </div>
    </main>
  );
}
