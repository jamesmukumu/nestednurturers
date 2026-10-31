import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import { CityAutocompleteField } from "./CityAutocompleteField";

export function Contact({ cities }) {
    const [saving, setSaving] = useState(false);
    let toastRef = useRef(null);
    function getCurrentTime(timeZone) {
        return new Intl.DateTimeFormat("en-US", {
            timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }).format(new Date());
    }

    function getTimezoneOffset(timeZone) {
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone,
            timeZoneName: "shortOffset",
        });

        const parts = formatter.formatToParts(new Date());
        return parts.find((p) => p.type === "timeZoneName")?.value || "";
    }

    // Get all supported timezones
    const allTimezones = Intl.supportedValuesOf("timeZone");

    // Group them by region (Africa, America, Asia, etc.)
    const groupedTimezones = allTimezones.reduce((acc, tz) => {
        const [region] = tz.split("/");

        if (!acc[region]) {
            acc[region] = [];
        }

        acc[region].push({
            value: tz,
            label: `${
                tz.split("/")[1]?.replaceAll("_", " ") || tz
            } (${getTimezoneOffset(tz)}) - ${getCurrentTime(tz)}`,
        });

        return acc;
    }, {});

    async function Submission(payload) {
        try {
            setSaving(true);
            let response = await axios.post(`/api/submit/enquiry`, payload);

            if (response.data.message === "Enquiry Received") {
                toastRef.current.show({
                    severity: "success",
                    detail: "Consultation Booked Successfully",
                    sticky: true,
                });
                return true;
            } else {
                toastRef.current.show({
                    severity: "error",
                    detail: "Something Went Wrong",
                    sticky: true,
                });
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            setSaving(false);
        }
    }

    const FormCalendar = () => {
        const today = new Date();
        const validationSchema = Yup.object({
            name: Yup.string()
                .min(2, "Name must be at least 2 characters")
                .required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            phone: Yup.string()
                .required("Phone Number is Required")
                .min(10, "Invalid Phone Number"),
            location: Yup.string()
                .min(2, "Location must be at least 2 characters")
                .required("Location is required"),
            timezone: Yup.string("Timezone is required"),
            day: Yup.date()
                .required("Please select a consultation day")
                .min(new Date(), "Cannot select a past date"),
            expectedDueDate: Yup.date()
                .nullable()
                .required("Expected due date is required")
                .max(today, "Expected due date cannot be later than today"),
            preferredStartDate: Yup.date()
                .nullable()
                .required("Preferred start date is required")
                .max(today, "Preferred start date cannot be later than today"),
            supportDuration: Yup.string().required(
                "Duration of support is required",
            ),
            desiredNights: Yup.array()
                .min(1, "Select at least one night")
                .required("Select at least one night"),
                services:Yup.array().min(1,'Please Choose At least one service').required("Please Choose at least one service"),
                howHeard:Yup.string().required("Please tell us how heard of us etc Youtube, Yelp"),
        });

        const initialValues = {
            name: "",
            email: "",
            day: null,
            phone: "",
            location: "",
            timezone: "America/Los_Angeles",
            services: [],
            expectedDueDate: new Date(),
            preferredStartDate: new Date(),
            supportDuration: "",
            desiredNights: [],
            howHeard: "",
        };

        const handleSubmit = async (values, { resetForm }) => {
            let payload = {
                email: values.email,
                consultationDate: `${new Date(values.day)
                    .toLocaleString("sv-SE", {
                        hour12: false,
                    })
                    .replace("T", " ")}`,
                phonenumber: String(values.phone),
                name: values.name,
                location: values.location,
                timezone: values.timezone,
                services_seeked: JSON.stringify(values.services),
                expected_due_time: values.expectedDueDate,
                preferred_doula_services_start: values.preferredStartDate,
                duration_of_support: values.supportDuration,
                no_nights_per_week: JSON.stringify(values.desiredNights),
                howHeard: values.howHeard,
            };

            const success = await Submission(payload);

            if (success) {
                resetForm();
                //cities,bay area
                //
            }
        };

        return (
            <div className="bg-white rounded-2xl shadow-lg p-6 h-full max-w-md mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Schedule Free Consultation
                </h1>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        setFieldValue,
                        setFieldTouched,
                        errors,
                        touched,
                    }) => (
                        <Form className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">
                                    Select Consultation Day & Time
                                </label>

                                <DatePicker
                                    selected={values.day}
                                    onChange={(date) =>
                                        setFieldValue("day", date)
                                    }
                                    showTimeSelect
                                    inline
                                    minDate={new Date()}
                                    minTime={setHours(
                                        setMinutes(new Date(), 0),
                                        4,
                                    )}
                                    maxTime={setHours(
                                        setMinutes(new Date(), 30),
                                        23,
                                    )}
                                    filterDate={(date) =>
                                        date.getDay() !== 0 &&
                                        date.getDay() !== 6
                                    }
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    className="w-full border rounded-md p-2"
                                />

                                <div>
                                    <label className="font-medium">
                                        Select Timezone
                                    </label>
                                    <Field
                                        as="select"
                                        name="timezone"
                                        className="w-full border p-2 rounded"
                                    >
                                        {Object.entries(groupedTimezones).map(
                                            ([region, zones]) => (
                                                <optgroup
                                                    key={region}
                                                    label={region}
                                                >
                                                    {zones.map((tz) => (
                                                        <option
                                                            key={tz.value}
                                                            value={tz.value}
                                                        >
                                                            {tz.label}
                                                        </option>
                                                    ))}
                                                </optgroup>
                                            ),
                                        )}
                                    </Field>
                                </div>

                                {errors.day && touched.day && (
                                    <div className="text-warn mt-1 text-sm">
                                        {errors.day}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">
                                    Enter Your Name
                                </label>
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="Provide your name"
                                    className={`px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                                        errors.name && touched.name
                                            ? "border-warn focus:ring-warn"
                                            : "border-gray-300 focus:ring-blue-300"
                                    }`}
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-warn text-sm mt-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">
                                    Enter Your Phone Number
                                </label>
                                <Field
                                    name="phone"
                                    type="text"
                                    placeholder="Provide your Phone Number"
                                    className={`px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                                        errors.phone && touched.phone
                                            ? "border-warn focus:ring-warn"
                                            : "border-gray-300 focus:ring-blue-300"
                                    }`}
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className="text-warn text-sm mt-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">
                                    Enter Your Email
                                </label>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Provide your email"
                                    className={`px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                                        errors.email && touched.email
                                            ? "border-warn focus:ring-warn"
                                            : "border-gray-300 focus:ring-blue-300"
                                    }`}
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-warn text-sm mt-1"
                                />
                            </div>

                            <CityAutocompleteField
                                name="location"
                                value={values.location}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                errors={errors.location}
                                touched={touched.location}
                                placeholder="Search or enter your location"
                                citiesOptions={cities}
                            />
{/*
                            <div className="flex flex-col">
                                <label
                                    htmlFor="expectedDueDate"
                                    className="mb-1 font-medium"
                                >
                                    Expected Due Date{" "}
                                    <span aria-hidden="true">*</span>
                                </label>
                                <Calendar
                                    inputId="expectedDueDate"
                                    value={values.expectedDueDate}
                                    onChange={(event) =>
                                        setFieldValue(
                                            "expectedDueDate",
                                            event.value,
                                        )
                                    }
                                    onBlur={() =>
                                        setFieldTouched("expectedDueDate", true)
                                    }
                                    dateFormat="mm/dd/yy"
                                    placeholder="Select expected due date"
                                    maxDate={today}
                                    showIcon
                                    className={`w-full ${
                                        errors.expectedDueDate &&
                                        touched.expectedDueDate
                                            ? "p-invalid"
                                            : ""
                                    }`}
                                />
                                <ErrorMessage
                                    name="expectedDueDate"
                                    component="div"
                                    className="mt-1 text-sm text-warn"
                                />
                            </div> */}

                            {/* <div className="flex flex-col">
                                <label
                                    htmlFor="preferredStartDate"
                                    className="mb-1 font-medium"
                                >
                                    Preferred Start Date for Doula Services{" "}
                                    <span aria-hidden="true">*</span>
                                </label>
                                <Calendar
                                    inputId="preferredStartDate"
                                    value={values.preferredStartDate}
                                    onChange={(event) =>
                                        setFieldValue(
                                            "preferredStartDate",
                                            event.value,
                                        )
                                    }
                                    onBlur={() =>
                                        setFieldTouched(
                                            "preferredStartDate",
                                            true,
                                        )
                                    }
                                    dateFormat="mm/dd/yy"
                                    placeholder="Select preferred start date"
                                    maxDate={today}
                                    showIcon
                                    className={`w-full ${
                                        errors.preferredStartDate &&
                                        touched.preferredStartDate
                                            ? "p-invalid"
                                            : ""
                                    }`}
                                />
                                <ErrorMessage
                                    name="preferredStartDate"
                                    component="div"
                                    className="mt-1 text-sm text-warn"
                                />
                            </div> */}



                            <fieldset className="grid grid-cols-2 gap-x-6 gap-y-2">
                                <legend className="col-span-full mb-2 text-sm font-medium text-gray-900">
                                    What services are you looking for? {''}
                                <span aria-hidden="true">*</span>
                                </legend>

                                {[
                                    "Postpartum Day support",
                                    "Postpartum Night support",
                                    "Sleep training service & consultation",
                                    "Special need sleep training consultation",
                                ].map((service) => {
                                    const isChecked =
                                        values.services.includes(service);

                                    return (
                                        <label
                                            key={service}
                                            htmlFor={service}
                                            className="inline-flex cursor-pointer items-center whitespace-nowrap"
                                        >
                                            <input
                                                id={service}
                                                name="services"
                                                type="checkbox"
                                                value={service}
                                                checked={isChecked}
                                                onChange={(e) => {
                                                    const selectedServices = e
                                                        .target.checked
                                                        ? [
                                                              ...values.services,
                                                              service,
                                                          ]
                                                        : values.services.filter(
                                                              (
                                                                  selectedService,
                                                              ) =>
                                                                  selectedService !==
                                                                  service,
                                                          );

                                                    setFieldValue(
                                                        "services",
                                                        selectedServices,
                                                    );
                                                }}
                                                className="mr-2"
                                            />

                                            <span
                                                className={`
                        select-none text-sm leading-5
                        transition-colors duration-150
                        ${isChecked ? "text-gray-900" : "text-gray-700"}
                    `}
                                            >
                                                {service}
                                            </span>
                                        </label>
                                    );
                                })}

                                      <ErrorMessage
                                    name="services"
                                    component="div"
                                    className="mt-1 text-sm text-warn"
                                />
                            </fieldset>

                            <fieldset className="grid grid-cols-2 gap-x-6 gap-y-2">
                                <legend className="col-span-full mb-1 font-medium">
                                    Duration of Support Needed{" "}
                                    <span aria-hidden="true">*</span>
                                </legend>
                                {[
                                    "4 weeks",
                                    "6 weeks",
                                    "8 weeks",
                                    "12 weeks",
                                    "Others",
                                ].map((duration) => {
                                    const durationId = `support-duration-${duration
                                        .toLowerCase()
                                        .replaceAll(" ", "-")}`;
                                    const isChecked =
                                        values.supportDuration === duration;

                                    return (
                                        <label
                                            key={duration}
                                            htmlFor={durationId}
                                            className="inline-flex cursor-pointer items-center whitespace-nowrap"
                                        >
                                            <input
                                                id={durationId}
                                                name="supportDuration"
                                                type="checkbox"
                                                value={duration}
                                                checked={isChecked}
                                                onChange={(event) =>
                                                    setFieldValue(
                                                        "supportDuration",
                                                        event.target.checked
                                                            ? duration
                                                            : "",
                                                    )
                                                }
                                                onBlur={() =>
                                                    setFieldTouched(
                                                        "supportDuration",
                                                        true,
                                                    )
                                                }
                                                className="mr-2"
                                            />
                                            <span
                                                className={`select-none text-sm leading-5 transition-colors duration-150 ${
                                                    isChecked
                                                        ? "text-gray-900"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                {duration}
                                            </span>
                                        </label>
                                    );
                                })}
                                <ErrorMessage
                                    name="supportDuration"
                                    component="div"
                                    className="mt-1 text-sm text-warn"
                                />
                            </fieldset>
                            {/* <fieldset className="grid grid-cols-2 gap-x-6 gap-y-2">
                                <legend className="col-span-full mb-1 font-medium">
                                    Number of Nights per Week Desired{" "}
                                    <span aria-hidden="true">*</span>
                                </legend>
                                {[
                                    "Sun",
                                    "Mon",
                                    "Tue",
                                    "Wed",
                                    "Thu",
                                    "Fri",
                                    "Sat",
                                ].map((night) => {
                                    const nightId = `desired-night-${night.toLowerCase()}`;

                                    return (
                                        <label
                                            key={night}
                                            htmlFor={nightId}
                                            className="inline-flex items-center whitespace-nowrap"
                                        >
                                            <input
                                                id={nightId}
                                                name="desiredNights"
                                                type="checkbox"
                                                value={night}
                                                checked={values.desiredNights.includes(
                                                    night,
                                                )}
                                                onChange={(event) => {
                                                    const selectedNights = event
                                                        .target.checked
                                                        ? [
                                                              ...values.desiredNights,
                                                              night,
                                                          ]
                                                        : values.desiredNights.filter(
                                                              (selectedNight) =>
                                                                  selectedNight !==
                                                                  night,
                                                          );

                                                    setFieldValue(
                                                        "desiredNights",
                                                        selectedNights,
                                                    );
                                                }}
                                                className="mr-2"
                                            />
                                            {night}
                                        </label>
                                    );
                                })}
                                <ErrorMessage
                                    name="desiredNights"
                                    component="div"
                                    className="mt-1 text-sm text-warn"
                                />
                            </fieldset> */}

                            <div className="flex flex-col">
                                <label
                                    htmlFor="howHeard"
                                    className="mb-1 font-medium"
                                >
                                    How did you hear about us?
                                    <span className="ml-1 text-sm font-normal text-gray-500">
                                    *
                                    </span>
                                </label>
                                <Field
                                    as="textarea"
                                    id="howHeard"
                                    name="howHeard"
                                    rows="4"
                                    placeholder="Tell us how you found Nested Nurturers"
                                    className="min-h-28 w-full resize-y rounded-md border border-gray-300 px-4 py-3 leading-relaxed text-gray-700 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring"
                                />

                                       <ErrorMessage
                                    name="howHeard"
                                    component="div"
                                    className="mt-1 text-sm text-warn"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={saving}
                                className={`px-6 py-2 mt-2 rounded text-sm font-semibold text-white transition ${
                                    saving
                                        ? "bg-pr_btn opacity-50 blur-[1px] cursor-not-allowed"
                                        : "bg-pr_btn hover:bg-pr_btn/90"
                                }`}
                            >
                                {saving ? "Processing..." : "Consult"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    };

    const NextSteps = () => {
        return (
            <section className="bg-white rounded-2xl shadow-lg p-8 h-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                    Reach Us
                </h2>
                <p className="leading-relaxed text-lg text-gray-700">
                    Kindly choose one of the options to get in touch with us.
                </p>

                <div className="space-y-6">
                    <p className="flex flex-wrap items-start text-lg text-gray-700">
                        <i className="fa-solid fa-envelope text-green-600 mr-3 text-xl"></i>
                        <a
                            href="mailto:info@nestednurturers.com"
                            className="hover:text-green-700 transition leading-relaxed font-medium break-words"
                        >
                            info@nestednurturers.com
                        </a>
                    </p>

                    <p className="flex items-center text-lg text-gray-700">
                        <i className="fa-solid fa-phone text-green-600 mr-3 text-xl"></i>
                        <a
                            href="tel:+1 (925) 316-8311"
                            className="hover:text-green-700 transition font-medium"
                        >
                            +1 (925) 316-8311
                        </a>
                    </p>

                    <p className="flex items-center text-lg text-gray-700">
                        <i className="fa-solid fa-location-dot text-green-600 mr-3 text-xl"></i>
                        <span className="font-medium">
                            Bay Area, California
                        </span>
                    </p>
                </div>
            </section>
        );
    };

    return (
        <div className="bg-[#f0f1f3] py-16">
            <Toast ref={toastRef} position="top-left" />

            <div className="text-center max-w-3xl mx-auto mb-16 px-6">
                <h2 className="font-serif text-5xl font-light text-gray-900 mb-6 tracking-wide">
                    Ready for Compassionate Birth & Postpartum Support?
                </h2>
                <p className="leading-relaxed text-lg text-gray-700">
                    Your free consultation is the first step toward feeling
                    supported, confident, and fully prepared for your journey
                    into parenthood.
                </p>
            </div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 items-stretch justify-center">
                <div className="flex-1">
                    <FormCalendar />
                </div>
                <div className="flex-1">
                    <NextSteps />
                </div>
            </div>
        </div>
    );
}
