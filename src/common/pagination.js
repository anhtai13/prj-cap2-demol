import React from "react";

function Pagination({ itemsPerPage, totalItems, currentPage, paginate }) {
  const pageNumbers = [];

  // Tính toán số trang dựa trên số lượng mục và số mục trên mỗi trang
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="text-center mt-3">
      <button
        className="btn-success me-2"
        style={{ width: 45, height: 45 }}
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1 || pageNumbers.length === 0}
      >
        {"<"}
      </button>
      {/* Hiển thị các nút phân trang */}
      {pageNumbers.map((number) => (
        <button
          className={
            currentPage === number
              ? "active btn btn-light me-2"
              : "btn-secondary me-2"
          }
          style={{ width: 50, height: 50 }}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
      {/* Nút tiến */}
      <button
        className="btn-success me-2"
        style={{ width: 45, height: 45 }}
        onClick={() => paginate(currentPage + 1)}
        disabled={
          currentPage === pageNumbers.length || pageNumbers.length === 0
        }
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
