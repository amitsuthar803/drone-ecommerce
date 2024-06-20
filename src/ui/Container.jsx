function Container({ children }) {
  return (
    <div
      className=" flex-col
     w-full m-auto justify-center flex items-start"
    >
      {children}
    </div>
  );
}

export default Container;
