import { CarCardWrapper, MainPageTopSection } from "@/components";

export default async function Home() {
  return (
    <div className="mt-12 padding-x padding-y max-width">
      <MainPageTopSection />
      <CarCardWrapper />
    </div>
  );
}
