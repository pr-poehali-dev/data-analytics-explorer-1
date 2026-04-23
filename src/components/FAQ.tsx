import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Кто может вступить в клуб?",
    answer:
      "Любой взрослый москвич или гость города, кто хочет находить близких по духу людей через общие увлечения. Опыт или специальные знания не нужны — нужно лишь желание общаться.",
  },
  {
    question: "Сколько стоит участие?",
    answer:
      "Вступление в клуб бесплатное. Отдельные мероприятия могут иметь небольшой взнос на аренду помещения или материалы — обычно от 300 до 800 рублей. Всё указывается заранее.",
  },
  {
    question: "Как часто проходят встречи?",
    answer:
      "Встречи проходят каждую неделю, в разных форматах. Вы можете выбирать те, которые интересны именно вам — никаких обязательств посещать всё подряд.",
  },
  {
    question: "Где проходят встречи?",
    answer:
      "Мы арендуем уютные пространства в разных районах Москвы: антикафе, лофты, мастерские, тихие кафе. Адрес каждой встречи публикуется в анонсе заранее.",
  },
  {
    question: "Можно ли прийти одному, без компании?",
    answer:
      "Именно так большинство и приходит! Клуб создан для тех, кто хочет познакомиться с новыми людьми. Атмосфера тёплая и дружелюбная — вы сразу почувствуете себя среди своих.",
  },
  {
    question: "Как записаться на встречу?",
    answer:
      "Напишите нам в Телеграм или заполните форму на сайте. Мы пришлём расписание ближайших встреч и добавим вас в чат участников.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}