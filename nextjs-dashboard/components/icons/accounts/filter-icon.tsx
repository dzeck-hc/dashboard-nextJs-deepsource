import React from "react";
import { Svg } from "../../styles/svg";

export const FilterIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={{
        cursor: "pointer",
        "& path": {
          fill: "$blue700",
        },
      }}
    >
      <Svg.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.00035 6.21365C2.00035 8.26092 3.68738 9.9273 5.76264 9.9273C7.8379 9.9273 9.52493 8.26092 9.52493 6.21365C9.52493 4.16522 7.8379 2.5 5.76264 2.5C5.47676 2.5 5.19324 2.53135 4.91795 2.59522C4.44266 2.70322 4.14737 3.17236 4.25796 3.64034C4.36855 4.10832 4.84148 4.40327 5.31794 4.29063C5.46147 4.25812 5.61205 4.24186 5.76264 4.24186C6.86497 4.24186 7.76025 5.12557 7.76025 6.21365C7.76025 7.30057 6.86497 8.18544 5.76264 8.18544C4.66031 8.18544 3.76503 7.30057 3.76503 6.21365C3.76503 6.10217 3.77444 5.99185 3.79209 5.88618C3.87326 5.41123 3.54738 4.96299 3.06739 4.88287C2.58152 4.80739 2.13212 5.12441 2.05212 5.59935C2.018 5.79909 2.00035 6.00463 2.00035 6.21365ZM13.8834 7.08423H21.1174C21.6045 7.08423 21.9998 6.69406 21.9998 6.2133C21.9998 5.73255 21.6045 5.34237 21.1174 5.34237H13.8834C13.3964 5.34237 13.0011 5.73255 13.0011 6.2133C13.0011 6.69406 13.3964 7.08423 13.8834 7.08423ZM10.1175 18.657H2.88234C2.39529 18.657 2 18.2669 2 17.7861C2 17.3054 2.39529 16.9152 2.88234 16.9152H10.1175C10.6046 16.9152 10.9998 17.3054 10.9998 17.7861C10.9998 18.2669 10.6046 18.657 10.1175 18.657ZM14.4754 17.7863C14.4754 19.8336 16.1625 21.5 18.2377 21.5C20.3118 21.5 22 19.8336 22 17.7863C22 17.5773 21.9824 17.3718 21.9482 17.1721C21.8682 16.6971 21.4118 16.3766 20.933 16.4556C20.453 16.5357 20.1271 16.9839 20.2083 17.4589C20.2259 17.5646 20.2353 17.6749 20.2353 17.7863C20.2353 18.8733 19.3389 19.7581 18.2377 19.7581C17.1354 19.7581 16.2401 18.8733 16.2401 17.7863C16.2401 16.5496 17.4636 15.587 18.6871 15.8633C19.1612 15.9713 19.6342 15.6752 19.7436 15.2072C19.8518 14.7393 19.553 14.2713 19.0777 14.1656C18.8024 14.1041 18.5201 14.0727 18.2377 14.0727C16.1625 14.0727 14.4754 15.7379 14.4754 17.7863Z"
        fill="#200E32"
     />
    </Svg>
  );
};
