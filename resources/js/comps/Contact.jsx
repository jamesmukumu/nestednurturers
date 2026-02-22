import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";

export function Contact() {
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
    return parts.find(p => p.type === "timeZoneName")?.value || "";
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
      label: `${tz.split("/")[1]?.replaceAll("_", " ") || tz} (${getTimezoneOffset(tz)}) - ${getCurrentTime(tz)}`
    });
  
    return acc;
  }, {});
  
  async function Submission(payload) {
    try {
      setSaving(true);
      let response = await axios.post(
        `http://localhost:8000/api/submit/enquiry`,
        payload
      );

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
        timezone:Yup.string("Timezone is required"),
      day: Yup.date()
        .required("Please select a consultation day")
        .min(new Date(), "Cannot select a past date"),
    });

    const initialValues = {
      name: "",
      email: "",
      day: null,
      phone: "",
      timezone:"America/Los_Angeles"
    };

    const handleSubmit = async (values, { resetForm }) => {
      let payload = {
        email: values.email,
        day: `${new Date(values.day).toLocaleString('sv-SE', {
          hour12: false,
        }).replace('T',' ')}`,
        phone: values.phone,
        name: values.name,
        timezone:values.timezone
      };

      const success = await Submission(payload);

      if (success) {
        resetForm();
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
          {({ values, setFieldValue, errors, touched }) => (
            <Form className="flex flex-col gap-4">
        
              <div className="flex flex-col">
                <label className="mb-1 font-medium">
                  Select Consultation Day & Time
                </label>

                <DatePicker
                  selected={values.day}
                  onChange={(date) => setFieldValue("day", date)}
                  showTimeSelect
                  inline
                  minDate={new Date()}
                  minTime={setHours(setMinutes(new Date(), 0), 4)}
                  maxTime={setHours(setMinutes(new Date(), 30), 23)}
                  filterDate={(date) =>
                    date.getDay() !== 0 && date.getDay() !== 6
                  }
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full border rounded-md p-2"
                />

<div>
  <label className="font-medium">Select Timezone</label>
  <Field
    as="select"
    name="timezone"
    className="w-full border p-2 rounded"
  >
    {Object.entries(groupedTimezones).map(([region, zones]) => (
      <optgroup key={region} label={region}>
        {zones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </optgroup>
    ))}
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
          Your free consultation is the first step toward feeling supported,
          confident, and fully prepared for your journey into parenthood.
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










// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { setHours, setMinutes } from "date-fns";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { useState, useRef } from "react";
// import { Toast } from "primereact/toast";
// import { formatInTimeZone } from "date-fns-tz";

// export function Contact() {
//   const [saving, setSaving] = useState(false);
//   const toastRef = useRef(null);

//   const detectedTimezone =
//     Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

//   const timezones = [
//     { label: "East Africa (UTC+3)", value: "Africa/Nairobi" },
//     { label: "Los Angeles (Pacific)", value: "America/Los_Angeles" },
//     { label: "UTC", value: "UTC" },
//   ];

//   async function Submission(payload) {
//     try {
//       setSaving(true);

//       const response = await axios.post(
//         "https://nestednurturers-master-ky6jzp.laravel.cloud/api/submit/enquiry",
//         payload
//       );

//       if (response.data.message === "Enquiry Received") {
//         toastRef.current.show({
//           severity: "success",
//           detail: "Consultation Booked Successfully",
//         });
//         return true;
//       } else {
//         toastRef.current.show({
//           severity: "error",
//           detail: "Something Went Wrong",
//         });
//         return false;
//       }
//     } catch (error) {
//       toastRef.current.show({
//         severity: "error",
//         detail: "Server Error",
//       });
//       return false;
//     } finally {
//       setSaving(false);
//     }
//   }

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email().required("Email is required"),
//     phone: Yup.string().required("Phone is required"),
//     day: Yup.date().required("Select a date"),
//     timezone: Yup.string().required("Timezone required"),
//   });

//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     day: null,
//     timezone: detectedTimezone,
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     if (!values.day) return;

//     // Convert picked date to selected timezone
//     const formattedInSelectedTZ = formatInTimeZone(
//       values.day,
//       values.timezone,
//       "yyyy-MM-dd HH:mm:ss"
//     );

//     const payload = {
//       name: values.name,
//       email: values.email,
//       phone: values.phone,
//       timezone: values.timezone,
//       day: formattedInSelectedTZ,
//       utc: values.day.toISOString(), // always send UTC too
//     };

//     const success = await Submission(payload);

//     if (success) resetForm();
//   };

//   return (
//     <div className="bg-[#f0f1f3] py-16">
//       <Toast ref={toastRef} position="top-left" />

//       <div className="container mx-auto px-6 flex justify-center">
//         <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">

//           <h2 className="text-2xl font-semibold text-center mb-4">
//             Schedule Free Consultation
//           </h2>

//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ values, setFieldValue, errors, touched }) => (
//               <Form className="flex flex-col gap-4">

//                 {/* Timezone */}
//                 <div>
//                   <label className="font-medium">Select Timezone</label>
//                   <Field
//                     as="select"
//                     name="timezone"
//                     className="w-full border p-2 rounded"
//                   >
//                     {timezones.map((tz) => (
//                       <option key={tz.value} value={tz.value}>
//                         {tz.label}
//                       </option>
//                     ))}
//                   </Field>
//                 </div>


//                 {/* Date Picker */}
//                 <div>
//                   <label className="font-medium">
//                     Select Consultation Day & Time
//                   </label>

//                   <DatePicker
//                     selected={values.day}
//                     onChange={(date) => setFieldValue("day", date)}
//                     showTimeSelect
//                     inline
//                     minDate={new Date()}
//                     minTime={setHours(setMinutes(new Date(), 0), 4)}
//                     maxTime={setHours(setMinutes(new Date(), 0), 23)}
//                     filterDate={(date) =>
//                       date.getDay() !== 0 && date.getDay() !== 6
//                     }
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                   />

//                   {errors.day && touched.day && (
//                     <div className="text-red-500 text-sm mt-1">
//                       {errors.day}
//                     </div>
//                   )}
//                 </div>

//                 {/* Name */}
//                 <Field
//                   name="name"
//                   placeholder="Your Name"
//                   className="border p-2 rounded"
//                 />
//                 <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

//                 {/* Phone */}
//                 <Field
//                   name="phone"
//                   placeholder="Phone"
//                   className="border p-2 rounded"
//                 />
//                 <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

//                 {/* Email */}
//                 <Field
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   className="border p-2 rounded"
//                 />
//                 <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="bg-blue-600 text-white p-2 rounded mt-2"
//                 >
//                   {saving ? "Processing..." : "Consult"}
//                 </button>

//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// }
