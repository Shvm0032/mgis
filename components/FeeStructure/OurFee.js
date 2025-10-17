"use client";
import Image from "next/image";

export default function OurFee() {
  const data = [
    {
      className: "Nursery",
      rows: [
        { sl: 1, particulars: "Annual Fees", monthly: "", yearly: "5000" },
        { sl: 2, particulars: "Monthly Fee", monthly: "1950", yearly: "23400" },
      ],
      total: "28400",
    },
    {
      className: "LKG",
      rows: [
        { sl: 3, particulars: "Annual Fees", monthly: "", yearly: "6000" },
        { sl: 4, particulars: "Monthly Fee", monthly: "2150", yearly: "25800" },
      ],
      total: "31800",
    },
    {
      className: "UKG",
      rows: [
        { sl: 5, particulars: "Annual Fees", monthly: "", yearly: "6500" },
        { sl: 6, particulars: "Monthly Fee", monthly: "2400", yearly: "28800" },
      ],
      total: "35300",
    },
    {
      className: "I-II",
      rows: [
        { sl: 7, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        { sl: 8, particulars: "Monthly Fee", monthly: "2450", yearly: "29400" },
      ],
      total: "36600",
    },
    {
      className: "III-IV",
      rows: [
        { sl: 9, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        {
          sl: 10,
          particulars: "Monthly Fee",
          monthly: "2650",
          yearly: "31800",
        },
      ],
      total: "39000",
    },
    {
      className: "VI-VIII",
      rows: [
        { sl: 11, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        {
          sl: 12,
          particulars: "Monthly Fee",
          monthly: "2850",
          yearly: "34200",
        },
      ],
      total: "47400",
    },
    {
      className: "IX-X",
      rows: [
        { sl: 13, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        {
          sl: 14,
          particulars: "Monthly Fee",
          monthly: "3100",
          yearly: "37200",
        },
      ],
      total: "51000",
    },
    {
      className: "XI-XII COM",
      rows: [
        { sl: 15, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        {
          sl: 16,
          particulars: "Monthly Fee",
          monthly: "3100",
          yearly: "37200",
        },
      ],
      total: "47200",
    },
    {
      className: "XI-XII SC",
      rows: [
        { sl: 17, particulars: "Annual Fees", monthly: "", yearly: "7200" },
        {
          sl: 18,
          particulars: "Monthly Fee",
          monthly: "4000",
          yearly: "48000",
        },
      ],
      total: "63000",
    },
  ];

  return (
    <section className="pt-16 pb-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Divider */}
        <div className="text-center mb-10">
          <p className="text-[#00306E]">Mahatma Gandhi International School</p>
          <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
            Our Fee Structures
          </h2>
          <div className="w-30 h-1 bg-[#D70F40] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Table + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-center bg-white shadow-md">
              <thead className="bg-gray-100 font-semibold text-gray-700">
                <tr>
                  <th className="border p-2">Class</th>
                  <th className="border p-2">Sl. No.</th>
                  <th className="border p-2">Particulars</th>
                  <th className="border p-2">Monthly</th>
                  <th className="border p-2">Yearly</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <>
                    {item.rows.map((row, j) => (
                      <tr key={j}>
                        {j === 0 && (
                          <td
                            rowSpan={item.rows.length + 1}
                            className="border p-2 font-medium text-gray-700 bg-gray-50 align-top"
                          >
                            {item.className}
                          </td>
                        )}
                        <td className="border text-gray-500 p-2">{row.sl}</td>
                        <td className="border p-2 text-gray-500 text-left">
                          {row.particulars}
                        </td>
                        <td className="border text-gray-500 p-2">
                          {row.monthly}
                        </td>
                        <td className="border text-gray-500 p-2">
                          {row.yearly}
                        </td>
                      </tr>
                    ))}
                    <tr
                      key={`${i}-total`}
                      className="font-semibold text-gray-800 bg-gray-100"
                    >
                      <td colSpan="3" className="border p-2 text-center">
                        Yearly Grand Total
                      </td>
                      <td className="border p-2">{item.total}</td>
                    </tr>
                  </>
                ))}

                {/* ✅ Extra Row for Optional Facilities */}
                <tr>
                  <td
                    colSpan="5"
                    className="border p-4 text-center text-gray-800 bg-gray-50"
                  >
                    <p className="font-bold text-lg mb-1">
                      Optional Facilities
                    </p>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Transport <br />
                      Mess <br />
                      Hostel for boys and girls
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/Assets/fee/fee-mgis.png"
              alt="Fee Structure"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
