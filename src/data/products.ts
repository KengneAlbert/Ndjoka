import { Product } from "../types/product";
import ndjoka_mur1 from "../assets/images/ndjoka_mure.jpg";
import ndjoka_mur2 from "../assets/images/ndjokamure.jpg";
import ndjoka_mur3 from "../assets/images/ndjoka2.jpg";
import ndjoka_mur4 from "../assets/images/ndjoka_pub3.jpg";
import ndjoka_non_mur1 from "../assets/images/ndjoka_non_mur.jpg";
import ndjoka_non_mur2 from "../assets/images/ndjoka_pub1.jpg";
import ndjoka_non_mur3 from "../assets/images/ndjoka_non_mur1.jpg";
import ndjoka_non_mur4 from "../assets/images/ndjoka_non_mur2.jpg";
import ndjoka_non_mur5 from "../assets/images/ndjoka_non_mure.jpg";
import ndjoka_epice1 from "../assets/images/ndjoka_epice1.jpg";
import ndjoka_epice2 from "../assets/images/ndjoka_epice2.jpg";
import ndjoka_epice3 from "../assets/images/ndjoka_epice3.jpg";
import ndjoka_epice4 from "../assets/images/ndjoka_epice.jpg";
import ndjoka_sango from "../assets/images/ndjoka_sango.jpg";
import ndjoka_sango1 from "../assets/images/ndjoka_sango1.jpg";
import ndjoka_sango2 from "../assets/images/ndjoka_sango2.jpg";
import ndjoka_drink from "../assets/images/ndjoka_energy.jpg";
import ndjoka_drink_ananas from "../assets/images/ndjoka_drink_ananas.jpg";
import ndjoka_drink_citron from "../assets/images/ndjoka_drink_citron.jpg";
import ndjoka_drink_ginger from "../assets/images/ndjoka_drink_ginger.jpg";
import ndjoka_drink_menthe from "../assets/images/ndjoka_drink_menthe.jpg";
import ndjoka_drink_orange from "../assets/images/ndjoka_drink_orange.jpg";
import ndjoka_drink_oseille from "../assets/images/ndjoka_drink_oseille.jpg";
import ndjoka_chin_chin from "../assets/images/ndjoka_chin_chin.jpg";
import ndjoka_chin_chin2 from "../assets/images/ndjoka_chin_chin2.jpg";

export const products: Product[] = [
  {
    id: 1,
    category: "plantain",
    name: "Plantain Mûre",
    tagline: "La douceur naturelle des tropiques",
    description:
      "Découvrez la douceur naturelle de nos chips de plantain mûre, délicatement cuites pour préserver leur goût authentique.",
    longDescription:
      "Nos chips de plantain mûre sont préparées selon une recette traditionnelle, offrant un équilibre parfait entre douceur naturelle et croustillant. Chaque tranche est soigneusement sélectionnée et cuite à la perfection.",
    images: [
      ndjoka_mur1,
      ndjoka_mur2,
      ndjoka_mur3,
      ndjoka_mur1,
      ndjoka_mur4,
      ndjoka_non_mur2,
    ],
    features: [
      "100% naturel",
      "Sans conservateurs",
      "Riche en potassium",
      "Source de fibres",
    ],
    certifications: ["Bio", "Sans Gluten", "Vegan"],
    nutritionalInfo: {
      calories: "150 kcal",
      proteines: "2g",
      glucides: "30g",
      lipides: "5g",
      fibres: "3g",
      sel: "0.1g",
    },
    ingredients: ["Banane plantains mûres", "Huile végétale"],
    sizes: [{ size: "250g", price: "1500 FCFA" }],
  },
  {
    id: 2,
    category: "plantain",
    name: "Plantain Non Mûre",
    tagline: "Le croquant authentique",
    description:
      "Le goût authentique du plantain vert, croustillant et légèrement salé, parfait pour l'apéritif.",
    longDescription:
      "Nos chips de plantain vert offrent une alternative savoureuse et nutritive aux chips traditionnelles. Préparées à partir de plantains soigneusement sélectionnés, elles sont cuites à basse température pour préserver leurs qualités nutritionnelles.",
    images: [
      ndjoka_non_mur1,
      ndjoka_non_mur2,
      ndjoka_non_mur3,
      ndjoka_non_mur4,
      ndjoka_non_mur5,
    ],
    features: [
      "Faible en sucre",
      "Source de fibres",
      "Sans gluten",
      "Riche en minéraux",
    ],
    certifications: ["Bio", "Sans Gluten", "Vegan"],
    nutritionalInfo: {
      calories: "140 kcal",
      proteines: "2g",
      glucides: "28g",
      lipides: "4g",
      fibres: "3.5g",
      sel: "0.2g",
    },
    ingredients: ["Banane plantains verts", "Huile végétale"],
    sizes: [{ size: "250g", price: "1500 FCFA" }],
  },
  {
    id: 3,
    category: "plantain",
    name: "Plantain Épicé",
    tagline: "L'explosion de saveurs africaines",
    description:
      "Une explosion de saveurs avec notre mélange d'épices secret sur des chips de plantain croustillantes.",
    longDescription:
      "Un mélange parfait entre le plantain et nos épices traditionnelles africaines. Chaque bouchée offre une expérience gustative unique, alliant le croquant des chips à la chaleur subtile de nos épices soigneusement sélectionnées.",
    images: [ndjoka_epice1, ndjoka_epice2, ndjoka_epice3, ndjoka_epice4],
    features: [
      "Épices naturelles",
      "Saveur unique",
      "Sans additifs",
      "Fait main",
    ],
    certifications: ["Bio", "Sans Gluten", "Vegan"],
    nutritionalInfo: {
      calories: "145 kcal",
      proteines: "2g",
      glucides: "29g",
      lipides: "4.5g",
      fibres: "3g",
      sel: "0.3g",
    },
    ingredients: [
      "Banane Plantains",
      "Huile de tournesol bio",
      "Mélange d'épices (piment, paprika, curcuma)",
      "Sel de mer",
    ],
    sizes: [{ size: "250g", price: "1500 FCFA" }],
  },
  {
    id: 4,
    category: "chinchin",
    name: "Chin-Chin Croquette",
    tagline: "Le goût de l'enfance",
    description:
      "Le goût authentique du chin-chin traditionnel, croustillant et délicieusement sucré.",
    longDescription:
      "Notre chin-chin classique est préparé selon une recette traditionnelle transmise de génération en génération. Un délice croquant qui rappelle les saveurs de l'enfance, parfait pour accompagner une pause thé ou café.",
    images: [ndjoka_chin_chin, ndjoka_chin_chin2],
    features: [
      "Recette traditionnelle",
      "Texture parfaite",
      "Sans conservateurs",
      "Fait main",
    ],
    certifications: ["Artisanal", "Qualité Premium"],
    nutritionalInfo: {
      calories: "160 kcal",
      proteines: "3g",
      glucides: "32g",
      lipides: "6g",
      fibres: "1g",
      sucres: "8g",
    },
    ingredients: [
      "Farine de blé",
      "Sucre",
      "Beurre",
      "Œufs",
      "Sel",
      "Lait",
      "Levure chimique",
    ],
    sizes: [{ size: "75g", price: "500 FCFA" }],
  },
  {
    id: 6,
    category: "energy",
    name: "SANGO",
    tagline: "L'énergie naturelle de l'Afrique",
    description:
      "Notre boisson énergisante signature, un boost d'énergie naturel aux saveurs africaines.",
    longDescription:
      "SANGO combine des ingrédients naturels traditionnels avec une formule moderne pour vous offrir l'énergie dont vous avez besoin tout au long de la journée. Une alternative saine aux boissons énergisantes classiques.",
    images: [ndjoka_sango, ndjoka_sango1, ndjoka_sango2],
    features: ["Naturel", "Sans taurine", "Vitamines B", "Antioxydants"],
    certifications: ["Bio", "Sans Caféine Ajoutée"],
    nutritionalInfo: {
      calories: "45 kcal",
      proteines: "0g",
      glucides: "11g",
      sucres: "10g",
      sodium: "5mg",
      vitamines: "B6, B12",
    },
    ingredients: [
      "Eau de source",
      "Jus de fruits bio",
      "Extrait de noix de kola",
      "Gingembre",
      "Vitamines B",
    ],
    sizes: [
      { size: "250ml", price: "800 FCFA" },
      { size: "500ml", price: "1400 FCFA" },
    ],
  },
  {
    id: 7,
    category: "energy",
    name: "NDJOKA Drink",
    tagline: "Toute l'énergie, sans les calories",
    description:
      "La version allégée de notre boisson énergisante, même énergie, moins de calories.",
    longDescription:
      "Spécialement conçue pour ceux qui surveillent leur apport calorique, NDJOKA Drink Light offre le même boost d'énergie avec moins de sucres. Une formule équilibrée qui ne fait aucun compromis sur le goût.",
    images: [
      ndjoka_drink,
      ndjoka_drink_ananas,
      ndjoka_drink_citron,
      ndjoka_drink_ginger,
      ndjoka_drink_menthe,
      ndjoka_drink_orange,
      ndjoka_drink_oseille,
    ],
    features: ["Sans sucre", "Sans calories", "Vitamines B", "Antioxydants"],
    certifications: ["Bio", "Sans Caféine Ajoutée", "0% Sucre"],
    nutritionalInfo: {
      calories: "5 kcal",
      proteines: "0g",
      glucides: "1g",
      sucres: "0g",
      sodium: "5mg",
      vitamines: "B6, B12",
    },
    ingredients: [
      "Eau de source",
      "Extrait de noix de kola",
      "Gingembre",
      "Édulcorants naturels (stévia)",
      "Vitamines B",
    ],
    sizes: [
      { size: "250ml", price: "800 FCFA" },
      { size: "500ml", price: "1400 FCFA" },
    ],
  },
];
