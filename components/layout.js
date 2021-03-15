import Alert from '../components/alert';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
