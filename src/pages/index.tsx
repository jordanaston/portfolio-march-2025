import NarBar from "@/components/NarBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NarBar />
      <div className="mx-auto">
        <div className="mt-28 grid grid-cols-[minmax(0,650px)_minmax(auto,850px)_auto]">
          <div className="col-start-1 flex flex-col items-start justify-center" />
          <div className="col-start-2 mt-16 flex flex-col items-start justify-center"></div>
        </div>
      </div>
    </div>
  );
}
