
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface AllergenFilterProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const AllergenFilter = ({ value, onChange }: AllergenFilterProps) => {
  // Common allergens in bakery products
  const allergens = [
    { id: "gluten", label: "Gluten" },
    { id: "milk", label: "Milch" },
    { id: "eggs", label: "Eier" },
    { id: "nuts", label: "Nüsse" },
    { id: "soybeans", label: "Sojabohnen" },
    { id: "sesame", label: "Sesam" }
  ];

  const handleChange = (allergenId: string, checked: boolean) => {
    if (checked) {
      onChange([...value, allergenId]);
    } else {
      onChange(value.filter(item => item !== allergenId));
    }
  };

  return (
    <div className="space-y-2">
      <h4 className="font-medium text-sm">Allergene ausschließen</h4>
      <div className="grid grid-cols-2 gap-2">
        {allergens.map((allergen) => (
          <div key={allergen.id} className="flex items-center space-x-2">
            <Checkbox 
              id={`allergen-${allergen.id}`} 
              checked={value.includes(allergen.id)}
              onCheckedChange={(checked) => handleChange(allergen.id, checked === true)}
            />
            <Label 
              htmlFor={`allergen-${allergen.id}`}
              className="text-sm cursor-pointer"
            >
              {allergen.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllergenFilter;
