import Category from "./components/category/Category";
import Class from "./components/class/Class";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Success from "./components/success/Success";
import Video from "./components/video/Video";
function App() {
  return (
    <main>
      <Header />
      <section className="relative">
        <Hero />
        <Category />
      </section>
      <Courses />
      <Success />
      <Class />
      <Video />
      // <Footer />
    </main>
  );
}

export default App;
