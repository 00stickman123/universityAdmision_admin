import { useEffect, useState } from "react";
import Title from "../Title";
import SearchInput from "../SearchInput";
import { Link } from "react-router-dom";
import PrimaryBtn from "../PrimaryBtn";
import Table from "../Table";
// import useDebounce from "../../../custom-hooks/useDebounce";
import ShowDetail from "../ShowDetail";
import Pagination from "../Pagination";
import EditButton from "../EditButton";
import DeleteBtn from "../DeleteBtn";
import AuthService from "../../../api/majorInplan.service";
import { toast } from "react-toastify";
function ListMJP() {
  const [searchParam, setSearchParam] = useState();
  const [listVouchers, setlistVouchers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [load, setLoad] = useState(null);

  

  // const debouncedSearchValue = useDebounce(searchParam, 500);
  const fetchVoucher = async () => {
    await AuthService.getMajorInPlan().then((data) => {
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
  const deleteMJIPFunc = (id) => {
    setLoad(true)
    AuthService.deleteMajorInPlan(id).then((data) => {
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
          Header: "Majorname",
          accessor: (data) => <p>{data?.majorName}</p>,
        },
        {
          Header: "Number of Students",
          accessor: (data) => <p>{data?.numberOfStudent}</p>,
        },
        {
          Header: "SchoolYear",
          accessor: (data) => <p>{data?.schoolYear}</p>,
        },
        {
          Header: " ",
          accessor: (data) => {
            return (
              <div className="flex justify-end gap-4">
                {/* <Link to={`/admin/mjp/${data?.id}`}>
                  <ShowDetail />
                </Link> */}
                <Link className="" to={`/admin/mjp/${data?._id}/edit`}>
                  <EditButton />
                </Link>
                <DeleteBtn
                  id={data?._id}
                  deleteFunction={deleteMJIPFunc}
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
      <Title >List MajorInPlan</Title>
      <div className="flex flex-col gap-4 py-5 md:items-center md:flex-row md:justify-end">
        <SearchInput
          placeholder="Search by name"
          onChange={(e) => setSearchParam(e.target.value)}
          value={searchParam || ""}
        />
        <Link to={`/admin/mjp/create`}>
          <PrimaryBtn className="min-w-[180px]">+ Add MajorInP</PrimaryBtn>
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
        totalItems={listVouchers.lenhth}
      />
    </div>
  );
}

export default ListMJP;
