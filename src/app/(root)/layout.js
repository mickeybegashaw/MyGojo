import Header from "../components/RootHeader";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-20">{children}</div>
    </div>
  );
}
