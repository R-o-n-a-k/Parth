const Loader = () => {
  return (
    <div className="flex items-center justify-center h-40 w-full">
      <div className="relative w-12 h-12 animate-spin">
        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full"></div>

        <div className="absolute inset-2 border-4 border-secondary border-b-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
