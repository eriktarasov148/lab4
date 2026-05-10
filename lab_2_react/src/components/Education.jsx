function Education() {
  return (
    /* Змінено: 
       dark:bg-blue-900 — темніший синій фон для картки в темній темі
       dark:border-blue-800 — рамка в тон
    */
    <section className="bg-white dark:bg-blue-900 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-transparent dark:border-blue-800">
      
      {/* Змінено: text-blue-900 для світлої теми */}
      <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white transition-colors duration-300">
        Education
      </h2>

      <div>
        {/* Змінено: text-blue-800 для світлої, dark:text-blue-100 для темної */}
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-100 transition-colors duration-300">
          Information Technology
        </h3>

        {/* Змінено: text-blue-600 для світлої, dark:text-blue-200 для темної */}
        <p className="text-blue-600 dark:text-blue-200 transition-colors duration-300">
          University studies focused on web development, networking and security.
        </p>
      </div>

    </section>
  );
}
