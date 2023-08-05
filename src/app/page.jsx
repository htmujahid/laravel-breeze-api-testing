import Auth from "@/components/Auth";
import Service from "@/components/Service";

export default function Home() {

  return (
    <main className="mx-auto my-3 space-y-3">
      <Auth />
      <Service />
    </main>
  )
}
