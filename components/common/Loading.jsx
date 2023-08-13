export const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div class="bg-gray-300 p-2  w-5 h-5 rounded-full mx-3 animate-ping duration-200"></div>
      <div class="bg-gray-400 p-2  w-5 h-5 rounded-full mx-3 animate-ping duration-500"></div>
      <div class="bg-gray-300 p-2  w-5 h-5 rounded-full mx-3 animate-ping duration-200"></div>
    </div>
  );
};
