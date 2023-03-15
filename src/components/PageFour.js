import { useEffect } from "react";

export default function PageFour() {
  useEffect(() => {
    const pageNumber3 = document.getElementById('page-number-three');
    pageNumber3.classList.remove('active-page-number');
    const pageNumber4 = document.getElementById('page-number-four');
    pageNumber4.classList.add('active-page-number');
  });
  return (
    <h1>saba</h1>
  )
}