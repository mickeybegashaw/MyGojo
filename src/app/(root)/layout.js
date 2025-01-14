import Header from "../components/RootHeader";
export default function Layout({ children }) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
}
