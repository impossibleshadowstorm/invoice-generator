const Country = [
  { name: "Afghanistan", code: "AF" },
  { name: "land Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote D'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People'S Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People'S Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

const Currency = [
  {
    country: "AFGHANISTAN",
    currency: "AFN",
  },
  {
    country: "ÅLAND ISLANDS",
    currency: "EUR",
  },
  {
    country: "ALBANIA",
    currency: "ALL",
  },
  {
    country: "ALGERIA",
    currency: "DZD",
  },
  {
    country: "AMERICAN SAMOA",
    currency: "USD",
  },
  {
    country: "ANDORRA",
    currency: "EUR",
  },
  {
    country: "ANGOLA",
    currency: "AOA",
  },
  {
    country: "ANGUILLA",
    currency: "XCD",
  },
  {
    country: "ANTARCTICA",
    currency: "",
  },
  {
    country: "ANTIGUA AND BARBUDA",
    currency: "XCD",
  },
  {
    country: "ARGENTINA",
    currency: "ARS",
  },
  {
    country: "ARMENIA",
    currency: "AMD",
  },
  {
    country: "ARUBA",
    currency: "AWG",
  },
  {
    country: "AUSTRALIA",
    currency: "AUD",
  },
  {
    country: "AUSTRIA",
    currency: "EUR",
  },
  {
    country: "AZERBAIJAN",
    currency: "AZN",
  },
  {
    country: "BAHAMAS (THE)",
    currency: "BSD",
  },
  {
    country: "BAHRAIN",
    currency: "BHD",
  },
  {
    country: "BANGLADESH",
    currency: "BDT",
  },
  {
    country: "BARBADOS",
    currency: "BBD",
  },
  {
    country: "BELARUS",
    currency: "BYN",
  },
  {
    country: "BELGIUM",
    currency: "EUR",
  },
  {
    country: "BELIZE",
    currency: "BZD",
  },
  {
    country: "BENIN",
    currency: "XOF",
  },
  {
    country: "BERMUDA",
    currency: "BMD",
  },
  {
    country: "BHUTAN",
    currency: "INR",
  },
  {
    country: "BHUTAN",
    currency: "BTN",
  },
  {
    country: "BOLIVIA (PLURINATIONAL STATE OF)",
    currency: "BOB",
  },
  {
    country: "BOLIVIA (PLURINATIONAL STATE OF)",
    currency: "BOV",
  },
  {
    country: "BONAIRE, SINT EUSTATIUS AND SABA",
    currency: "USD",
  },
  {
    country: "BOSNIA AND HERZEGOVINA",
    currency: "BAM",
  },
  {
    country: "BOTSWANA",
    currency: "BWP",
  },
  {
    country: "BOUVET ISLAND",
    currency: "NOK",
  },
  {
    country: "BRAZIL",
    currency: "BRL",
  },
  {
    country: "BRITISH INDIAN OCEAN TERRITORY (THE)",
    currency: "USD",
  },
  {
    country: "BRUNEI DARUSSALAM",
    currency: "BND",
  },
  {
    country: "BULGARIA",
    currency: "BGN",
  },
  {
    country: "BURKINA FASO",
    currency: "XOF",
  },
  {
    country: "BURUNDI",
    currency: "BIF",
  },
  {
    country: "CABO VERDE",
    currency: "CVE",
  },
  {
    country: "CAMBODIA",
    currency: "KHR",
  },
  {
    country: "CAMEROON",
    currency: "XAF",
  },
  {
    country: "CANADA",
    currency: "CAD",
  },
  {
    country: "CAYMAN ISLANDS (THE)",
    currency: "KYD",
  },
  {
    country: "CENTRAL AFRICAN REPUBLIC (THE)",
    currency: "XAF",
  },
  {
    country: "CHAD",
    currency: "XAF",
  },
  {
    country: "CHILE",
    currency: "CLP",
  },
  {
    country: "CHILE",
    currency: "CLF",
  },
  {
    country: "CHINA",
    currency: "CNY",
  },
  {
    country: "CHRISTMAS ISLAND",
    currency: "AUD",
  },
  {
    country: "COCOS (KEELING) ISLANDS (THE)",
    currency: "AUD",
  },
  {
    country: "COLOMBIA",
    currency: "COP",
  },
  {
    country: "COLOMBIA",
    currency: "COU",
  },
  {
    country: "COMOROS (THE)",
    currency: "KMF",
  },
  {
    country: "CONGO (THE DEMOCRATIC REPUBLIC OF THE)",
    currency: "CDF",
  },
  {
    country: "CONGO (THE)",
    currency: "XAF",
  },
  {
    country: "COOK ISLANDS (THE)",
    currency: "NZD",
  },
  {
    country: "COSTA RICA",
    currency: "CRC",
  },
  {
    country: "CÔTE D'IVOIRE",
    currency: "XOF",
  },
  {
    country: "CROATIA",
    currency: "HRK",
  },
  {
    country: "CUBA",
    currency: "CUP",
  },
  {
    country: "CUBA",
    currency: "CUC",
  },
  {
    country: "CURAÇAO",
    currency: "ANG",
  },
  {
    country: "CYPRUS",
    currency: "EUR",
  },
  {
    country: "CZECHIA",
    currency: "CZK",
  },
  {
    country: "DENMARK",
    currency: "DKK",
  },
  {
    country: "DJIBOUTI",
    currency: "DJF",
  },
  {
    country: "DOMINICA",
    currency: "XCD",
  },
  {
    country: "DOMINICAN REPUBLIC (THE)",
    currency: "DOP",
  },
  {
    country: "ECUADOR",
    currency: "USD",
  },
  {
    country: "EGYPT",
    currency: "EGP",
  },
  {
    country: "EL SALVADOR",
    currency: "SVC",
  },
  {
    country: "EL SALVADOR",
    currency: "USD",
  },
  {
    country: "EQUATORIAL GUINEA",
    currency: "XAF",
  },
  {
    country: "ERITREA",
    currency: "ERN",
  },
  {
    country: "ESTONIA",
    currency: "EUR",
  },
  {
    country: "ESWATINI",
    currency: "SZL",
  },
  {
    country: "ETHIOPIA",
    currency: "ETB",
  },
  {
    country: "EUROPEAN UNION",
    currency: "EUR",
  },
  {
    country: "FALKLAND ISLANDS (THE) [MALVINAS]",
    currency: "FKP",
  },
  {
    country: "FAROE ISLANDS (THE)",
    currency: "DKK",
  },
  {
    country: "FIJI",
    currency: "FJD",
  },
  {
    country: "FINLAND",
    currency: "EUR",
  },
  {
    country: "FRANCE",
    currency: "EUR",
  },
  {
    country: "FRENCH GUIANA",
    currency: "EUR",
  },
  {
    country: "FRENCH POLYNESIA",
    currency: "XPF",
  },
  {
    country: "FRENCH SOUTHERN TERRITORIES (THE)",
    currency: "EUR",
  },
  {
    country: "GABON",
    currency: "XAF",
  },
  {
    country: "GAMBIA (THE)",
    currency: "GMD",
  },
  {
    country: "GEORGIA",
    currency: "GEL",
  },
  {
    country: "GERMANY",
    currency: "EUR",
  },
  {
    country: "GHANA",
    currency: "GHS",
  },
  {
    country: "GIBRALTAR",
    currency: "GIP",
  },
  {
    country: "GREECE",
    currency: "EUR",
  },
  {
    country: "GREENLAND",
    currency: "DKK",
  },
  {
    country: "GRENADA",
    currency: "XCD",
  },
  {
    country: "GUADELOUPE",
    currency: "EUR",
  },
  {
    country: "GUAM",
    currency: "USD",
  },
  {
    country: "GUATEMALA",
    currency: "GTQ",
  },
  {
    country: "GUERNSEY",
    currency: "GBP",
  },
  {
    country: "GUINEA",
    currency: "GNF",
  },
  {
    country: "GUINEA-BISSAU",
    currency: "XOF",
  },
  {
    country: "GUYANA",
    currency: "GYD",
  },
  {
    country: "HAITI",
    currency: "HTG",
  },
  {
    country: "HAITI",
    currency: "USD",
  },
  {
    country: "HEARD ISLAND AND McDONALD ISLANDS",
    currency: "AUD",
  },
  {
    country: "HOLY SEE (THE)",
    currency: "EUR",
  },
  {
    country: "HONDURAS",
    currency: "HNL",
  },
  {
    country: "HONG KONG",
    currency: "HKD",
  },
  {
    country: "HUNGARY",
    currency: "HUF",
  },
  {
    country: "ICELAND",
    currency: "ISK",
  },
  {
    country: "INDIA",
    currency: "INR",
  },
  {
    country: "INDONESIA",
    currency: "IDR",
  },
  {
    country: "INTERNATIONAL MONETARY FUND (IMF)",
    currency: "XDR",
  },
  {
    country: "IRAN (ISLAMIC REPUBLIC OF)",
    currency: "IRR",
  },
  {
    country: "IRAQ",
    currency: "IQD",
  },
  {
    country: "IRELAND",
    currency: "EUR",
  },
  {
    country: "ISLE OF MAN",
    currency: "GBP",
  },
  {
    country: "ISRAEL",
    currency: "ILS",
  },
  {
    country: "ITALY",
    currency: "EUR",
  },
  {
    country: "JAMAICA",
    currency: "JMD",
  },
  {
    country: "JAPAN",
    currency: "JPY",
  },
  {
    country: "JERSEY",
    currency: "GBP",
  },
  {
    country: "JORDAN",
    currency: "JOD",
  },
  {
    country: "KAZAKHSTAN",
    currency: "KZT",
  },
  {
    country: "KENYA",
    currency: "KES",
  },
  {
    country: "KIRIBATI",
    currency: "AUD",
  },
  {
    country: "KOREA (THE DEMOCRATIC PEOPLE'S REPUBLIC OF)",
    currency: "KPW",
  },
  {
    country: "KOREA (THE REPUBLIC OF)",
    currency: "KRW",
  },
  {
    country: "KUWAIT",
    currency: "KWD",
  },
  {
    country: "KYRGYZSTAN",
    currency: "KGS",
  },
  {
    country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC (THE)",
    currency: "LAK",
  },
  {
    country: "LATVIA",
    currency: "EUR",
  },
  {
    country: "LEBANON",
    currency: "LBP",
  },
  {
    country: "LESOTHO",
    currency: "LSL",
  },
  {
    country: "LESOTHO",
    currency: "ZAR",
  },
  {
    country: "LIBERIA",
    currency: "LRD",
  },
  {
    country: "LIBYA",
    currency: "LYD",
  },
  {
    country: "LIECHTENSTEIN",
    currency: "CHF",
  },
  {
    country: "LITHUANIA",
    currency: "EUR",
  },
  {
    country: "LUXEMBOURG",
    currency: "EUR",
  },
  {
    country: "MACAO",
    currency: "MOP",
  },
  {
    country: "NORTH MACEDONIA",
    currency: "MKD",
  },
  {
    country: "MADAGASCAR",
    currency: "MGA",
  },
  {
    country: "MALAWI",
    currency: "MWK",
  },
  {
    country: "MALAYSIA",
    currency: "MYR",
  },
  {
    country: "MALDIVES",
    currency: "MVR",
  },
  {
    country: "MALI",
    currency: "XOF",
  },
  {
    country: "MALTA",
    currency: "EUR",
  },
  {
    country: "MARSHALL ISLANDS (THE)",
    currency: "USD",
  },
  {
    country: "MARTINIQUE",
    currency: "EUR",
  },
  {
    country: "MAURITANIA",
    currency: "MRU",
  },
  {
    country: "MAURITIUS",
    currency: "MUR",
  },
  {
    country: "MAYOTTE",
    currency: "EUR",
  },
  {
    country: "MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP",
    currency: "XUA",
  },
  {
    country: "MEXICO",
    currency: "MXN",
  },
  {
    country: "MEXICO",
    currency: "MXV",
  },
  {
    country: "MICRONESIA (FEDERATED STATES OF)",
    currency: "USD",
  },
  {
    country: "MOLDOVA (THE REPUBLIC OF)",
    currency: "MDL",
  },
  {
    country: "MONACO",
    currency: "EUR",
  },
  {
    country: "MONGOLIA",
    currency: "MNT",
  },
  {
    country: "MONTENEGRO",
    currency: "EUR",
  },
  {
    country: "MONTSERRAT",
    currency: "XCD",
  },
  {
    country: "MOROCCO",
    currency: "MAD",
  },
  {
    country: "MOZAMBIQUE",
    currency: "MZN",
  },
  {
    country: "MYANMAR",
    currency: "MMK",
  },
  {
    country: "NAMIBIA",
    currency: "NAD",
  },
  {
    country: "NAMIBIA",
    currency: "ZAR",
  },
  {
    country: "NAURU",
    currency: "AUD",
  },
  {
    country: "NEPAL",
    currency: "NPR",
  },
  {
    country: "NETHERLANDS (THE)",
    currency: "EUR",
  },
  {
    country: "NEW CALEDONIA",
    currency: "XPF",
  },
  {
    country: "NEW ZEALAND",
    currency: "NZD",
  },
  {
    country: "NICARAGUA",
    currency: "NIO",
  },
  {
    country: "NIGER (THE)",
    currency: "XOF",
  },
  {
    country: "NIGERIA",
    currency: "NGN",
  },
  {
    country: "NIUE",
    currency: "NZD",
  },
  {
    country: "NORFOLK ISLAND",
    currency: "AUD",
  },
  {
    country: "NORTHERN MARIANA ISLANDS (THE)",
    currency: "USD",
  },
  {
    country: "NORWAY",
    currency: "NOK",
  },
  {
    country: "OMAN",
    currency: "OMR",
  },
  {
    country: "PAKISTAN",
    currency: "PKR",
  },
  {
    country: "PALAU",
    currency: "USD",
  },
  {
    country: "PALESTINE, STATE OF",
    currency: "",
  },
  {
    country: "PANAMA",
    currency: "PAB",
  },
  {
    country: "PANAMA",
    currency: "USD",
  },
  {
    country: "PAPUA NEW GUINEA",
    currency: "PGK",
  },
  {
    country: "PARAGUAY",
    currency: "PYG",
  },
  {
    country: "PERU",
    currency: "PEN",
  },
  {
    country: "PHILIPPINES (THE)",
    currency: "PHP",
  },
  {
    country: "PITCAIRN",
    currency: "NZD",
  },
  {
    country: "POLAND",
    currency: "PLN",
  },
  {
    country: "PORTUGAL",
    currency: "EUR",
  },
  {
    country: "PUERTO RICO",
    currency: "USD",
  },
  {
    country: "QATAR",
    currency: "QAR",
  },
  {
    country: "RÉUNION",
    currency: "EUR",
  },
  {
    country: "ROMANIA",
    currency: "RON",
  },
  {
    country: "RUSSIAN FEDERATION (THE)",
    currency: "RUB",
  },
  {
    country: "RWANDA",
    currency: "RWF",
  },
  {
    country: "SAINT BARTHÉLEMY",
    currency: "EUR",
  },
  {
    country: "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA",
    currency: "SHP",
  },
  {
    country: "SAINT KITTS AND NEVIS",
    currency: "XCD",
  },
  {
    country: "SAINT LUCIA",
    currency: "XCD",
  },
  {
    country: "SAINT MARTIN (FRENCH PART)",
    currency: "EUR",
  },
  {
    country: "SAINT PIERRE AND MIQUELON",
    currency: "EUR",
  },
  {
    country: "SAINT VINCENT AND THE GRENADINES",
    currency: "XCD",
  },
  {
    country: "SAMOA",
    currency: "WST",
  },
  {
    country: "SAN MARINO",
    currency: "EUR",
  },
  {
    country: "SAO TOME AND PRINCIPE",
    currency: "STN",
  },
  {
    country: "SAUDI ARABIA",
    currency: "SAR",
  },
  {
    country: "SENEGAL",
    currency: "XOF",
  },
  {
    country: "SERBIA",
    currency: "RSD",
  },
  {
    country: "SEYCHELLES",
    currency: "SCR",
  },
  {
    country: "SIERRA LEONE",
    currency: "SLL",
  },
  {
    country: "SINGAPORE",
    currency: "SGD",
  },
  {
    country: "SINT MAARTEN (DUTCH PART)",
    currency: "ANG",
  },
  {
    country: 'SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE',
    currency: "XSU",
  },
  {
    country: "SLOVAKIA",
    currency: "EUR",
  },
  {
    country: "SLOVENIA",
    currency: "EUR",
  },
  {
    country: "SOLOMON ISLANDS",
    currency: "SBD",
  },
  {
    country: "SOMALIA",
    currency: "SOS",
  },
  {
    country: "SOUTH AFRICA",
    currency: "ZAR",
  },
  {
    country: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
    currency: "",
  },
  {
    country: "SOUTH SUDAN",
    currency: "SSP",
  },
  {
    country: "SPAIN",
    currency: "EUR",
  },
  {
    country: "SRI LANKA",
    currency: "LKR",
  },
  {
    country: "SUDAN (THE)",
    currency: "SDG",
  },
  {
    country: "SURINAME",
    currency: "SRD",
  },
  {
    country: "SVALBARD AND JAN MAYEN",
    currency: "NOK",
  },
  {
    country: "SWEDEN",
    currency: "SEK",
  },
  {
    country: "SWITZERLAND",
    currency: "CHF",
  },
  {
    country: "SWITZERLAND",
    currency: "CHE",
  },
  {
    country: "SWITZERLAND",
    currency: "CHW",
  },
  {
    country: "SYRIAN ARAB REPUBLIC",
    currency: "SYP",
  },
  {
    country: "TAIWAN (PROVINCE OF CHINA)",
    currency: "TWD",
  },
  {
    country: "TAJIKISTAN",
    currency: "TJS",
  },
  {
    country: "TANZANIA, UNITED REPUBLIC OF",
    currency: "TZS",
  },
  {
    country: "THAILAND",
    currency: "THB",
  },
  {
    country: "TIMOR-LESTE",
    currency: "USD",
  },
  {
    country: "TOGO",
    currency: "XOF",
  },
  {
    country: "TOKELAU",
    currency: "NZD",
  },
  {
    country: "TONGA",
    currency: "TOP",
  },
  {
    country: "TRINIDAD AND TOBAGO",
    currency: "TTD",
  },
  {
    country: "TUNISIA",
    currency: "TND",
  },
  {
    country: "TURKEY",
    currency: "TRY",
  },
  {
    country: "TURKMENISTAN",
    currency: "TMT",
  },
  {
    country: "TURKS AND CAICOS ISLANDS (THE)",
    currency: "USD",
  },
  {
    country: "TUVALU",
    currency: "AUD",
  },
  {
    country: "UGANDA",
    currency: "UGX",
  },
  {
    country: "UKRAINE",
    currency: "UAH",
  },
  {
    country: "UNITED ARAB EMIRATES (THE)",
    currency: "AED",
  },
  {
    country: "UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)",
    currency: "GBP",
  },
  {
    country: "UNITED STATES MINOR OUTLYING ISLANDS (THE)",
    currency: "USD",
  },
  {
    country: "UNITED STATES OF AMERICA (THE)",
    currency: "USD",
  },
  {
    country: "UNITED STATES OF AMERICA (THE)",
    currency: "USN",
  },
  {
    country: "URUGUAY",
    currency: "UYU",
  },
  {
    country: "URUGUAY",
    currency: "UYI",
  },
  {
    country: "URUGUAY",
    currency: "UYW",
  },
  {
    country: "UZBEKISTAN",
    currency: "UZS",
  },
  {
    country: "VANUATU",
    currency: "VUV",
  },
  {
    country: "VENEZUELA (BOLIVARIAN REPUBLIC OF)",
    currency: "VES",
  },
  {
    country: "VIET NAM",
    currency: "VND",
  },
  {
    country: "VIRGIN ISLANDS (BRITISH)",
    currency: "USD",
  },
  {
    country: "VIRGIN ISLANDS (U.S.)",
    currency: "USD",
  },
  {
    country: "WALLIS AND FUTUNA",
    currency: "XPF",
  },
  {
    country: "WESTERN SAHARA",
    currency: "MAD",
  },
  {
    country: "YEMEN",
    currency: "YER",
  },
  {
    country: "ZAMBIA",
    currency: "ZMW",
  },
  {
    country: "ZIMBABWE",
    currency: "ZWL",
  },
  {
    country: "ZZ01_Bond Markets Unit European_EURCO",
    currency: "XBA",
  },
  {
    country: "ZZ02_Bond Markets Unit European_EMU-6",
    currency: "XBB",
  },
  {
    country: "ZZ03_Bond Markets Unit European_EUA-9",
    currency: "XBC",
  },
  {
    country: "ZZ04_Bond Markets Unit European_EUA-17",
    currency: "XBD",
  },
  {
    country: "ZZ06_Testing_Code",
    currency: "XTS",
  },
  {
    country: "ZZ07_No_Currency",
    currency: "XXX",
  },
  {
    country: "ZZ08_Gold",
    currency: "XAU",
  },
  {
    country: "ZZ09_Palladium",
    currency: "XPD",
  },
  {
    country: "ZZ10_Platinum",
    currency: "XPT",
  },
  {
    country: "ZZ11_Silver",
    currency: "XAG",
  },
  {
    country: "AFGHANISTAN",
    currency: "AFA",
  },
  {
    country: "ÅLAND ISLANDS",
    currency: "FIM",
  },
  {
    country: "ALBANIA",
    currency: "ALK",
  },
  {
    country: "ANDORRA",
    currency: "ADP",
  },
  {
    country: "ANDORRA",
    currency: "ESP",
  },
  {
    country: "ANDORRA",
    currency: "FRF",
  },
  {
    country: "ANGOLA",
    currency: "AOK",
  },
  {
    country: "ANGOLA",
    currency: "AON",
  },
  {
    country: "ANGOLA",
    currency: "AOR",
  },
  {
    country: "ARGENTINA",
    currency: "ARA",
  },
  {
    country: "ARGENTINA",
    currency: "ARP",
  },
  {
    country: "ARGENTINA",
    currency: "ARY",
  },
  {
    country: "ARMENIA",
    currency: "RUR",
  },
  {
    country: "AUSTRIA",
    currency: "ATS",
  },
  {
    country: "AZERBAIJAN",
    currency: "AYM",
  },
  {
    country: "AZERBAIJAN",
    currency: "AZM",
  },
  {
    country: "AZERBAIJAN",
    currency: "RUR",
  },
  {
    country: "BELARUS",
    currency: "BYB",
  },
  {
    country: "BELARUS",
    currency: "BYR",
  },
  {
    country: "BELARUS",
    currency: "RUR",
  },
  {
    country: "BELGIUM",
    currency: "BEC",
  },
  {
    country: "BELGIUM",
    currency: "BEF",
  },
  {
    country: "BELGIUM",
    currency: "BEL",
  },
  {
    country: "BOLIVIA",
    currency: "BOP",
  },
  {
    country: "BOSNIA AND HERZEGOVINA",
    currency: "BAD",
  },
  {
    country: "BRAZIL",
    currency: "BRB",
  },
  {
    country: "BRAZIL",
    currency: "BRC",
  },
  {
    country: "BRAZIL",
    currency: "BRE",
  },
  {
    country: "BRAZIL",
    currency: "BRN",
  },
  {
    country: "BRAZIL",
    currency: "BRR",
  },
  {
    country: "BULGARIA",
    currency: "BGJ",
  },
  {
    country: "BULGARIA",
    currency: "BGK",
  },
  {
    country: "BULGARIA",
    currency: "BGL",
  },
  {
    country: "BURMA",
    currency: "BUK",
  },
  {
    country: "CROATIA",
    currency: "HRD",
  },
  {
    country: "CROATIA",
    currency: "HRK",
  },
  {
    country: "CYPRUS",
    currency: "CYP",
  },
  {
    country: "CZECHOSLOVAKIA",
    currency: "CSJ",
  },
  {
    country: "CZECHOSLOVAKIA",
    currency: "CSK",
  },
  {
    country: "ECUADOR",
    currency: "ECS",
  },
  {
    country: "ECUADOR",
    currency: "ECV",
  },
  {
    country: "EQUATORIAL GUINEA",
    currency: "GQE",
  },
  {
    country: "ESTONIA",
    currency: "EEK",
  },
  {
    country: "EUROPEAN MONETARY CO-OPERATION FUND (EMCF)",
    currency: "XEU",
  },
  {
    country: "FINLAND",
    currency: "FIM",
  },
  {
    country: "FRANCE",
    currency: "FRF",
  },
  {
    country: "FRENCH GUIANA",
    currency: "FRF",
  },
  {
    country: "FRENCH SOUTHERN TERRITORIES",
    currency: "FRF",
  },
  {
    country: "GEORGIA",
    currency: "GEK",
  },
  {
    country: "GEORGIA",
    currency: "RUR",
  },
  {
    country: "GERMAN DEMOCRATIC REPUBLIC",
    currency: "DDM",
  },
  {
    country: "GERMANY",
    currency: "DEM",
  },
  {
    country: "GHANA",
    currency: "GHC",
  },
  {
    country: "GHANA",
    currency: "GHP",
  },
  {
    country: "GREECE",
    currency: "GRD",
  },
  {
    country: "GUADELOUPE",
    currency: "FRF",
  },
  {
    country: "GUINEA",
    currency: "GNE",
  },
  {
    country: "GUINEA",
    currency: "GNS",
  },
  {
    country: "GUINEA-BISSAU",
    currency: "GWE",
  },
  {
    country: "GUINEA-BISSAU",
    currency: "GWP",
  },
  {
    country: "HOLY SEE (VATICAN CITY STATE)",
    currency: "ITL",
  },
  {
    country: "ICELAND",
    currency: "ISJ",
  },
  {
    country: "IRELAND",
    currency: "IEP",
  },
  {
    country: "ISRAEL",
    currency: "ILP",
  },
  {
    country: "ISRAEL",
    currency: "ILR",
  },
  {
    country: "ITALY",
    currency: "ITL",
  },
  {
    country: "KAZAKHSTAN",
    currency: "RUR",
  },
  {
    country: "KYRGYZSTAN",
    currency: "RUR",
  },
  {
    country: "LAO",
    currency: "LAJ",
  },
  {
    country: "LATVIA",
    currency: "LVL",
  },
  {
    country: "LATVIA",
    currency: "LVR",
  },
  {
    country: "LESOTHO",
    currency: "LSM",
  },
  {
    country: "LESOTHO",
    currency: "ZAL",
  },
  {
    country: "LITHUANIA",
    currency: "LTL",
  },
  {
    country: "LITHUANIA",
    currency: "LTT",
  },
  {
    country: "LUXEMBOURG",
    currency: "LUC",
  },
  {
    country: "LUXEMBOURG",
    currency: "LUF",
  },
  {
    country: "LUXEMBOURG",
    currency: "LUL",
  },
  {
    country: "MADAGASCAR",
    currency: "MGF",
  },
  {
    country: "MALAWI",
    currency: "MWK",
  },
  {
    country: "MALDIVES",
    currency: "MVQ",
  },
  {
    country: "MALI",
    currency: "MLF",
  },
  {
    country: "MALTA",
    currency: "MTL",
  },
  {
    country: "MALTA",
    currency: "MTP",
  },
  {
    country: "MARTINIQUE",
    currency: "FRF",
  },
  {
    country: "MAURITANIA",
    currency: "MRO",
  },
  {
    country: "MAYOTTE",
    currency: "FRF",
  },
  {
    country: "MEXICO",
    currency: "MXP",
  },
  {
    country: "MOLDOVA, REPUBLIC OF",
    currency: "RUR",
  },
  {
    country: "MONACO",
    currency: "FRF",
  },
  {
    country: "MOZAMBIQUE",
    currency: "MZE",
  },
  {
    country: "MOZAMBIQUE",
    currency: "MZM",
  },
  {
    country: "NETHERLANDS",
    currency: "NLG",
  },
  {
    country: "NETHERLANDS ANTILLES",
    currency: "ANG",
  },
  {
    country: "NICARAGUA",
    currency: "NIC",
  },
  {
    country: "PERU",
    currency: "PEH",
  },
  {
    country: "PERU",
    currency: "PEI",
  },
  {
    country: "PERU",
    currency: "PEN",
  },
  {
    country: "PERU",
    currency: "PES",
  },
  {
    country: "POLAND",
    currency: "PLZ",
  },
  {
    country: "PORTUGAL",
    currency: "PTE",
  },
  {
    country: "RÉUNION",
    currency: "FRF",
  },
  {
    country: "ROMANIA",
    currency: "ROK",
  },
  {
    country: "ROMANIA",
    currency: "ROL",
  },
  {
    country: "ROMANIA",
    currency: "RON",
  },
  {
    country: "RUSSIAN FEDERATION",
    currency: "RUR",
  },
  {
    country: "SAINT MARTIN",
    currency: "FRF",
  },
  {
    country: "SAINT PIERRE AND MIQUELON",
    currency: "FRF",
  },
  {
    country: "SAINT-BARTHÉLEMY",
    currency: "FRF",
  },
  {
    country: "SAN MARINO",
    currency: "ITL",
  },
  {
    country: "SAO TOME AND PRINCIPE",
    currency: "STD",
  },
  {
    country: "SERBIA AND MONTENEGRO",
    currency: "CSD",
  },
  {
    country: "SERBIA AND MONTENEGRO",
    currency: "EUR",
  },
  {
    country: "SLOVAKIA",
    currency: "SKK",
  },
  {
    country: "SLOVENIA",
    currency: "SIT",
  },
  {
    country: "SOUTH AFRICA",
    currency: "ZAL",
  },
  {
    country: "SOUTH SUDAN",
    currency: "SDG",
  },
  {
    country: "SOUTHERN RHODESIA",
    currency: "RHD",
  },
  {
    country: "SPAIN",
    currency: "ESA",
  },
  {
    country: "SPAIN",
    currency: "ESB",
  },
  {
    country: "SPAIN",
    currency: "ESP",
  },
  {
    country: "SUDAN",
    currency: "SDD",
  },
  {
    country: "SUDAN",
    currency: "SDP",
  },
  {
    country: "SURINAME",
    currency: "SRG",
  },
  {
    country: "SWAZILAND",
    currency: "SZL",
  },
  {
    country: "SWITZERLAND",
    currency: "CHC",
  },
  {
    country: "TAJIKISTAN",
    currency: "RUR",
  },
  {
    country: "TAJIKISTAN",
    currency: "TJR",
  },
  {
    country: "TIMOR-LESTE",
    currency: "IDR",
  },
  {
    country: "TIMOR-LESTE",
    currency: "TPE",
  },
  {
    country: "TURKEY",
    currency: "TRL",
  },
  {
    country: "TURKEY",
    currency: "TRY",
  },
  {
    country: "TURKMENISTAN",
    currency: "RUR",
  },
  {
    country: "TURKMENISTAN",
    currency: "TMM",
  },
  {
    country: "UGANDA",
    currency: "UGS",
  },
  {
    country: "UGANDA",
    currency: "UGW",
  },
  {
    country: "UKRAINE",
    currency: "UAK",
  },
  {
    country: "UNION OF SOVIET SOCIALIST REPUBLICS",
    currency: "SUR",
  },
  {
    country: "UNITED STATES",
    currency: "USS",
  },
  {
    country: "URUGUAY",
    currency: "UYN",
  },
  {
    country: "URUGUAY",
    currency: "UYP",
  },
  {
    country: "UZBEKISTAN",
    currency: "RUR",
  },
  {
    country: "VENEZUELA",
    currency: "VEB",
  },
  {
    country: "VENEZUELA",
    currency: "VEF",
  },
  {
    country: "VENEZUELA (BOLIVARIAN REPUBLIC OF)",
    currency: "VEF",
  },
  {
    country: "VENEZUELA (BOLIVARIAN REPUBLIC OF)",
    currency: "VEF",
  },
  {
    country: "VIETNAM",
    currency: "VNC",
  },
  {
    country: "YEMEN, DEMOCRATIC",
    currency: "YDD",
  },
  {
    country: "YUGOSLAVIA",
    currency: "YUD",
  },
  {
    country: "YUGOSLAVIA",
    currency: "YUM",
  },
  {
    country: "YUGOSLAVIA",
    currency: "YUN",
  },
  {
    country: "ZAIRE",
    currency: "ZRN",
  },
  {
    country: "ZAIRE",
    currency: "ZRZ",
  },
  {
    country: "ZAMBIA",
    currency: "ZMK",
  },
  {
    country: "ZIMBABWE",
    currency: "ZWC",
  },
  {
    country: "ZIMBABWE",
    currency: "ZWD",
  },
  {
    country: "ZIMBABWE",
    currency: "ZWD",
  },
  {
    country: "ZIMBABWE",
    currency: "ZWN",
  },
  {
    country: "ZIMBABWE",
    currency: "ZWR",
  },
  {
    country: "ZZ01_Gold-Franc",
    currency: "XFO",
  },
  {
    country: "ZZ02_RINET Funds Code",
    currency: "XRE",
  },
  {
    country: "ZZ05_UIC-Franc",
    currency: "XFU",
  },
];

export default { Country, Currency };
