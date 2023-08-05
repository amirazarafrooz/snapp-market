export const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div class="bg-gray-300 p-2  w-5 h-5 rounded-full mx-2 animate-ping duration-200"></div>
      <div class="bg-gray-400 p-2  w-5 h-5 rounded-full mx-2 animate-ping duration-500"></div>
      <div class="bg-gray-300 p-2  w-5 h-5 rounded-full mx-2 animate-ping duration-200"></div>
    </div>
  );
};
