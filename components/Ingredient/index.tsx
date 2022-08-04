import Image from "next/image";
import { forwardRef, Ref } from "react";
import type { IngredientProps } from "./types";

const Ingredient: React.FC<IngredientProps> = forwardRef(
  ({ image, name, dir = "ltr", classes = "" }, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={`ingredient ${classes}`} dir={dir}>
        <div className="ingredient__image">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            quality={100}
            objectFit="contain"
            objectPosition="center center"
          />
        </div>
        <div className="ingredient__name">{name}</div>
      </div>
    );
  }
);

Ingredient.displayName = "Ingredient";

export default Ingredient;
