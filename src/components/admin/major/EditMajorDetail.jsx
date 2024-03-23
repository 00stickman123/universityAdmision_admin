import { useEffect, useState } from "react";
import { SAVE_TYPE } from "../../../constants/constant";
import { Formik, Field, Form, ErrorMessage } from "formik";
import HeaderCreate from "../HeaderCreate";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../../../api/major.service";
import { toast } from "react-toastify";
function EditMajorDetail() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [newVoucher, setNewVoucher] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AuthService.getMajorById(id);
        if (data.error) {
          console.log(data.error);
        } else {
          setNewVoucher(data.data);
        }
      } catch (error) {
        console.error("Error fetching MajorInPlan:", error);
      }
    };
    fetchData(); // Gọi hàm fetchData để thực hiện việc gọi API
  }, [id]); // Đảm bảo useEffect được gọi lại khi id thay đổi
  const initialValues = {
    name: newVoucher?.name || "",
    code: newVoucher?.code || "",
    effectiveDate: newVoucher?.effectiveDate || "",
    note: newVoucher?.note || ""
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Major name is required"),
    code: Yup.string().required("Code is required"),
    effectiveDate: Yup.string().required("Effective date is required"),
    note: Yup.string().required("Note is required")
  });

  const handleLogin = (formValue) => {
    setLoading(true);
    AuthService.putMajor(id, { ...formValue }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        toast.success("Edit MajorInPlan successfully", {
          // position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/admin/mjp");
      }
    });
    setLoading(false);
  };

  return (
    newVoucher && (
      <HeaderCreate
        homeUrl="/admin/mjp"
        btnSaveTitle="Update MajorInPlan"
        btnSaveType={SAVE_TYPE.UPDATE}
        // handleClickSaveCreate={handleCreateNewProduct}
        // disabledBtn={false}
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
    )
  );
}

export default EditMajorDetail;
