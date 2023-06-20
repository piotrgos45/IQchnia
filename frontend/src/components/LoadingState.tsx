

const Loading= () => {
  return (
    <div className={`flex h-full w-full justify-center items-center`}>
      <div
        className={`animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-sky-600 rounded-full`}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
