
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";

interface PriceFilterProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const PriceFilter = ({ min, max, value, onChange }: PriceFilterProps) => {
  const [localValue, setLocalValue] = useState<[number, number]>(value);
  
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (newValue: number[]) => {
    const typedValue: [number, number] = [newValue[0], newValue[1]];
    setLocalValue(typedValue);
  };

  const handleChangeCommitted = () => {
    onChange(localValue);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-sm">Preis</h4>
        <div className="text-sm">
          {localValue[0].toFixed(2).replace('.', ',')} € - {localValue[1].toFixed(2).replace('.', ',')} €
        </div>
      </div>
      
      <Slider
        defaultValue={[min, max]}
        value={localValue}
        min={min}
        max={max}
        step={0.5}
        onValueChange={handleChange}
        onValueCommit={handleChangeCommitted}
        className="my-6"
      />
    </div>
  );
};

export default PriceFilter;
