import { Calendar } from "primereact/calendar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState,useRef } from "react";
import { Toast } from "primereact/toast";
export function Contact() {
const [saving,setSaving] = useState(false)
let toastRef= useRef(null)
async function Submission(payload) {
  try {
    setSaving(true);
    let response = await axios.post(
      `https://nestednurturers-master-ky6jzp.laravel.cloud/api/submit/enquiry`,
      payload
    );

    if (response.data.message === "Enquiry Received") {
      toastRef.current.show({
        severity: "success",
        detail: "Consultation Booked Successfully",
        sticky:true
      });
      return true; 
    } else {
      toastRef.current.show({
        severity: "error",
        detail: "Something Went Wrong",
        sticky:true
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
      phone:Yup.string().required("Phone Number is Required").min(10,"Invalid Phone Number"),
      day: Yup.date()
        .required("Please select a consultation day")
        .min(new Date(), "Cannot select a past date"),
    });
  
    const initialValues = {
      name: "",
      email: "",
      day: null, 
      phone:""
    };
  
    const handleSubmit = async (values, { resetForm }) => {
      let payload = {
        email: values.email,
        day: `${values.day}`,
        phone: values.phone,
        name: values.name,
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
              {/* PrimeReact Calendar */}
              <div className="flex flex-col">
                <label className="mb-1 font-medium">Select Consultation Day</label>
                <Calendar
                  inline
                  value={values.day}
                  onChange={(e) => setFieldValue("day", e.value)}
                  minDate={new Date()}
                  disabledDays={[0, 6]}
                  className={`w-full ${
                    errors.day && touched.day ? "border-warn" : ""
                  }`}
                />
                {errors.day && touched.day && (
                  <div className="text-warn mt-1 text-sm">{errors.day}</div>
                )}
              </div>
  
              {/* Name field */}
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 font-medium">
                  Enter Your Name
                </label>
                <Field
                  name="name"
                  id="name"
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
                <label htmlFor="name" className="mb-1 font-medium">
                  Enter Your Phone Number
                </label>
                <Field
                  name="phone"
                  id="name"
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
  
              {/* Email field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium">
                  Enter Your Email
                </label>
                <Field
                  name="email"
                  id="email"
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
  className={`
    px-6 py-2 mt-2 rounded text-sm font-semibold text-white transition
    ${saving 
      ? "bg-pr_btn opacity-50 blur-[1px] cursor-not-allowed"
      : "bg-pr_btn hover:bg-pr_btn/90"
    }
  `}
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
          {/* Email */}
<p className="flex flex-wrap items-start text-lg text-gray-700">
  <i className="fa-solid fa-envelope text-green-600 mr-3 text-xl"></i>
  <a
    href="mailto:info@nestednurturers.com"
    className="hover:text-green-700 transition leading-relaxed font-medium break-words"
  >
    info@nestednurturers.com
  </a>
</p>



  
          {/* Phone */}
          <p className="flex items-center text-lg text-gray-700">
            <i className="fa-solid fa-phone text-green-600 mr-3 text-xl"></i>
            <a
              href="tel:+254700000000"
              className="hover:text-green-700 transition font-medium"
            >
              +1 (925) 316-8311
            </a>
          </p>
  
        
          <p className="flex items-center text-lg text-gray-700">
            <i className="fa-solid fa-location-dot text-green-600 mr-3 text-xl"></i>
            <span className="font-medium">
              Bay Area,California
            </span>
          </p>
        </div>
      </section>
    );
  };
  

  return (
    <div className="bg-[#f0f1f3] py-16">
      <Toast ref={toastRef} position="top-left"/>
      {/* Heading + intro text */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="font-serif text-5xl font-light text-gray-900 mb-6 tracking-wide">
        Ready for Compassionate Birth & Postpartum Support?
        </h2>
        <p className="leading-relaxed text-lg text-gray-700">
        Your free consultation is the first step toward feeling supported, confident, and fully prepared for your journey into parenthood. 
        </p>
      </div>

      {/* Calendar + Next Steps side by side */}
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
