function Education() {
  return (
  
    
    <section className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-transparent dark:border-zinc-700">
      
      {/* ЗМІНЕНО: text-zinc-800 (замість slate-800) для світлої теми */}
      <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white transition-colors duration-300">
        Education
      </h2>

      <div>
        {/* ЗМІНЕНО: text-zinc-900 (замість slate-900), dark:text-zinc-100 */}
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          Information Technology
        </h3>

        {/* ЗМІНЕНО: text-zinc-600 (замість slate-600), dark:text-zinc-400 (трохи м'якший відтінок) */}
        <p className="text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
          University studies focused on web development, networking and security.
        </p>
      </div>

    </section>
  );
}

// export default залишився на місці, щоб не було помилок збірки
export default Education;
