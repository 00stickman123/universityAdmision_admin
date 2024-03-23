import { useEffect, useState } from "react";
import { SAVE_TYPE } from "../../../constants/constant";
import { Formik, Field, Form, ErrorMessage } from "formik";
import HeaderCreate from "../HeaderCreate";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../../../api/majorInplan.service";
// import { storeImageToFireBase } from "../../../lib/storeImageToFirebase";
import { toast } from "react-toastify";
function EditMJPDetail() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [newVoucher, setNewVoucher] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AuthService.getMajorInPlanById(id);
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
    majorName: newVoucher?.majorName || "",
    schoolYear: newVoucher?.schoolYear || 1,
    numberOfStudent: newVoucher?.numberOfStudent || ""
  };
  const validationSchema = Yup.object({
    majorName: Yup.string().required("Major name is required"),
    schoolYear: Yup.string().required("School year is required"),
    numberOfStudent: Yup.number().required("Number of students is required").min(1, "Number of students must be at least 1"),
  });

  const handleLogin = (formValue) => {
    setLoading(true);
    AuthService.putMajorInPlan(id, { ...formValue }).then((data) => {
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
                <label htmlFor="schoolYear" className="block text-gray-700 text-sm font-bold mb-2">
                  School Year
                </label>
                <Field
                  name="schoolYear"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="schoolYear"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="numberOfStudent" className="block text-gray-700 text-sm font-bold mb-2">
                  Number of Students
                </label>
                <Field
                  name="numberOfStudent"
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="numberOfStudent"
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

export default EditMJPDetail;
