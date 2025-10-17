"use client";
import React from "react";
import Image from "next/image";

export default function OurFee() {
  const data = [
    { className: "Nursery", rows: [
        { sl: 1, particulars: "Annual Fees", monthly: "", yearly: "5000" },
        { sl: 2, particulars: "Monthly Fee", monthly: "1950", yearly: "23400" },
      ], total: "28400" },
    { className: "LKG", rows: [
        { sl: 3, particulars: "Annual Fees", monthly: "", yearly: "6000" },
        { sl: 4, particulars: "Monthly Fee", monthly: "2150", yearly: "25800" },
      ], total: "31800" },
    { className: "UKG", rows: [
        { sl: 5, particulars: "Annual Fees", monthly: "", yearly: "6500" },
        { sl: 6, particulars: "Monthly Fee", monthly: "2400", yearly: "28800" },
      ], total: "35300" },
    { className: "I-II", rows: [
        { sl: 7, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        { sl: 8, particulars: "Monthly Fee", monthly: "2450", yearly: "29400" },
      ], total: "36600" },
    { className: "III-IV", rows: [
        { sl: 9, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        { sl: 10, particulars: "Monthly Fee", monthly: "2650", yearly: "31800" },
      ], total: "39000" },
    { className: "VI-VIII", rows: [
        { sl: 11, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        { sl: 12, particulars: "Monthly Fee", monthly: "2850", yearly: "34200" },
      ], total: "47400" },
    { className: "IX-X", rows: [
        { sl: 13, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        { sl: 14, particulars: "Monthly Fee", monthly: "3100", yearly: "37200" },
      ], total: "51000" },
    { className: "XI-XII COM", rows: [
        { sl: 15, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        { sl: 16, particulars: "Monthly Fee", monthly: "3100", yearly: "37200" },
      ], total: "47200" },
    { className: "XI-XII SC", rows: [
        { sl: 17, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        { sl: 18, particulars: "Monthly Fee", monthly: "4000", yearly: "48000" },
      ], total: "63000" },
  ];

  return (
    <section className="pt-16 pb-24 px-4 sm:px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#00306E] text-sm sm:text-base">
            Mahatma Gandhi International School
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Our Fee Structures
          </h2>
          <div className="w-24 h-1 bg-[#D70F40] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Table + Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Table */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <table className="w-full text-[13px] sm:text-sm md:text-base text-center table-fixed">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="border p-2 w-[20%]">Class</th>
                  <th className="border p-2 w-[10%]">Sl. No.</th>
                  <th className="border p-2 w-[35%]">Particulars</th>
                  <th className="border p-2 w-[15%]">Monthly</th>
                  <th className="border p-2 w-[20%]">Yearly</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, i) => (
                  <React.Fragment key={i}>
                    {item.rows.map((row, j) => (
                      <tr key={j} className="text-gray-600">
                        {j === 0 && (
                          <td
                            rowSpan={item.rows.length + 1}
                            className="border p-2 font-medium text-gray-800 bg-gray-50 align-top break-words"
                          >
                            {item.className}
                          </td>
                        )}
                        <td className="border p-2 break-words">{row.sl}</td>
                        <td className="border p-2 text-left break-words">
                          {row.particulars}
                        </td>
                        <td className="border p-2 break-words">{row.monthly}</td>
                        <td className="border p-2 break-words">{row.yearly}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-semibold text-gray-800">
                      <td colSpan="3" className="border p-2 text-center">
                        Yearly Grand Total
                      </td>
                      <td colSpan="2" className="border p-2">
                        {item.total}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/Assets/fee/fee-mgis.png"
              alt="Fee Structure"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover w-[90%] sm:w-[80%] md:w-[95%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
