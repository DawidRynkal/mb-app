import { WorkersWidget } from "@/components";

export default function Home() {
  return (
    <div className="container flex justify-center mx-auto px-10 mb-8">
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <WorkersWidget />
        </div>
      </div>
    </div>
  );
}
