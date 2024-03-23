import { useEffect, useState } from "react";
import Title from "../Title";
import SearchInput from "../SearchInput";
import { Link } from "react-router-dom";
import PrimaryBtn from "../PrimaryBtn";
import Table from "../Table";
// import useDebounce from "../../../custom-hooks/useDebounce";
// import ShowDetail from "../ShowDetail";
import Pagination from "../Pagination";
import EditButton from "../EditButton";
import DeleteBtn from "../DeleteBtn";
import AuthService from "../../../api/major.service";
import { toast } from "react-toastify";
function ListMajor() {
  const [searchParam, setSearchParam] = useState();
  const [listVouchers, setlistVouchers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [load, setLoad] = useState(null);


  // const debouncedSearchValue = useDebounce(searchParam, 500);
  const fetchVoucher = async () => {
    await AuthService.getMajor().then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setlistVouchers(data.data);
      }
    });

  }
  useEffect(() => {
    fetchVoucher();
  }, [load]);
  const deleteMajorFunc = (id) => {
    setLoad(true)
    AuthService.deleteMajor(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        toast.success("Delete MajorInPlan successfully", {
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
    setLoad(false)
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
          Header: "EffectiveDate",
          accessor: (data) => <p>{data?.effectiveDate}</p>,
        },
        {
          Header: "Note",
          accessor: (data) => <p>{data?.note}</p>,
        },
        {
          Header: " ",
          accessor: (data) => {
            return (
              <div className="flex justify-end gap-4">
                {/* <Link to={`/admin/mjp/${data?.id}`}>
                  <ShowDetail />
                </Link> */}
                <Link className="" to={`/admin/major/${data?._id}/edit`}>
                  <EditButton />
                </Link>
                <DeleteBtn
                  id={data?._id}
                  deleteFunction={deleteMajorFunc}
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
      <Title >List Major</Title>
      <div className="flex flex-col gap-4 py-5 md:items-center md:flex-row md:justify-end">
        <SearchInput
          placeholder="Search by name"
          onChange={(e) => setSearchParam(e.target.value)}
          value={searchParam || ""}
        />
        <Link to={`/admin/major/create`}>
          <PrimaryBtn className="min-w-[180px]">+ Add Major</PrimaryBtn>
        </Link>
      </div>
      <div className="bg-white table-style block-border">
        <Table
          pageSizePagination={limit}
          columns={columns}
          data={listVouchers}
        />
      </div>
      <Pagination
        pageSize={limit}
        setPageSize={setLimit}
        currentPage={page}
        setCurrentPage={setPage}
        totalItems={listVouchers.length}
      />
    </div>
  );
}
export default ListMajor;
