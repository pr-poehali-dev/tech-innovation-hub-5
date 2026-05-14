import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-start px-6 pt-24 pb-8 md:px-12 lg:px-16 overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <p className="font-mono text-xs text-foreground/50 mb-1">Глава 1</p>
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Теоретический экзамен
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Подготовка к тесту по ПДД</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          <div
            className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs text-foreground/40">1.1</span>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>
            <h3 className="mb-3 font-sans text-xl font-light text-foreground">Структура экзамена</h3>
            <ul className="space-y-2">
              {[
                "20 вопросов по билетам ГИБДД",
                "Время — 20 минут",
                "Допускается не более 2 ошибок",
                "При 3-й ошибке — дополнительные 5 вопросов",
                "Темы: знаки, ситуации, первая помощь, техника безопасности",
                "Экзамен проводится на компьютере в ГИБДД",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs text-foreground/40">1.2</span>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>
            <h3 className="mb-3 font-sans text-xl font-light text-foreground">Методы изучения ПДД</h3>
            <ul className="space-y-2">
              {[
                "Прочитать ПДД — всего 24 раздела, это ~2–3 часа",
                "Решать официальные билеты — минимум 3–5 в день",
                "Разбирать каждую ошибку, не пропускать",
                "Метод «сложные первыми» — учи то, что не даётся",
                "Мнемоники для знаков: придумывай ассоциации",
                "Повторение перед сном — мозг лучше запоминает",
                "Приложения: «ПДД РФ», «Экзамен ПДД» — удобно в дороге",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs text-foreground/40">1.3</span>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>
            <h3 className="mb-3 font-sans text-xl font-light text-foreground">Психологическая подготовка</h3>
            <ul className="space-y-2">
              {[
                "Страх перед экзаменом — нормальная реакция",
                "За ночь до — не учи новое, только повтори пройденное",
                "Ложись спать вовремя: усталость мешает думать",
                "Утром — нормально поешь, не на голодный желудок",
                "На экзамене: сначала читай весь вопрос целиком",
                "Не торопись — 20 минут на 20 вопросов, время есть",
                "Если сомневаешься — перечитай ещё раз, не угадывай",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`mt-8 border-t border-foreground/15 pt-6 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          style={{ transitionDelay: "550ms" }}
        >
          <p className="font-mono text-xs text-foreground/50 mb-2">Вывод по главе 1</p>
          <p className="max-w-3xl text-sm text-foreground/80 leading-relaxed">
            Теоретический экзамен сдаётся легче, чем кажется — главное системно решать билеты и не зубрить наугад. По статистике, кандидаты, которые решили все 40 официальных билетов хотя бы по 2 раза, сдают тест с первого раза в 87% случаев.
          </p>
        </div>
      </div>
    </section>
  )
}
