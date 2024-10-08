import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blog">
                  Blogs
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" href="/Posts/:id"></Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" href="/post/add">
                  Add Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Posts">
                  Posts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
