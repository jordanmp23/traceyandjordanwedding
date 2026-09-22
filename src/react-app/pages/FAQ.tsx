import PageHero from "../components/page_hero_components/page_hero";
import faqImg from "../assets/norwayCruise.jpg";
import SectionIntro from "../components/editorial/SectionIntro";

const questions = [
  {
    question: "What time should I arrive?",
    answer:
      "The ceremony begins promptly at 6pm, so please plan to arrive with enough time to find a seat and get settled before everything starts.",
  },
  {
    question: "Will transportation be provided?",
    answer:
      "Yes. A shuttle will run between the wedding block hotel and the venue. Exact pickup and drop-off times will be shared closer to the wedding.",
  },
  {
    question: "Is parking available at the venue?",
    answer:
      "Yes, plenty of parking is available on site. If you are planning on drinking, please make other transportation plans in advance because rideshares are limited in Middleburg.",
  },
  {
    question: "Where and when should I RSVP?",
    answer:
      "RSVP details will be posted on the RSVP page once they are ready. The final reply-by date will also be included on your mailed invitation.",
  },
  {
    question: "What should I do if I cannot make it?",
    answer:
      "We will miss celebrating with you. Please RSVP no as soon as possible so we can plan accordingly.",
  },
  {
    question: "Is the wedding indoors or outdoors?",
    answer:
      "Weather permitting, the ceremony will take place in the vineyard. Cocktail hour will be under a covered patio and the reception will be in a covered pavilion.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Please wear colorful cocktail attire. No denim, hats, or flip flops. Lighter fabrics are recommended, and please keep in mind that the ceremony may take place on grass.",
  },
  {
    question: "Can I bring children?",
    answer:
      "Yes. Children are welcome. Please include them in your RSVP so we can plan accordingly, including any high-chair needs.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "If a plus one has been extended, it will be noted on your invitation. Thank you for understanding.",
  },
  {
    question: "What about dietary restrictions?",
    answer:
      "Please note any food allergies or dietary restrictions when you RSVP on the website.",
  },
  {
    question: "Don't see your question here?",
    answer: (
      <>
        Email <a href="mailto:traceyandjordan15@gmail.com">traceyandjordan15@gmail.com</a> for any wedding
        logistics or other questions that come up while planning.
      </>
    ),
  },
];

function FAQ() {
  return (
    <>
      <PageHero title="FAQ" image={faqImg} position="65% 20%" />

      <section className="editorial-intro">
        <SectionIntro
          eyebrow="01 · The practical bits"
          title="A few things you might be wondering."
          align="center"
          body={<p>Tap a question to open the answer.</p>}
        />
      </section>

      <section className="editorial-section editorial-section--ivory">
        <div className="editorial-faq">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <div className="editorial-faq__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

export default FAQ;
