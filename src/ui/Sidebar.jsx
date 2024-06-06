function Sidebar({ setShowSidebar }) {
  return (
    <div className="absolute w-[250px] right-0 top-0 bg-slate-400 h-[100vh]">
      Sidebar
      <button onClick={() => setShowSidebar((show) => !show)}>X</button>
    </div>
  );
}

export default Sidebar;
