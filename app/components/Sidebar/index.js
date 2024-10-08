export default function Sidebar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white">
                    <i className="bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle text-white">
                    <i className="bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle text-white">
                    <i className="bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Orders</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle text-white">
                    <i className="bi-grid"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Products</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle text-white">
                    <i className="bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Customers</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col py-3">Content area...</div>
        </div>
      </div>
    </>
  );
}
