import { ErrorMessage } from "formik";

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
    placeholder = "Select your city",
    citiesOptions = usCityOptions,
}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="mb-1 font-medium">
                Location
            </label>

            <div className="relative">
                <select
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={(event) =>
                        onChange?.(name, event.target.value)
                    }
                    onBlur={() => onBlur?.(name, true)}
                    aria-invalid={Boolean(errors && touched)}
                    className={`w-full appearance-none rounded-md border bg-white px-4 py-2 pr-10 text-left text-gray-900 shadow-sm transition focus:outline-none focus:ring-2 ${
                        errors && touched
                            ? "border-warn focus:border-warn focus:ring-warn/30"
                            : "border-gray-300 focus:border-green-600 focus:ring-green-600/20"
                    }`}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {citiesOptions.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                <i
                    aria-hidden="true"
                    className="fa-solid fa-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500"
                />
            </div>

            <ErrorMessage
                name={name}
                component="div"
                className="text-warn text-sm mt-1"
            />
        </div>
    );
}
