import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const weeks = [
  { week: "1–2", title: "Изучение теории", tasks: "Читаем ПДД целиком. Изучаем дорожные знаки по группам. Первые 10 билетов." },
  { week: "3–4", title: "Отработка билетов", tasks: "Решаем по 5–7 билетов в день. Разбираем ошибки. Учим сложные темы: приоритеты, обгон, проезд перекрёстков." },
  { week: "5", title: "Сложные темы", tasks: "Первая помощь, нетипичные ситуации, штрафы. Полная прогонка всех 40 билетов по 2 раза." },
  { week: "6", title: "Автодром", tasks: "Первые занятия на автодроме. Эстакада, змейка, гараж — до уверенного выполнения с первого раза." },
  { week: "7", title: "Вождение в городе", tasks: "Уроки в реальном трафике. Перестроения, приоритеты, парковка. Изучаем маршруты рядом с ГИБДД." },
  { week: "8", title: "Финальная подготовка", tasks: "Повтор теории. Пробный экзамен. Проверка документов. Отдых за сутки до экзамена." },
]

const checklist = [
  "Все 40 билетов решены минимум 3 раза",
  "Все упражнения автодрома выполняю с первого раза",
  "Знаю маршруты вблизи экзаменационного ГИБДД",
  "Собраны все документы (паспорт, справка, пошлина, свидетельства)",
  "Знаю правило «не торопись — читай вопрос целиком»",
  "Выспался, поел, приехал за 20 минут до экзамена",
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
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
          <p className="font-mono text-xs text-foreground/50 mb-1">Глава 3</p>
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Комплексный план
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ 8-недельный график и чек-лист готовности</p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">

          {/* 8-недельный график */}
          <div
            className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs text-foreground/40">3.1</span>
              <div className="h-px flex-1 bg-foreground/20" />
              <span className="font-mono text-xs text-foreground/40">Пошаговый график</span>
            </div>
            <div className="space-y-3">
              {weeks.map((w, i) => (
                <div
                  key={i}
                  className={`flex gap-4 border-b border-foreground/10 pb-3 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
                  style={{ transitionDelay: `${150 + i * 80}ms` }}
                >
                  <div className="shrink-0 w-10 text-right">
                    <span className="font-mono text-xs text-foreground/35">{w.week} нед</span>
                  </div>
                  <div>
                    <div className="text-sm font-light text-foreground mb-0.5">{w.title}</div>
                    <div className="text-xs text-foreground/60 leading-relaxed">{w.tasks}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Чек-лист + вывод */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-foreground/40">3.2</span>
                <div className="h-px flex-1 bg-foreground/20" />
                <span className="font-mono text-xs text-foreground/40">Чек-лист готовности</span>
              </div>
              <p className="text-xs text-foreground/50 font-mono mb-3">Отметь всё — ты готов к экзамену</p>
              <ul className="space-y-2">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 shrink-0 w-4 h-4 border border-foreground/30 rounded-sm flex items-center justify-center">
                      <span className="text-foreground/30 text-xs">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`border-t border-foreground/15 pt-5 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <p className="font-mono text-xs text-foreground/50 mb-2">Заключение</p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-5">
                Сдать на права с первого раза — реально для каждого. Это не вопрос таланта, а вопрос системности: учи ПДД, тренируйся на автодроме, не игнорируй ошибки и приходи на экзамен отдохнувшим. Удачи на дороге!
              </p>
              <div className="flex gap-3 flex-wrap">
                <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(1)}>
                  Вернуться к главе 1
                </MagneticButton>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}