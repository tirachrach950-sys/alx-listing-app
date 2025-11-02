// pages/index.tsx
import type { NextPage } from "next";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { SITE_NAME, DEFAULT_IMAGE } from "../constants";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{SITE_NAME}</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Sample Property 1"
          description="Beautiful apartment in the city center"
          image={DEFAULT_IMAGE}
        >
          <Button label="Book Now" />
        </Card>

        <Card
          title="Sample Property 2"
          description="Cozy house with garden"
          image={DEFAULT_IMAGE}
        >
          <Button label="Book Now" />
        </Card>

        <Card
          title="Sample Property 3"
          description="Luxury villa with pool"
          image={DEFAULT_IMAGE}
        >
          <Button label="Book Now" />
        </Card>
      </main>
    </div>
  );
};

export default Home;
