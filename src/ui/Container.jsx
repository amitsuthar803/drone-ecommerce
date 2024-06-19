function Container({ children }) {
  return (
    <div
      className="bg-[#f5f5f5] flex-col
     w-full m-auto justify-center flex items-start"
    >
      {children}
    </div>
  );
}

export default Container;
