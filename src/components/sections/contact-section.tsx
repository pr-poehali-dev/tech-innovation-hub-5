import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

const conclusions = [
  {
    num: "01",
    title: "Теория — это система",
    text: "Не зубрёжка, а понимание логики ПДД. Решай билеты каждый день и разбирай каждую ошибку.",
  },
  {
    num: "02",
    title: "Практика — это повторение",
    text: "Чем больше часов за рулём до экзамена, тем меньше стресса на нём. Автодром — до автоматизма.",
  },
  {
    num: "03",
    title: "Документы — заранее",
    text: "Собери пакет документов за неделю до экзамена. Суета в последний момент добавляет лишний стресс.",
  },
  {
    num: "04",
    title: "График — это дисциплина",
    text: "8 недель планомерной работы вместо недели ударного заучивания дают несравнимо лучший результат.",
  },
]

export function ContactSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
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
          <p className="font-mono text-xs text-foreground/50 mb-1">Заключение</p>
          <h2 className="mb-1 font-sans text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Итоги работы
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Четыре главных вывода</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {conclusions.map((c, i) => (
            <div
              key={i}
              className={`border-b border-foreground/15 pb-5 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: `${100 + i * 120}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-xs text-foreground/30">{c.num}</span>
                <div className="h-px flex-1 bg-foreground/20" />
              </div>
              <h3 className="mb-2 font-sans text-lg font-light text-foreground">{c.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div
          className={`grid gap-8 md:grid-cols-[1fr_auto] items-end transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div>
            <p className="font-mono text-xs text-foreground/40 mb-3">Об этой работе</p>
            <p className="max-w-2xl text-sm text-foreground/75 leading-relaxed mb-4">
              Данная презентация создана в рамках учебного проекта. Все материалы основаны на официальных источниках: Правила дорожного движения РФ (Постановление Правительства № 1090), Административный регламент МВД по проведению экзаменов на право управления (Приказ МВД № 80), а также официальные экзаменационные билеты ГИБДД 2024 года.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {[
                "ПДД РФ — 24 раздела",
                "40 официальных билетов ГИБДД",
                "Приказ МВД № 80",
                "Постановление Правительства № 1090",
              ].map((src) => (
                <span key={src} className="font-mono text-xs text-foreground/40">· {src}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <MagneticButton variant="primary" size="lg" onClick={() => scrollToSection?.(1)}>
              Глава 1 — Теория
            </MagneticButton>
            <MagneticButton variant="secondary" size="lg" onClick={() => scrollToSection?.(2)}>
              Глава 2 — Практика
            </MagneticButton>
          </div>
        </div>

        <div
          className={`mt-8 pt-5 border-t border-foreground/10 flex items-center justify-between transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          style={{ transitionDelay: "750ms" }}
        >
          <span className="font-mono text-xs text-foreground/30">Учебный проект · 2026</span>
          <span className="font-mono text-xs text-foreground/30">Как сдать на права с первого раза</span>
        </div>
      </div>
    </section>
  )
}