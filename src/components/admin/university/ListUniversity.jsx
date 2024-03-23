import { useEffect, useState } from "react";
import Title from "../Title";
import SearchInput from "../SearchInput";
import { Link } from "react-router-dom";
import PrimaryBtn from "../PrimaryBtn";
import Table from "../Table";
import ShowDetail from "../ShowDetail";
import Pagination from "../Pagination";
import EditButton from "../EditButton";
import DeleteBtn from "../DeleteBtn";
import AuthService from "../../../api/university.service";
import { toast } from "react-toastify";
function ListUniversity() {
  const [searchParam, setSearchParam] = useState();
  const [listProducts, setListProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [load, setLoad] = useState(null);
  // const debouncedSearchValue = useDebounce(searchParam, 500);

  const fetProduct = async () => {
    AuthService.getUniversity().then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setListProducts(data.data);
      }
    });
  }
  useEffect(() => {
    fetProduct();
  }, [load]);
  const deleteProductFunc = (id) => {
    setLoad(true);
    AuthService.deleteUniversity(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        toast.success("Delete University successfully", {
          // position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoad(data.data);
      }
    });
    setLoad(false);
  };

  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "Name",
          accessor: (data) => <p>{data?.name}</p>,
        },
        {
          Header: "Code",
          accessor: (data) => <p>{data?.code}</p>,
        },
        {
          Header: "Description",
          accessor: (data) => <p>{data?.description}</p>,
        },
        {
          Header: "YearEstablish",
          accessor: (data) => <p>{data?.yearEstablish}</p>,
        },
        {
          Header: "AdmissionPolicy",
          accessor: (data) => <p>{data?.admissionPolicy}</p>,
        },
        {
          Header: "Address",
          accessor: (data) => <p>{data?.address}</p>,
        },
        {
          Header: " ",
          accessor: (data) => {
            return (
              <div className="flex justify-end gap-4">
                <Link className="" to={`/admin/university/${data?._id}/edit`}>
                  <EditButton />
                </Link>
                <DeleteBtn
                  id={data?._id}
                  deleteFunction={deleteProductFunc}
                  queryKey={"getListOfficialMember"}
                />
              </div>
            );
          },
        },
      ],
    },
  ];

  return (
    <div>
      <Title >List University</Title>
      <div className="flex flex-col gap-4 py-5 md:items-center md:flex-row md:justify-end">
        <SearchInput
          placeholder="Search by name"
          onChange={(e) => setSearchParam(e.target.value)}
          value={searchParam || ""}
        />
        <Link to={`/admin/university/create`}>
          <PrimaryBtn className="min-w-[180px]">+ Add University</PrimaryBtn>
        </Link>
      </div>
      <div className="bg-white table-style block-border">
        <Table
          pageSizePagination={limit}
          columns={columns}
          data={listProducts}
        />
      </div>

      <Pagination
        pageSize={limit}
        setPageSize={setLimit}
        currentPage={page}
        setCurrentPage={setPage}
        totalItems={listProducts.lenhth}
      />
    </div>
  );
}

export default ListUniversity;
