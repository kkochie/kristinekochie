export default function PageTitle({ children }) {
  return (
    <h1 className="font-serif text-3xl leading-9 tracking-tight text-gray-900 hover:text-blue-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
