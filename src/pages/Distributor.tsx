import { Navbar } from "../components/Navigation/Navbar";
import { ContactBar } from "../components/Navigation/ContactBar";
import { Distributor } from "../components/Distributor";
import { Footer } from "../components/Footer";
import Ndjoka_pub from "../assets/images/ndjoka_dist.jpg"

export default function DistributorPage() {
  return (
    <div>
      <Navbar />
      <ContactBar />
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <div className="absolute inset-0">
          <img
            src={Ndjoka_pub}
            alt="Distributor hero"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      </div>
      <div>
        <Distributor />
      </div>
      <Footer />
    </div>
  );
}
