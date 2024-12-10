"use client";

import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import dynamic from "next/dynamic";
import styles from "./InteractiveMap.module.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from "@/components/ui/modal";

const RUAD = dynamic(() => import("./regions/RUAD"), { ssr: false });
const RUAL = dynamic(() => import("./regions/RUAL"), { ssr: false });
const RUALT = dynamic(() => import("./regions/RUALT"), { ssr: false });
const RUAMU = dynamic(() => import("./regions/RUAMU"), { ssr: false });
const RUARK = dynamic(() => import("./regions/RUARK"), { ssr: false });
const RUAST = dynamic(() => import("./regions/RUAST"), { ssr: false });
const RUBA = dynamic(() => import("./regions/RUBA"), { ssr: false });
const RUBEL = dynamic(() => import("./regions/RUBEL"), { ssr: false });
const RUBRY = dynamic(() => import("./regions/RUBRY"), { ssr: false });
const RUBU = dynamic(() => import("./regions/RUBU"), { ssr: false });
const RUCE = dynamic(() => import("./regions/RUCE"), { ssr: false });
const RUCHE = dynamic(() => import("./regions/RUCHE"), { ssr: false });
const RUCHU = dynamic(() => import("./regions/RUCHU"), { ssr: false });
const RUCR = dynamic(() => import("./regions/RUCR"), { ssr: false });
const RUCU = dynamic(() => import("./regions/RUCU"), { ssr: false });
const RUDA = dynamic(() => import("./regions/RUDA"), { ssr: false });
const RUDNR = dynamic(() => import("./regions/RUDNR"), { ssr: false });
const RUHRNO = dynamic(() => import("./regions/RUHRNO"), { ssr: false });
const RUIN = dynamic(() => import("./regions/RUIN"), { ssr: false });
const RUIRK = dynamic(() => import("./regions/RUIRK"), { ssr: false });
const RUIVA = dynamic(() => import("./regions/RUIVA"), { ssr: false });
const RUKAM = dynamic(() => import("./regions/RUKAM"), { ssr: false });
const RUKB = dynamic(() => import("./regions/RUKB"), { ssr: false });
const RUKC = dynamic(() => import("./regions/RUKC"), { ssr: false });
const RUKDA = dynamic(() => import("./regions/RUKDA"), { ssr: false });
const RUKEM = dynamic(() => import("./regions/RUKEM"), { ssr: false });
const RUKGD = dynamic(() => import("./regions/RUKGD"), { ssr: false });
const RUKGN = dynamic(() => import("./regions/RUKGN"), { ssr: false });
const RUKHA = dynamic(() => import("./regions/RUKHA"), { ssr: false });
const RUKHM = dynamic(() => import("./regions/RUKHM"), { ssr: false });
const RUKIR = dynamic(() => import("./regions/RUKIR"), { ssr: false });
const RUKK = dynamic(() => import("./regions/RUKK"), { ssr: false });
const RUKL = dynamic(() => import("./regions/RUKL"), { ssr: false });
const RUKLU = dynamic(() => import("./regions/RUKLU"), { ssr: false });
const RUKO = dynamic(() => import("./regions/RUKO"), { ssr: false });
const RUKOS = dynamic(() => import("./regions/RUKOS"), { ssr: false });
const RUKR = dynamic(() => import("./regions/RUKR"), { ssr: false });
const RUKRS = dynamic(() => import("./regions/RUKRS"), { ssr: false });
const RUKYA = dynamic(() => import("./regions/RUKYA"), { ssr: false });
const RULEN = dynamic(() => import("./regions/RULEN"), { ssr: false });
const RULIP = dynamic(() => import("./regions/RULIP"), { ssr: false });
const RULNR = dynamic(() => import("./regions/RULNR"), { ssr: false });
const RUMAG = dynamic(() => import("./regions/RUMAG"), { ssr: false });
const RUME = dynamic(() => import("./regions/RUME"), { ssr: false });
const RUMO = dynamic(() => import("./regions/RUMO"), { ssr: false });
const RUMOS = dynamic(() => import("./regions/RUMOS"), { ssr: false });
const RUMOW = dynamic(() => import("./regions/RUMOW"), { ssr: false });
const RUMUR = dynamic(() => import("./regions/RUMUR"), { ssr: false });
const RUNEN = dynamic(() => import("./regions/RUNEN"), { ssr: false });
const RUNGR = dynamic(() => import("./regions/RUNGR"), { ssr: false });
const RUNIZ = dynamic(() => import("./regions/RUNIZ"), { ssr: false });
const RUNVS = dynamic(() => import("./regions/RUNVS"), { ssr: false });
const RUOMS = dynamic(() => import("./regions/RUOMS"), { ssr: false });
const RUORE = dynamic(() => import("./regions/RUORE"), { ssr: false });
const RUORL = dynamic(() => import("./regions/RUORL"), { ssr: false });
const RUPER = dynamic(() => import("./regions/RUPER"), { ssr: false });
const RUPNZ = dynamic(() => import("./regions/RUPNZ"), { ssr: false });
const RUPRI = dynamic(() => import("./regions/RUPRI"), { ssr: false });
const RUPSK = dynamic(() => import("./regions/RUPSK"), { ssr: false });
const RUROS = dynamic(() => import("./regions/RUROS"), { ssr: false });
const RURYA = dynamic(() => import("./regions/RURYA"), { ssr: false });
const RUSA = dynamic(() => import("./regions/RUSA"), { ssr: false });
const RUSAK = dynamic(() => import("./regions/RUSAK"), { ssr: false });
const RUSAM = dynamic(() => import("./regions/RUSAM"), { ssr: false });
const RUSAR = dynamic(() => import("./regions/RUSAR"), { ssr: false });
const RUSE = dynamic(() => import("./regions/RUSE"), { ssr: false });
const RUSEV = dynamic(() => import("./regions/RUSEV"), { ssr: false });
const RUSMO = dynamic(() => import("./regions/RUSMO"), { ssr: false });
const RUSPE = dynamic(() => import("./regions/RUSPE"), { ssr: false });
const RUSTA = dynamic(() => import("./regions/RUSTA"), { ssr: false });
const RUSVE = dynamic(() => import("./regions/RUSVE"), { ssr: false });
const RUTAM = dynamic(() => import("./regions/RUTAM"), { ssr: false });
const RUTOM = dynamic(() => import("./regions/RUTOM"), { ssr: false });
const RUTUL = dynamic(() => import("./regions/RUTUL"), { ssr: false });
const RUTVE = dynamic(() => import("./regions/RUTVE"), { ssr: false });
const RUTY = dynamic(() => import("./regions/RUTY"), { ssr: false });
const RUTYU = dynamic(() => import("./regions/RUTYU"), { ssr: false });
const RUUD = dynamic(() => import("./regions/RUUD"), { ssr: false });
const RUULY = dynamic(() => import("./regions/RUULY"), { ssr: false });
const RUVGG = dynamic(() => import("./regions/RUVGG"), { ssr: false });
const RUVLA = dynamic(() => import("./regions/RUVLA"), { ssr: false });
const RUVLG = dynamic(() => import("./regions/RUVLG"), { ssr: false });
const RUVOR = dynamic(() => import("./regions/RUVOR"), { ssr: false });
const RUYAN = dynamic(() => import("./regions/RUYAN"), { ssr: false });
const RUYAR = dynamic(() => import("./regions/RUYAR"), { ssr: false });
const RUYEV = dynamic(() => import("./regions/RUYEV"), { ssr: false });
const RUZAB = dynamic(() => import("./regions/RUZAB"), { ssr: false });
const RUZRO = dynamic(() => import("./regions/RUZRO"), { ssr: false });

interface ClientInteractiveMapProps {
  initialTheme: boolean;
  selectedRegion: string | null;
  onRegionSelect: (regionCode: string) => void; // Added onRegionSelect prop
}

interface RegionInfo {
  name: string;
  description: string;
}

export const regionsData: { [key: string]: RegionInfo } = {
  "RU-AD": {
    name: "Республика Адыгея",
    description: "Здесь будет описание Республика Адыгея.",
  },
  "RU-AL": {
    name: "Республика Алтай",
    description: "Здесь будет описание Республика Алтай.",
  },
  "RU-ALT": {
    name: "Алтайский край",
    description: "Здесь будет описание Алтайский край.",
  },
  "RU-AMU": {
    name: "Амурская область",
    description: "Здесь будет описание Амурская область.",
  },
  "RU-ARK": {
    name: "Архангельская область",
    description: "Здесь будет описание Архангельская область.",
  },
  "RU-AST": {
    name: "Астраханская область",
    description: "Здесь будет описание Астраханская область.",
  },
  "RU-BA": {
    name: "Республика Башкортостан",
    description: "Здесь будет описание Республика Башкортостан.",
  },
  "RU-BEL": {
    name: "Белгородская область",
    description: "Здесь будет описание Белгородская область.",
  },
  "RU-BRY": {
    name: "Брянская область",
    description: "Здесь будет описание Брянская область.",
  },
  "RU-BU": {
    name: "Республика Бурятия",
    description: "Здесь будет описание Республика Бурятия.",
  },
  "RU-CE": {
    name: "Чеченская Республика",
    description: "Здесь будет описание Чеченская Республика.",
  },
  "RU-CHE": {
    name: "Челябинская область",
    description: "Здесь будет описание Челябинская область.",
  },
  "RU-CHU": {
    name: "Чукотский автономный округ",
    description: "Здесь будет описание Чукотский автономный округ.",
  },
  "RU-CR": {
    name: "Республика Крым",
    description: "Здесь будет описание Республика Крым.",
  },
  "RU-CU": {
    name: "Чувашская Республика",
    description: "Здесь будет описание Чувашская Республика.",
  },
  "RU-DA": {
    name: "Республика Дагестан",
    description: "Здесь будет описание Республика Дагестан.",
  },
  "RU-DNR": {
    name: "Донецкая Народная Республика",
    description: "Здесь будет описание Донецкая Народная Республика.",
  },
  "RU-HRNO": {
    name: "Херсонская область",
    description: "Здесь будет описание Херсонская область.",
  },
  "RU-IN": {
    name: "Республика Ингушетия",
    description: "Здесь будет описание Республика Ингушетия.",
  },
  "RU-IRK": {
    name: "Иркутская область",
    description: "Здесь будет описание Иркутская область.",
  },
  "RU-IVA": {
    name: "Ивановская область",
    description: "Здесь будет описание Ивановская область.",
  },
  "RU-KAM": {
    name: "Камчатский край",
    description: "Здесь будет описание Камчатский край.",
  },
  "RU-KB": {
    name: "Кабардино-Балкарская Республика",
    description: "Здесь будет описание Кабардино-Балкарская Республика.",
  },
  "RU-KC": {
    name: "Карачаево-Черкесская Республика",
    description: "Здесь будет описание Карачаево-Черкесская Республика.",
  },
  "RU-KDA": {
    name: "Краснодарский край",
    description: "Здесь будет описание Краснодарский край.",
  },
  "RU-KEM": {
    name: "Кемеровская область - Кузбасс",
    description: "Здесь будет описание Кемеровская область - Кузбасс.",
  },
  "RU-KGD": {
    name: "Калининградская область",
    description: "Здесь будет описание Калининградская область.",
  },
  "RU-KGN": {
    name: "Курганская область",
    description: "Здесь будет описание Курганская область.",
  },
  "RU-KHA": {
    name: "Хабаровский край",
    description: "Здесь будет описание Хабаровский край.",
  },
  "RU-KHM": {
    name: "Ханты-Мансийский автономный округ - Югра",
    description:
      "Здесь будет описание Ханты-Мансийский автономный округ - Югра.",
  },
  "RU-KIR": {
    name: "Кировская область",
    description: "Здесь будет описание Кировская область.",
  },
  "RU-KK": {
    name: "Республика Хакасия",
    description: "Здесь будет описание Республика Хакасия.",
  },
  "RU-KL": {
    name: "Республика Калмыкия",
    description: "Здесь будет описание Республика Калмыкия.",
  },
  "RU-KLU": {
    name: "Калужская область",
    description: "Здесь будет описание Калужская область.",
  },
  "RU-KO": {
    name: "Республика Коми",
    description: "Здесь будет описание Республика Коми.",
  },
  "RU-KOS": {
    name: "Костромская область",
    description: "Здесь будет описание Костромская область.",
  },
  "RU-KR": {
    name: "Республика Карелия",
    description: "Здесь будет описание Республика Карелия.",
  },
  "RU-KRS": {
    name: "Курская область",
    description: "Здесь будет описание Курская область.",
  },
  "RU-KYA": {
    name: "Красноярский край",
    description: "Здесь будет описание Красноярский край.",
  },
  "RU-LEN": {
    name: "Ленинградская область",
    description: "Здесь будет описание Ленинградская область.",
  },
  "RU-LIP": {
    name: "Липецкая область",
    description: "Здесь будет описание Липецкая область.",
  },
  "RU-LNR": {
    name: "Луганская Народная Республика",
    description: "Здесь будет описание Луганская Народная Республика.",
  },
  "RU-MAG": {
    name: "Магаданская область",
    description: "Здесь будет описание Магаданская область.",
  },
  "RU-ME": {
    name: "Республика Марий Эл",
    description: "Здесь будет описание Республика Марий Эл.",
  },
  "RU-MO": {
    name: "Республика Мордовия",
    description: "Здесь будет описание Республика Мордовия.",
  },
  "RU-MOS": {
    name: "Московская область",
    description: "Здесь будет описание Московская область.",
  },
  "RU-MOW": { name: "Москва", description: "Здесь будет описание Москва." },
  "RU-MUR": {
    name: "Мурманская область",
    description: "Здесь будет описание Мурманская область.",
  },
  "RU-NEN": {
    name: "Ненецкий автономный округ",
    description: "Здесь будет описание Ненецкий автономный округ.",
  },
  "RU-NGR": {
    name: "Новгородская область",
    description: "Здесь будет описание Новгородская область.",
  },
  "RU-NIZ": {
    name: "Нижегородская область",
    description: "Здесь будет описание Нижегородская область.",
  },
  "RU-NVS": {
    name: "Новосибирская область",
    description: "Здесь будет описание Новосибирская область.",
  },
  "RU-OMS": {
    name: "Омская область",
    description: "Здесь будет описание Омская область.",
  },
  "RU-ORE": {
    name: "Оренбургская область",
    description: "Здесь будет описание Оренбургская область.",
  },
  "RU-ORL": {
    name: "Орловская область",
    description: "Здесь будет описание Орловская область.",
  },
  "RU-PER": {
    name: "Пермский край",
    description: "Здесь будет описание Пермский край.",
  },
  "RU-PNZ": {
    name: "Пензенская область",
    description: "Здесь будет описание Пензенская область.",
  },
  "RU-PRI": {
    name: "Приморский край",
    description: "Здесь будет описание Приморский край.",
  },
  "RU-PSK": {
    name: "Псковская область",
    description: "Здесь будет описание Псковская область.",
  },
  "RU-ROS": {
    name: "Ростовская область",
    description: "Здесь будет описание Ростовская область.",
  },
  "RU-RYA": {
    name: "Рязанская область",
    description: "Здесь будет описание Рязанская область.",
  },
  "RU-SA": {
    name: "Республика Саха (Якутия)",
    description: "Здесь будет описание Республика Саха (Якутия).",
  },
  "RU-SAK": {
    name: "Сахалинская область",
    description: "Здесь будет описание Сахалинская область.",
  },
  "RU-SAM": {
    name: "Самарская область",
    description: "Здесь будет описание Самарская область.",
  },
  "RU-SAR": {
    name: "Саратовская область",
    description: "Здесь будет описание Саратовская область.",
  },
  "RU-SE": {
    name: "Республика Северная Осетия — Алания",
    description: "Здесь будет описание Республика Северная Осетия — Алания.",
  },
  "RU-SEV": {
    name: "Севастополь",
    description: "Здесь будет описание Севастополь.",
  },
  "RU-SMO": {
    name: "Смоленская область",
    description: "Здесь будет описание Смоленская область.",
  },
  "RU-SPE": {
    name: "Санкт-Петербург",
    description: "Здесь будет описание Санкт-Петербург.",
  },
  "RU-STA": {
    name: "Республика Татарстан",
    description: "Здесь будет описание Республика Татарстан.",
  },
  "RU-SVE": {
    name: "Свердловская область",
    description: "Здесь будет описание Свердловская область.",
  },
  "RU-TAM": {
    name: "Тамбовская область",
    description: "Здесь будет описание Тамбовская область.",
  },
  "RU-TOM": {
    name: "Томская область",
    description: "Здесь будет описание Томская область.",
  },
  "RU-TUL": {
    name: "Тульская область",
    description: "Здесь будет описание Тульская область.",
  },
  "RU-TVE": {
    name: "Тверская область",
    description: "Здесь будет описание Тверская область.",
  },
  "RU-TY": {
    name: "Республика Тыва",
    description: "Здесь будет описание Республика Тыва.",
  },
  "RU-TYU": {
    name: "Тюменская область",
    description: "Здесь будет описание Тюменская область.",
  },
  "RU-UD": {
    name: "Удмуртская Республика",
    description: "Здесь будет описание Удмуртская Республика.",
  },
  "RU-ULY": {
    name: "Ульяновская область",
    description: "Здесь будет описание Ульяновская область.",
  },
  "RU-VGG": {
    name: "Волгоградская область",
    description: "Здесь будет описание Волгоградская область.",
  },
  "RU-VLA": {
    name: "Владимирская область",
    description: "Здесь будет описание Владимирская область.",
  },
  "RU-VLG": {
    name: "Вологодская область",
    description: "Здесь будет описание Вологодская область.",
  },
  "RU-VOR": {
    name: "Воронежская область",
    description: "Здесь будет описание Воронежская область.",
  },
  "RU-YAN": {
    name: "Ямало-Ненецкий автономный округ",
    description: "Здесь будет описание Ямало-Ненецкий автономный округ.",
  },
  "RU-YAR": {
    name: "Ярославская область",
    description: "Здесь будет описание Ярославская область.",
  },
  "RU-YEV": {
    name: "Еврейская авт��номная область",
    description: "Здесь будет описание Еврейская автономная область.",
  },
  "RU-ZAB": {
    name: "Забайкальский край",
    description: "Здесь будет описание Забайкальский край.",
  },
  "RU-ZRO": {
    name: "Запорожская область",
    description: "Здесь будет описание Запорожская область.",
  },
};

const ClientInteractiveMap: React.FC<ClientInteractiveMapProps> = ({
  initialTheme,
  selectedRegion,
  onRegionSelect,
}) => {
  // Added onRegionSelect to props
  const [isDarkTheme, setIsDarkTheme] = useState(initialTheme);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Removed: const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const handleRegionEnter = (regionName: string, event: React.MouseEvent) => {
    setActiveRegion(regionName);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleRegionLeave = () => {
    setActiveRegion(null);
  };

  const handleRegionClick = (regionCode: string) => {
    onRegionSelect(regionCode); // Updated to use onRegionSelect prop
    setIsModalOpen(true);
  };

  return (
    <div
      className={`${styles.mapContainer} ${
        isDarkTheme ? styles.darkTheme : styles.lightTheme
      }`}
    >
      <div className="absolute top-4 left-4 w-32 h-32">
        <svg viewBox="0 0 2535 437" className="w-full h-full">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M265.621 316.699H240.081V233.949H149.157V316.699H124.639V129.745H149.157V214.538H240.081V129.745H265.621V316.699Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1158.51 233.949H1072.7V316.699H1048.18V129.745H1170.77V150.177H1072.7V214.538H1158.51V233.949Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1899.18 296.262H1987.04V316.694H1873.64V129.739H1899.18V296.262ZM2096.35 316.694C2095.33 312.607 2095.33 308.521 2094.31 305.456C2094.31 302.392 2093.28 299.327 2093.28 296.262C2088.18 303.413 2082.05 308.521 2074.9 312.608C2067.74 316.694 2059.57 319.759 2050.38 319.759C2036.07 319.759 2024.84 315.672 2017.69 308.521C2010.53 301.37 2006.45 291.154 2006.45 277.873C2006.45 264.592 2011.56 254.376 2022.79 247.225C2033.01 240.073 2048.33 235.987 2066.72 235.987H2094.31V221.684C2094.31 213.511 2092.26 207.382 2087.16 202.274C2082.05 197.166 2074.9 195.122 2065.7 195.122C2057.53 195.122 2051.4 197.166 2046.29 201.252C2041.18 205.338 2039.14 210.446 2039.14 215.555H2013.6V214.533C2012.58 204.317 2017.69 195.122 2027.9 186.95C2038.12 178.777 2051.4 174.69 2066.72 174.69C2082.05 174.69 2095.33 178.777 2104.52 186.95C2113.72 195.122 2118.83 206.36 2118.83 221.684V288.089C2118.83 293.197 2118.83 298.305 2119.85 302.391C2120.87 307.499 2120.87 311.586 2122.91 315.673H2096.35V316.694ZM2054.46 298.305C2063.66 298.305 2071.83 296.262 2078.98 291.154C2086.13 286.046 2091.24 280.938 2093.28 274.808V252.333H2064.68C2054.46 252.333 2046.29 254.376 2040.16 259.484C2034.03 264.592 2030.97 270.722 2030.97 277.873C2030.97 284.003 2033.01 289.111 2037.1 292.175C2041.18 296.262 2047.31 298.305 2054.46 298.305ZM2274.11 252.333C2274.11 272.765 2269 288.089 2259.81 300.348C2250.61 312.608 2237.33 318.737 2219.96 318.737C2210.77 318.737 2202.6 316.694 2196.47 313.629C2189.32 310.564 2184.21 304.435 2180.12 298.305L2177.06 316.694H2156.62V116.458H2182.17V194.101C2186.25 187.971 2192.38 182.863 2198.51 179.798C2204.64 176.733 2212.81 174.69 2220.99 174.69C2238.35 174.69 2251.63 181.841 2260.83 195.122C2270.02 208.403 2275.13 226.792 2275.13 249.268V252.333H2274.11ZM2248.57 250.289C2248.57 233.943 2245.5 221.684 2239.38 211.468C2233.25 201.252 2225.07 196.144 2212.81 196.144C2204.64 196.144 2198.51 198.187 2193.4 202.274C2188.29 206.36 2184.21 211.468 2181.14 217.598V277.873C2184.21 285.024 2188.29 290.132 2193.4 294.219C2198.51 298.305 2205.66 300.348 2212.81 300.348C2225.07 300.348 2233.25 296.262 2239.38 288.089C2245.5 279.916 2248.57 268.678 2248.57 254.376V250.289ZM2385.47 279.916C2385.47 274.808 2383.42 269.7 2379.34 266.635C2375.25 263.57 2367.08 259.484 2354.82 257.441C2338.47 253.354 2325.19 249.268 2317.02 242.116C2308.85 235.987 2304.76 226.792 2304.76 216.576C2304.76 205.338 2309.87 196.144 2319.06 187.971C2328.26 179.798 2341.54 175.712 2356.86 175.712C2373.21 175.712 2385.47 179.798 2395.68 187.971C2404.88 196.144 2409.98 206.36 2408.96 218.62V219.641H2384.44C2384.44 213.511 2381.38 208.403 2377.29 203.295C2372.18 198.187 2365.03 196.144 2356.86 196.144C2347.67 196.144 2341.54 198.187 2336.43 202.274C2332.34 206.36 2330.3 210.447 2330.3 216.576C2330.3 221.684 2332.34 226.792 2336.43 229.857C2340.51 232.922 2347.67 235.987 2359.93 238.03C2377.29 242.117 2390.57 247.225 2398.75 253.354C2406.92 259.484 2412.03 268.678 2412.03 278.895C2412.03 291.154 2406.92 301.37 2396.7 308.521C2386.49 315.672 2374.23 319.759 2357.88 319.759C2340.52 319.759 2326.21 315.672 2316 306.478C2305.78 297.283 2300.67 287.067 2301.69 274.808V273.786H2326.21C2326.21 282.981 2330.3 289.111 2336.43 293.197C2342.56 297.283 2349.71 299.327 2357.88 299.327C2367.08 299.327 2374.23 297.284 2379.34 294.219C2382.4 290.132 2385.47 285.024 2385.47 279.916Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.5403 414.774H2509.08V19.4109H25.5403V414.774ZM0 0H2534.62V436.228H0V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <button className={styles.themeToggle} onClick={toggleTheme}>
        {isDarkTheme ? <SunIcon /> : <MoonIcon />}
      </button>
      <svg
        viewBox="0 0 680 472"
        preserveAspectRatio="xMidYMid meet"
        className={`${styles.map} ${styles.clickable}`}
        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
      >
        <RUAD
          onMouseEnter={(e) => handleRegionEnter("Республика Адыгея", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-AD")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-AD" ? styles.selected : ""
          }`}
        />
        <RUAL
          onMouseEnter={(e) => handleRegionEnter("Республика Алтай", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-AL")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-AL" ? styles.selected : ""
          }`}
        />
        <RUALT
          onMouseEnter={(e) => handleRegionEnter("Алтайский край", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-ALT")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-ALT" ? styles.selected : ""
          }`}
        />
        <RUAMU
          onMouseEnter={(e) => handleRegionEnter("Амурская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-AMU")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-AMU" ? styles.selected : ""
          }`}
        />
        <RUARK
          onMouseEnter={(e) => handleRegionEnter("Архангельская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-ARK")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-ARK" ? styles.selected : ""
          }`}
        />
        <RUAST
          onMouseEnter={(e) => handleRegionEnter("Астраханская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-AST")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-AST" ? styles.selected : ""
          }`}
        />
        <RUBA
          onMouseEnter={(e) => handleRegionEnter("Республика Башкортостан", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-BA")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-BA" ? styles.selected : ""
          }`}
        />
        <RUBEL
          onMouseEnter={(e) => handleRegionEnter("Белгородская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-BEL")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-BEL" ? styles.selected : ""
          }`}
        />
        <RUBRY
          onMouseEnter={(e) => handleRegionEnter("Брянская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-BRY")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-BRY" ? styles.selected : ""
          }`}
        />
        <RUBU
          onMouseEnter={(e) => handleRegionEnter("Республика Бурятия", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-BU")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-BU" ? styles.selected : ""
          }`}
        />
        <RUCE
          onMouseEnter={(e) => handleRegionEnter("Чеченская Республика", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-CE")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-CE" ? styles.selected : ""
          }`}
        />
        <RUCHE
          onMouseEnter={(e) => handleRegionEnter("Челябинская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-CHE")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-CHE" ? styles.selected : ""
          }`}
        />
        <RUCHU
          onMouseEnter={(e) =>
            handleRegionEnter("Чукотский автономный округ", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-CHU")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-CHU" ? styles.selected : ""
          }`}
        />
        <RUCR
          onMouseEnter={(e) => handleRegionEnter("Республика Крым", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-CR")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-CR" ? styles.selected : ""
          }`}
        />
        <RUCU
          onMouseEnter={(e) => handleRegionEnter("Чувашская Республика", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-CU")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-CU" ? styles.selected : ""
          }`}
        />
        <RUDA
          onMouseEnter={(e) => handleRegionEnter("Республика Дагестан", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-DA")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-DA" ? styles.selected : ""
          }`}
        />
        <RUDNR
          onMouseEnter={(e) =>
            handleRegionEnter("Донецкая Народная Республика", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-DNR")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-DNR" ? styles.selected : ""
          }`}
        />
        <RUHRNO
          onMouseEnter={(e) => handleRegionEnter("Херсонская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-HRNO")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-HRNO" ? styles.selected : ""
          }`}
        />
        <RUIN
          onMouseEnter={(e) => handleRegionEnter("Республика Ингушетия", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-IN")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-IN" ? styles.selected : ""
          }`}
        />
        <RUIRK
          onMouseEnter={(e) => handleRegionEnter("Иркутская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-IRK")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-IRK" ? styles.selected : ""
          }`}
        />
        <RUIVA
          onMouseEnter={(e) => handleRegionEnter("Ивановская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-IVA")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-IVA" ? styles.selected : ""
          }`}
        />
        <RUKAM
          onMouseEnter={(e) => handleRegionEnter("Камчатский край", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KAM")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KAM" ? styles.selected : ""
          }`}
        />
        <RUKB
          onMouseEnter={(e) =>
            handleRegionEnter("Кабардино-Балкарская Республика", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KB")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KB" ? styles.selected : ""
          }`}
        />
        <RUKC
          onMouseEnter={(e) =>
            handleRegionEnter("Карачаево-Черкесская Республика", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KC")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KC" ? styles.selected : ""
          }`}
        />
        <RUKDA
          onMouseEnter={(e) => handleRegionEnter("Краснодарский край", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KDA")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KDA" ? styles.selected : ""
          }`}
        />
        <RUKEM
          onMouseEnter={(e) =>
            handleRegionEnter("Кемеровская область - Кузбасс", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KEM")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KEM" ? styles.selected : ""
          }`}
        />
        <RUKGD
          onMouseEnter={(e) => handleRegionEnter("Калининградская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KGD")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KGD" ? styles.selected : ""
          }`}
        />
        <RUKGN
          onMouseEnter={(e) => handleRegionEnter("Курганская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KGN")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KGN" ? styles.selected : ""
          }`}
        />
        <RUKHA
          onMouseEnter={(e) => handleRegionEnter("Хабаровский край", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KHA")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KHA" ? styles.selected : ""
          }`}
        />
        <RUKHM
          onMouseEnter={(e) =>
            handleRegionEnter("Ханты-Мансийский автономный округ - Югра", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KHM")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KHM" ? styles.selected : ""
          }`}
        />
        <RUKIR
          onMouseEnter={(e) => handleRegionEnter("Кировская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KIR")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KIR" ? styles.selected : ""
          }`}
        />
        <RUKK
          onMouseEnter={(e) => handleRegionEnter("Республика Хакасия", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KK")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KK" ? styles.selected : ""
          }`}
        />
        <RUKL
          onMouseEnter={(e) => handleRegionEnter("Республика Калмыкия", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KL")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KL" ? styles.selected : ""
          }`}
        />
        <RUKLU
          onMouseEnter={(e) => handleRegionEnter("Калужская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KLU")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KLU" ? styles.selected : ""
          }`}
        />
        <RUKO
          onMouseEnter={(e) => handleRegionEnter("Республика Коми", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KO")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KO" ? styles.selected : ""
          }`}
        />
        <RUKOS
          onMouseEnter={(e) => handleRegionEnter("Костромская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KOS")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KOS" ? styles.selected : ""
          }`}
        />
        <RUKR
          onMouseEnter={(e) => handleRegionEnter("Республика Карелия", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KR")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KR" ? styles.selected : ""
          }`}
        />
        <RUKRS
          onMouseEnter={(e) => handleRegionEnter("Курская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KRS")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KRS" ? styles.selected : ""
          }`}
        />
        <RUKYA
          onMouseEnter={(e) => handleRegionEnter("Красноярский край", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-KYA")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-KYA" ? styles.selected : ""
          }`}
        />
        <RULEN
          onMouseEnter={(e) => handleRegionEnter("Ленинградская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-LEN")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-LEN" ? styles.selected : ""
          }`}
        />
        <RULIP
          onMouseEnter={(e) => handleRegionEnter("Липецкая область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-LIP")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-LIP" ? styles.selected : ""
          }`}
        />
        <RULNR
          onMouseEnter={(e) =>
            handleRegionEnter("Луганская Народная Республика", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-LNR")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-LNR" ? styles.selected : ""
          }`}
        />
        <RUMAG
          onMouseEnter={(e) => handleRegionEnter("Магаданская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-MAG")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-MAG" ? styles.selected : ""
          }`}
        />
        <RUME
          onMouseEnter={(e) => handleRegionEnter("Республика Марий Эл", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-ME")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-ME" ? styles.selected : ""
          }`}
        />
        <RUMO
          onMouseEnter={(e) => handleRegionEnter("Республика Мордовия", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-MO")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-MO" ? styles.selected : ""
          }`}
        />
        <RUMOS
          onMouseEnter={(e) => handleRegionEnter("Московская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-MOS")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-MOS" ? styles.selected : ""
          }`}
        />
        <RUMOW
          onMouseEnter={(e) => handleRegionEnter("Москва", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-MOW")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-MOW" ? styles.selected : ""
          }`}
        />
        <RUMUR
          onMouseEnter={(e) => handleRegionEnter("Мурманская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-MUR")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-MUR" ? styles.selected : ""
          }`}
        />
        <RUNEN
          onMouseEnter={(e) =>
            handleRegionEnter("Ненецкий автономный округ", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-NEN")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-NEN" ? styles.selected : ""
          }`}
        />
        <RUNGR
          onMouseEnter={(e) => handleRegionEnter("Новгородская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-NGR")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-NGR" ? styles.selected : ""
          }`}
        />
        <RUNIZ
          onMouseEnter={(e) => handleRegionEnter("Нижегородская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-NIZ")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-NIZ" ? styles.selected : ""
          }`}
        />
        <RUNVS
          onMouseEnter={(e) => handleRegionEnter("Новосибирская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-NVS")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-NVS" ? styles.selected : ""
          }`}
        />
        <RUOMS
          onMouseEnter={(e) => handleRegionEnter("Омская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-OMS")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-OMS" ? styles.selected : ""
          }`}
        />
        <RUORE
          onMouseEnter={(e) => handleRegionEnter("Оренбургская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-ORE")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-ORE" ? styles.selected : ""
          }`}
        />
        <RUORL
          onMouseEnter={(e) => handleRegionEnter("Орловская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-ORL")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-ORL" ? styles.selected : ""
          }`}
        />
        <RUPER
          onMouseEnter={(e) => handleRegionEnter("Пермский край", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-PER")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-PER" ? styles.selected : ""
          }`}
        />
        <RUPNZ
          onMouseEnter={(e) => handleRegionEnter("Пензенская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-PNZ")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-PNZ" ? styles.selected : ""
          }`}
        />
        <RUPRI
          onMouseEnter={(e) => handleRegionEnter("Приморский край", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-PRI")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-PRI" ? styles.selected : ""
          }`}
        />
        <RUPSK
          onMouseEnter={(e) => handleRegionEnter("Псковская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-PSK")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-PSK" ? styles.selected : ""
          }`}
        />
        <RUROS
          onMouseEnter={(e) => handleRegionEnter("Ростовская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-ROS")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-ROS" ? styles.selected : ""
          }`}
        />
        <RURYA
          onMouseEnter={(e) => handleRegionEnter("Рязанская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-RYA")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-RYA" ? styles.selected : ""
          }`}
        />
        <RUSA
          onMouseEnter={(e) => handleRegionEnter("Республика Саха (Якутия)", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-SA")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-SA" ? styles.selected : ""
          }`}
        />
        <RUSAK
          onMouseEnter={(e) => handleRegionEnter("Сахалинская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-SAK")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-SAK" ? styles.selected : ""
          }`}
        />
        <RUSAM
          onMouseEnter={(e) => handleRegionEnter("Самарская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-SAM")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-SAM" ? styles.selected : ""
          }`}
        />
        <RUSAR
          onMouseEnter={(e) => handleRegionEnter("Саратовская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-SAR")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-SAR" ? styles.selected : ""
          }`}
        />
        <RUSE
          onMouseEnter={(e) =>
            handleRegionEnter("Республика Северная Осетия — Алания", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-SE")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-SE" ? styles.selected : ""
          }`}
        />
        <RUSEV
          onMouseEnter={(e) => handleRegionEnter("Севастополь", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-SEV")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-SEV" ? styles.selected : ""
          }`}
        />
        <RUSMO
          onMouseEnter={(e) => handleRegionEnter("Смоленская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-SMO")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-SMO" ? styles.selected : ""
          }`}
        />
        <RUSPE
          onMouseEnter={(e) => handleRegionEnter("Санкт-Петербург", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-SPE")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-SPE" ? styles.selected : ""
          }`}
        />
        <RUSTA
          onMouseEnter={(e) => handleRegionEnter("Республика Татарстан", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-STA")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-STA" ? styles.selected : ""
          }`}
        />
        <RUSVE
          onMouseEnter={(e) => handleRegionEnter("Свердловская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-SVE")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-SVE" ? styles.selected : ""
          }`}
        />
        <RUTAM
          onMouseEnter={(e) => handleRegionEnter("Тамбовская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-TAM")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-TAM" ? styles.selected : ""
          }`}
        />
        <RUTOM
          onMouseEnter={(e) => handleRegionEnter("Томская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-TOM")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-TOM" ? styles.selected : ""
          }`}
        />
        <RUTUL
          onMouseEnter={(e) => handleRegionEnter("Тульская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-TUL")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-TUL" ? styles.selected : ""
          }`}
        />
        <RUTVE
          onMouseEnter={(e) => handleRegionEnter("Тверская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-TVE")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-TVE" ? styles.selected : ""
          }`}
        />
        <RUTY
          onMouseEnter={(e) => handleRegionEnter("Республика Тыва", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-TY")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-TY" ? styles.selected : ""
          }`}
        />
        <RUTYU
          onMouseEnter={(e) => handleRegionEnter("Тюменская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-TYU")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-TYU" ? styles.selected : ""
          }`}
        />
        <RUUD
          onMouseEnter={(e) => handleRegionEnter("Удмуртская Республика", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-UD")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-UD" ? styles.selected : ""
          }`}
        />
        <RUULY
          onMouseEnter={(e) => handleRegionEnter("Ульяновская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-ULY")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-ULY" ? styles.selected : ""
          }`}
        />
        <RUVGG
          onMouseEnter={(e) => handleRegionEnter("Волгоградская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-VGG")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-VGG" ? styles.selected : ""
          }`}
        />
        <RUVLA
          onMouseEnter={(e) => handleRegionEnter("Владимирская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-VLA")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-VLA" ? styles.selected : ""
          }`}
        />
        <RUVLG
          onMouseEnter={(e) => handleRegionEnter("Вологодская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-VLG")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-VLG" ? styles.selected : ""
          }`}
        />
        <RUVOR
          onMouseEnter={(e) => handleRegionEnter("Воронежская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-VOR")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-VOR" ? styles.selected : ""
          }`}
        />
        <RUYAN
          onMouseEnter={(e) =>
            handleRegionEnter("Ямало-Ненецкий автономный округ", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-YAN")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-YAN" ? styles.selected : ""
          }`}
        />
        <RUYAR
          onMouseEnter={(e) => handleRegionEnter("Ярославская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-YAR")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-YAR" ? styles.selected : ""
          }`}
        />
        <RUYEV
          onMouseEnter={(e) =>
            handleRegionEnter("Еврейская автономная область", e)
          }
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-YEV")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-YEV" ? styles.selected : ""
          }`}
        />
        <RUZAB
          onMouseEnter={(e) => handleRegionEnter("Забайкальский край", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-ZAB")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-ZAB" ? styles.selected : ""
          }`}
        />
        <RUZRO
          onMouseEnter={(e) => handleRegionEnter("Запорожская область", e)}
          onMouseLeave={handleRegionLeave}
          onClick={() => handleRegionClick("RU-ZRO")}
          isDarkTheme={isDarkTheme}
          className={`${styles.clickable} ${
            selectedRegion === "RU-ZRO" ? styles.selected : ""
          }`}
        />
      </svg>
      {activeRegion && (
        <div
          className={styles.tooltip}
          style={{
            left: `${mousePosition.x + 10}px`,
            top: `${mousePosition.y + 10}px`,
          }}
        >
          {activeRegion}
        </div>
      )}
      <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>
              {selectedRegion && regionsData[selectedRegion].name}
            </ModalTitle>
            <ModalDescription>
              {selectedRegion && regionsData[selectedRegion].description}
            </ModalDescription>
          </ModalHeader>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ClientInteractiveMap;
