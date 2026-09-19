import { useEffect } from "react";
import PageHero from "../components/page_hero_components/page_hero";
import registryImg from "../assets/engagement_hug.jpg";
import SectionIntro from "../components/editorial/SectionIntro";
import PhotoTextBlock from "../components/editorial/PhotoTextBlock";

const ZOLA_SCRIPT_ID = "zola-wjs";
const ZOLA_SCRIPT_SRC = "https://widget.zola.com/js/widget.js";

function Registry() {
  useEffect(() => {
    if (document.getElementById(ZOLA_SCRIPT_ID)) return;

    const firstScript = document.getElementsByTagName("script")[0];
    const script = document.createElement("script");
    script.id = ZOLA_SCRIPT_ID;
    script.async = true;
    script.src = ZOLA_SCRIPT_SRC;
    firstScript?.parentNode?.insertBefore(script, firstScript);
  }, []);

  return (
    <>
      <PageHero title="Registry" image={registryImg} position="70% 20%" />

      <section className="editorial-intro">
        <SectionIntro
          eyebrow="01 · A little something"
          title="Celebrating with you is the best gift."
          align="center"
          body={
            <p>
              For anyone who would like to give something beyond being there, our registry is hosted with Zola.
            </p>
          }
        />
      </section>

      <section className="editorial-section editorial-section--ivory">
        <PhotoTextBlock
          eyebrow="02 · Our registry"
          title="A few things for the next chapter."
          image={registryImg}
          imageAlt="Tracey and Jordan together"
          caption="Thank you for celebrating with us"
        >
          <p>
            We chose Zola so everything can live together in one place. The registry will open through the button
            below.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a
              className="editorial-button"
              href="https://www.zola.com/registry/traceyandjordan2027"
              target="_blank"
              rel="noreferrer"
            >
              View the registry <span aria-hidden="true">↗</span>
            </a>
          </div>
        </PhotoTextBlock>
      </section>
    </>
  );
}

export default Registry;
