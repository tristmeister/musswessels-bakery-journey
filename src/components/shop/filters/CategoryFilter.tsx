
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CategoryOption {
  value: string;
  label: string;
}

interface CategoryFilterProps {
  options: CategoryOption[];
  value: string;
  onChange: (value: string) => void;
}

const CategoryFilter = ({ options, value, onChange }: CategoryFilterProps) => {
  return (
    <div className="space-y-2">
      <h4 className="font-medium text-sm">Kategorie</h4>
      <RadioGroup 
        value={value} 
        onValueChange={onChange}
        className="flex flex-col space-y-1"
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={`category-${option.value}`} />
            <Label htmlFor={`category-${option.value}`} className="cursor-pointer">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CategoryFilter;
