import React, { useEffect, useState } from "react";
import { SAVE_TYPE } from "../../../constants/constant";
import { Formik, Field, Form, ErrorMessage } from "formik";
import HeaderCreate from "../HeaderCreate";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../api/product.service";
function CreateNewUniversity() {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleCreateNewProduct = () => {
    // handle action create product
  };
  const initialValues = {
    name: "",
    code: "",
    abbreviation: "",
    description: "",
    yearEstablish: "",
    admissionPolicy: "",
    contactInfo: "",
    address: "",
    // major: [],
    // admissionPlan: [],
    // province: []
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    code: Yup.string().required("Code is required"),
    abbreviation: Yup.string().required("Abbreviation is required"),
    description: Yup.string().required("Description is required"),
    yearEstablish: Yup.number().required("Year of establishment is required"),
    admissionPolicy: Yup.string().required("Admission policy is required"),
    contactInfo: Yup.string().required("Contact information is required"),
    address: Yup.string().required("Address is required"),
    // major: Yup.array().required("Major is required"),
    // admissionPlan: Yup.array().required("Admission plan is required"),
    // province: Yup.array().required("Province is required")
  });

  const handleLogin = (formValue) => {
    setLoading(true);
    AuthService.postUniversity({ ...formValue }).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        navigate("/admin/university");
      }
    });
    setLoading(false);
  };

  // const handleSelectChange = (e, setFieldValue, fieldName) => {
  //   const options = e.target.options;
  //   const selectedOptions = [];
  //   for (let i = 0; i < options.length; i++) {
  //     if (options[i].selected) {
  //       selectedOptions.push(options[i].getAttribute("name"));
  //     }
  //   }
  //   setFieldValue(fieldName, selectedOptions);
  // };


  return (
    <HeaderCreate
      homeUrl="/admin/university"
      btnSaveTitle="Create University"
      btnSaveType={SAVE_TYPE.CREATE}
      handleClickSaveCreate={handleCreateNewProduct}
      disabledBtn={false}
      className="mb-5"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <Field
                name="name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="code" className="block text-gray-700 text-sm font-bold mb-2">
                Code
              </label>
              <Field
                name="code"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="code"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="abbreviation" className="block text-gray-700 text-sm font-bold mb-2">
                Abbreviation
              </label>
              <Field
                name="abbreviation"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="abbreviation"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <Field
                name="description"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="yearEstablish" className="block text-gray-700 text-sm font-bold mb-2">
                Year Established
              </label>
              <Field
                name="yearEstablish"
                type="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="yearEstablish"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="admissionPolicy" className="block text-gray-700 text-sm font-bold mb-2">
                Admission Policy
              </label>
              <Field
                name="admissionPolicy"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="admissionPolicy"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contactInfo" className="block text-gray-700 text-sm font-bold mb-2">
                Contact Info
              </label>
              <Field
                name="contactInfo"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="contactInfo"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <Field
                name="address"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="major" className="block text-gray-700 text-sm font-bold mb-2">
                Major
              </label>
              <Field
                name="major"
                as="select"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                multiple
                // eslint-disable-next-line no-undef
                onChange={(e) => handleSelectChange(e, setFieldValue)}
              >
              </Field>
              <ErrorMessage
                name="major"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="province" className="block text-gray-700 text-sm font-bold mb-2">
                Province
              </label>
              <Field
                name="province"
                as="select"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                multiple
                // eslint-disable-next-line no-undef
                onChange={(e) => handleSelectChange(e, setFieldValue)}
              >
              </Field>
              <ErrorMessage
                name="province"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div> */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin h-4 w-4 mr-2 border-b-2 border-white rounded-full"
                    viewBox="0 0 24 24"
                  ></svg>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </HeaderCreate>
  );
}

export default CreateNewUniversity;
