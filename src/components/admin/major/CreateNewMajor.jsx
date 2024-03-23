import React, { useEffect, useState } from "react";
import { SAVE_TYPE } from "../../../constants/constant";
import { Formik, Field, Form, ErrorMessage } from "formik";
import HeaderCreate from "../HeaderCreate";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../api/major.service";
function CreateNewMajor() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleCreateNewVoucher = () => {
  };
  const initialValues = {
    majorName: "",
    code: "",
    effectiveDate: "",
    note: ""
  };
  const validationSchema = Yup.object({
    majorName: Yup.string().required("Major name is required"),
    code: Yup.string().required("Code is required"),
    effectiveDate: Yup.string().required("Effective date is required"),
    note: Yup.string().required("Note is required")
  });


  const handleLogin = (formValue) => {
    setLoading(true);
    AuthService.postMajor({ ...formValue }).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        navigate("/admin/major");
      }
      setLoading(false);
    });
  };


  return (
    <HeaderCreate
      homeUrl="/admin/major"
      btnSaveTitle="Major"
      btnSaveType={SAVE_TYPE.CREATE}
      handleClickSaveCreate={handleCreateNewVoucher}
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
              <label htmlFor="majorName" className="block text-gray-700 text-sm font-bold mb-2">
                Major Name
              </label>
              <Field
                name="majorName"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="majorName"
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
              <label htmlFor="effectiveDate" className="block text-gray-700 text-sm font-bold mb-2">
                Effective Date
              </label>
              <Field
                name="effectiveDate"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="effectiveDate"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="note" className="block text-gray-700 text-sm font-bold mb-2">
                Note
              </label>
              <Field
                name="note"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="note"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
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

export default CreateNewMajor;
