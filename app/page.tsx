import Header from "./components/Header";
import Footer from "./components/Footer";
import PropertyView from "./components/PropertyView"

export default function Home() {
  return (
    <main className="transition-all font-primary text-text-color">
      <Header />
      <div className="flex flex-col gap-[10px] py-[30px] container">
        <h2 className="text-[35px] text-[#191C1F] font-medium font-font-spring">
          Find the right property, right away
        </h2>
        <p className="text-[#191C1F] font-normal text-[20px]">
          Kemea supports your property research in Israel at every stage
        </p>
      </div>
      <div className="products py-5">
        <div className="container">
          <div className="grid lg:gap-6 md:gap-4 gap-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 content">
            <PropertyView />
            <PropertyView />
            <PropertyView />
            <PropertyView />
            <PropertyView />
            <PropertyView />
            <PropertyView />
            <PropertyView />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
