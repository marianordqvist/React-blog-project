import Header from './components/Header/Header';
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import "./App.css";
import BlogPostList from "./components/BlogPostList/BlogPostList";

function App() {
  return (
    <>
      <Header></Header>
      <Banner />

      <Footer />

      <BlogPostList />
    </>
  );
}

export default App;
