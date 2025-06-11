import SplitText from "@/components/elements/SplitText";

const HeroHeading = () => (
  <div className="mt-5">
    <SplitText
      text="Code, "
      className="font-semibold"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      tag="h1"
      sequenceDelay={0}
    />
    <SplitText
      text="Creativity, and"
      className="font-semibold delay-150"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      tag="h1"
      sequenceDelay={1.5}
    />
    <br />
    <SplitText
      text="Lasting Impressions"
      className="font-semibold delay-300"
      delay={100}
      duration={1}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      tag="h1"
      sequenceDelay={2}
    />
  </div>
);

export default HeroHeading;
