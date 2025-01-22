import Header from "@/app/components/RootHeader";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-20 bg-slate-50">{children}</div>
    </div>
  );
}
