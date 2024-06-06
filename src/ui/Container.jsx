function Container({ children }) {
  return (
    <div
      className="bg-white flex-col
     w-full m-auto justify-center flex items-start"
    >
      {children}
    </div>
  );
}

export default Container;
