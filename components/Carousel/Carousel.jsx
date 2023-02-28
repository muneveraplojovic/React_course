import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as SliderCarousel } from "react-responsive-carousel";
import Text from "../../components/Text/Text";
import { colors, fontSize } from "../../util/theme";
import SimplifiedDiv from "../SimplifiedDiv/SimplifiedDiv";
//import NavigateNextIcon from "@material-ui/icons/NavigateNext";
//import ArrowBackNewIcon from "@material-ui/icons/ArrowBackIosNew";

const Carousel = ({ data }) => {
  const styles = {
    carouselText: {
      position: "absolute",
      bottom: 30,
      right: 10,
      left: 10,
    },
  };

  return (
    <SliderCarousel
      width="100%"
      axis="horizontal"
      showIndicators
      showThumbs={false}
      interval={2000}
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      swsipeable
    >
      {data.map((d) => (
        <div key={d} style={{ height: "400px" }}>
          <img
            src={d.imgSrc}
            style={{ height: "100%", objectFit: "contain" }}
          />
          <SimplifiedDiv style={styles.carouselText}>
            <Text
              fontSize={fontSize.xLarge}
              color={colors.gray}
              textAlign="left"
            >
              {d.imgText}
            </Text>
          </SimplifiedDiv>
        </div>
      ))}
    </SliderCarousel>
  );
};

export default Carousel;
