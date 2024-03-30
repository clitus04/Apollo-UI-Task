import { memo, useState } from "react";
import { Card } from "primereact/card";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import { Rating } from "primereact/rating";
import { ColorPicker } from "primereact/colorpicker";
import { Knob } from "primereact/knob";

function SliderInputs() {
  const [sliderValue, setSliderValue] = useState(30);
  const [ratingValue, setRatingValue] = useState(2);
  const [colorValue, setColorValue] = useState("#6366f1");
  const [knobValue, setKnobValue] = useState(20);
  return (
    <Card className="mt-5">
      <div className="title">Slider</div>
      <div>
        <InputText
          value={sliderValue.toString()}
          onChange={(e: any) => setSliderValue(e.target.value)}
          className="w-full mt-3"
        />
        <Slider
          value={sliderValue}
          onChange={(e: any) => setSliderValue(e.value)}
        />
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="title">Rating</div>
          <Rating
            value={ratingValue}
            onChange={(e: any) => setRatingValue(e.value)}
          />
        </div>
        <div className="flex-1">
          <div className="title">ColorPicker</div>
          <ColorPicker
            value={colorValue}
            onChange={(e: any) => setColorValue(e.value)}
          />
        </div>
      </div>
      <div className="title">Knob</div>
      <Knob
        value={knobValue}
        onChange={(e: any) => setKnobValue(e.value)}
        min={-50}
        max={50}
      />
    </Card>
  );
}

export default memo(SliderInputs);
