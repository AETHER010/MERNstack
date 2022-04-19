import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper bg-slate-900">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/dashboard">
              <i className="fa fa-tachometer"></i> Dashboard
            </Link>
          </li>

          <li>
            <a
              href="#productSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-product-hunt"></i> Users
            </a>
            <ul className="collapse list-unstyled" id="productSubmenu">
              <li>
                <Link to="/admin/users">
                  <i className="fa fa-clipboard"></i> All
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admin/Institution">
              <i className="fa fa-home"></i> Institution
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
