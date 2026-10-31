import { AutoComplete } from "primereact/autocomplete";
import { ErrorMessage } from "formik";
import { useState } from "react";

export const usCityOptions = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA",
    "Austin, TX",
    "Jacksonville, FL",
    "Fort Worth, TX",
    "Columbus, OH",
    "Charlotte, NC",
    "San Francisco, CA",
    "Indianapolis, IN",
    "Seattle, WA",
    "Denver, CO",
    "Boston, MA",
    "Nashville, TN",
    "Portland, OR",
    "Las Vegas, NV",
    "Detroit, MI",
    "Memphis, TN",
    "Baltimore, MD",
    "Milwaukee, WI",
    "Albuquerque, NM",
    "Fresno, CA",
    "Kansas City, MO",
    "Atlanta, GA",
    "Miami, FL",
    "Raleigh, NC",
    "Omaha, NE",
    "Tulsa, OK",
    "Wichita, KS",
    "Minneapolis, MN",
    "Arlington, TX",
    "New Orleans, LA",
    "Bakersfield, CA",
    "Tampa, FL",
    "Anaheim, CA",
    "Aurora, CO",
    "Sacramento, CA",
    "Denver, CO",
    "St. Louis, MO",
    "Riverside, CA",
    "Miami Gardens, FL",
    "Orlando, FL",
    "San Juan, PR",
    "Honolulu, HI",
    "Boise, ID",
    "Spokane, WA",
    "Providence, RI",
    "Birmingham, AL",
    "Richmond, VA",
    "Salt Lake City, UT",
    "Madison, WI",
    "Des Moines, IA",
    "Phoenix, AZ",
    "Pittsburgh, PA",
    "Reno, NV",
    "Mesa, AZ",
    "Sacramento, CA",
    "El Paso, TX",
    "Oklahoma City, OK",
    "Louisville, KY",
    "Charlotte, NC",
    "Nashville, TN",
    "San Bernardino, CA",
    "Austin, TX",
    "Newark, NJ",
    "Greensboro, NC",
    "Plano, TX",
    "Long Beach, CA",
    "Fayetteville, NC",
];

export function CityAutocompleteField({
    name,
    value,
    onChange,
    onBlur,
    errors,
    touched,
    placeholder = "Search or enter your city",
    citiesOptions
}) {
    const [suggestions, setSuggestions] = useState(citiesOptions.slice(0, 20));

    const completeMethod = (event) => {
        const query = (event?.query ?? "").trim().toLowerCase();

        if (!query) {
            setSuggestions(citiesOptions.slice(0, 20));
            return;
        }

        const filtered = citiesOptions.filter((city) =>
            city.toLowerCase().includes(query),
        );

        setSuggestions(filtered.length ? filtered.slice(0, 20) : [query]);
    };

    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="mb-1 font-medium">
                Location
            </label>

            <AutoComplete
                id={name}
                value={value ?? ""}
                suggestions={suggestions}
                completeMethod={completeMethod}
                onChange={(e) => onChange?.(name, e.value ?? "")}
                onBlur={() => onBlur?.(name, true)}
                dropdown
                forceSelection={false}
                placeholder={placeholder}
                className={`w-full ${errors && touched ? "p-invalid" : ""}`}
                inputClassName={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                    errors && touched
                        ? "border-warn focus:ring-warn"
                        : "border-gray-300 focus:ring-blue-300"
                }`}
            />

            <ErrorMessage
                name={name}
                component="div"
                className="text-warn text-sm mt-1"
            />
        </div>
    );
}
