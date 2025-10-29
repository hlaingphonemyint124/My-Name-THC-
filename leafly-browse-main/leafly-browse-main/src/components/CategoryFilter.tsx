import { Button } from "@/components/ui/button";
import { Category } from "@/data/products";

interface CategoryFilterProps {
  selectedCategory: Category | "All";
  onCategoryChange: (category: Category | "All") => void;
}

const categories: (Category | "All")[] = ["All", "Indica", "Sativa", "Hybrid"];

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "premium" : "category"}
          onClick={() => onCategoryChange(category)}
          size="lg"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
