"use client";

import { useState } from "react";
import Link from "next/link";

export default function Card(props) {

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title bg-secondary text-white p-2 mb-3 text-center">
            {props.title}
          </h5>
          <p className="card-text flex-grow-1 mb-3">{props.body}</p>
          <div className="d-flex justify-content-between align-items-center mt-auto">


            <Link href={`/post/${props.id}`} className="btn btn-danger">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
