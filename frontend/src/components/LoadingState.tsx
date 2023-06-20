

const Loading= () => {
  return (
    <div className={`flex h-full w-full justify-center items-center`}>
      <div
        className={`animate-spin inline-block w-10 h-10 border-[5px] border-current border-t-transparent text-sky-600 rounded-full`}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
