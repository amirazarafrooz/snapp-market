export default function ProfileLayout({ children }) {
  return (
    <section className="flex justify-center items-center flex-col my-4 laptop:flex-row  laptop:items-start laptop:justify-center mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300 p-2">
      {children}
    </section>
  );
}
