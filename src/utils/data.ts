import {
  Search02Icon,
  AiSecurity01Icon,
  DatabaseIcon,
  ViewIcon,
} from "hugeicons-react";

import analyzeImg from "../assets/images/analyze.svg"
import auditImg from "../assets/images/audit.svg"
import databaseImg from "../assets/images/database.svg"
import securityImg from "../assets/images/security.svg"
import emptyImg from "../assets/images/empty.svg"

export const badgesArray = [
  {
    id: 1,
    BadgeIcon: Search02Icon,
    title: "Analyse de données",
    description:
      "Nous convertissons vos données en insights précieux pour guider vos décisions stratégiques. Avec nos analyses approfondies, vous pouvez mieux comprendre vos opérations et identifier des opportunités de croissance.",
  },
  {
    id: 2,
    BadgeIcon: AiSecurity01Icon,
    title: "Cybersécurité",
    description:
      "Nous sécurisons vos systèmes informatiques avec des solutions de sécurité avancées et préventives. Protégez vos informations sensibles contre les cybermenaces et assurez la continuité de votre activité.",
  },
  {
    id: 3,
    BadgeIcon: DatabaseIcon,
    title: "Administration bases de données",
    description:
      "Nous gérons vos bases de données pour garantir leur performance, leur fiabilité et leur sécurité. Notre expertise assure une gestion efficace et optimisée de vos ressources de données.",
  },
  {
    id: 4,
    BadgeIcon: ViewIcon,
    title: "Audit bases de données",
    description:
      "Nous effectuons des audits complets pour détecter les vulnérabilités et assurer la conformité de vos bases de données. Nos audits rigoureux vous aident à maintenir la sécurité et la performance de vos systèmes.",
  },
];

export const badgesImages = [emptyImg, analyzeImg, securityImg, databaseImg, auditImg]