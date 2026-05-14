import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
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
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <p className="font-mono text-xs text-foreground/50 mb-1">Глава 2</p>
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Практический экзамен
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Автодром, город и документы</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-6">

          <div
            className={`lg:col-span-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs text-foreground/40">2.1 — 2.2</span>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>
            <h3 className="mb-3 font-sans text-xl font-light text-foreground">Этапы и автодром</h3>
            <p className="text-xs text-foreground/50 mb-3 font-mono">Экзамен состоит из двух частей: автодром → город</p>
            <div className="space-y-3">
              {[
                { label: "Эстакада", desc: "Остановка и трогание на подъёме без отката назад" },
                { label: "Змейка", desc: "Проезд между конусами на малой скорости, не сбивая" },
                { label: "Гараж / параллельная парковка", desc: "Заехать задним ходом в ограниченное пространство" },
                { label: "Разворот в ограниченном пространстве", desc: "Развернуться на узкой дороге за минимум манёвров" },
                { label: "Заезд в бокс задним ходом", desc: "Точно войти в разметку с первого раза" },
              ].map((ex, i) => (
                <div key={i} className="flex gap-3 border-b border-foreground/10 pb-3">
                  <span className="font-mono text-xs text-foreground/30 mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="text-sm font-light text-foreground">{ex.label}</div>
                    <div className="text-xs text-foreground/55 mt-0.5">{ex.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs text-foreground/40">2.3 — 2.5</span>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>
            <h3 className="mb-3 font-sans text-xl font-light text-foreground">Город и психология</h3>
            <ul className="space-y-2 mb-5">
              {[
                "Маршрут выбирает инспектор — изучи район ГИБДД заранее",
                "Всегда пристёгивайся — штрафной балл с первой секунды",
                "Смотри в зеркала перед каждым манёвром",
                "Не превышай скорость даже на 1 км/ч",
                "Уступай пешеходам на нерегулируемых переходах",
                "Остановка на красный — до стоп-линии, не за ней",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-foreground/15 pt-3">
              <p className="font-mono text-xs text-foreground/40 mb-2">Топ ошибок (2.4)</p>
              {[
                "Не включил поворотник",
                "Заглох на старте",
                "Не посмотрел в зеркало",
                "Проехал на жёлтый",
                "Забыл снять с ручника",
              ].map((err, i) => (
                <div key={i} className="flex gap-2 text-xs text-foreground/60 mb-1">
                  <span className="text-foreground/30">✕</span>
                  {err}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs text-foreground/40">📄 Документы</span>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>
            <h3 className="mb-3 font-sans text-xl font-light text-foreground">Что взять с собой</h3>
            <p className="text-xs text-foreground/50 mb-3 font-mono">Обязательно на оба экзамена</p>
            <ul className="space-y-2">
              {[
                { doc: "Паспорт гражданина РФ", note: "Оригинал" },
                { doc: "Медицинская справка (форма 003-В/у)", note: "Срок действия — 1 год" },
                { doc: "Квитанция об оплате госпошлины", note: "700 ₽ за теорию + 2000 ₽ за практику" },
                { doc: "Свидетельство о регистрации в автошколе", note: "Выдаётся при зачислении" },
                { doc: "Документ об окончании автошколы", note: "Свидетельство установленного образца" },
                { doc: "Заявление на сдачу экзамена", note: "Заполняется на месте или заранее" },
              ].map((item, i) => (
                <li key={i} className="border-b border-foreground/10 pb-2">
                  <div className="text-sm text-foreground">{item.doc}</div>
                  <div className="text-xs text-foreground/45 font-mono mt-0.5">{item.note}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`mt-6 border-t border-foreground/15 pt-5 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="font-mono text-xs text-foreground/50 mb-2">Вывод по главе 2</p>
          <p className="max-w-3xl text-sm text-foreground/80 leading-relaxed">
            Практика пугает больше теории, но при регулярных занятиях навыки приходят быстро. Главные причины провала — невнимательность и стресс, а не незнание. Инспектор не хочет вас завалить — он хочет убедиться, что вы не создадите опасность на дороге.
          </p>
        </div>
      </div>
    </section>
  )
}
