import React from "react";

/* =========================================================
   A. GENERAL INFORMATION
========================================================= */

const generalInformation = [
  {
    sno: "1",
    information: "NAME OF THE SCHOOL",
    details: "ELITE GLOBAL SCHOOL",
  },
  {
    sno: "2",
    information: "AFFILIATION NO.",
    details: "",
  },
  {
    sno: "3",
    information: "SCHOOL CODE",
    details: "",
  },
  {
    sno: "4",
    information: "COMPLETE ADDRESS WITH PIN CODE",
    details:
      "",
  },
  {
    sno: "5",
    information: "NAME OF THE PRINCIPAL",
    details: "",
  },
  {
    sno: "6",
    information: "QUALIFICATION",
    details: "",
  },
  {
    sno: "7",
    information: "SCHOOL EMAIL ID",
    details: "",
  },
  {
    sno: "8",
    information: "CONTACT DETAILS (LANDLINE/MOBILE)",
    details: "",
  },
];


/* =========================================================
   B. DOCUMENTS AND INFORMATION
========================================================= */

const documentsInformation = [
  {
    sno: "1",
    document:
      "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION IF ANY",
    file: "/documents/affiliation-letter.pdf",
  },
  {
    sno: "2",
    document:
      "COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION/RENEWAL CERTIFICATE AS APPLICABLE",
    file: "/documents/society-trust-registration.pdf",
  },
  {
    sno: "3",
    document:
      "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE BY THE STATE GOVT / UT",
    file: "/documents/noc-certificate.pdf",
  },
  {
    sno: "4",
    document:
      "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009 AND ITS RENEWABLE IF APPLICABLE",
    file: "/documents/recognition-certificate.pdf",
  },
  {
    sno: "5",
    document:
      "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
    file: "/documents/building-safety-certificate.pdf",
  },
  {
    sno: "6",
    document:
      "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
    file: "/documents/fire-safety-certificate.pdf",
  },
  {
    sno: "7",
    document:
      "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL",
    file: "/documents/deo-certificate.pdf",
  },
  {
    sno: "8",
    document: "COPIES OF VALID WATER TAX RECEIPTS",
    file: "/documents/water-tax-receipts.pdf",
  },
];


/* =========================================================
   C. RESULTS AND ACADEMICS
========================================================= */

const resultsAndAcademics = [
  {
    sno: "1",
    document: "FEE STRUCTURE OF THE SCHOOL",
    file: "/documents/fee-structure.pdf",
    type: "view",
  },
  {
    sno: "2",
    document: "ANNUAL ACADEMIC CALENDAR",
    file: "/documents/annual-academic-calendar.pdf",
    type: "view",
  },
  {
    sno: "3",
    document: "LIST OF SCHOOL MANAGEMENT COMMITTEE(SMC)",
    file: "/documents/school-management-committee.pdf",
    type: "view",
  },
  {
    sno: "4",
    document:
      "LIST OF PARENTS TEACHERS ASSOCIATION(PTA) MEMBERS",
    file: "/documents/pta-members.pdf",
    type: "view",
  },
  {
    sno: "5",
    document:
      "LAST THREE YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
    file: "/documents/pta-members.pdf",
    type: "view",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const MandatoryDisclosure = () => {
  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-7">

      <div className="mx-auto w-[calc(100%-30px)] max-w-[1800px] sm:w-[calc(100%-60px)] lg:w-[calc(100%-116px)]">


        {/* =====================================================
            A. GENERAL INFORMATION
        ====================================================== */}

        <h1 className="m-0 text-[25px] font-bold leading-tight text-[#ff6500] sm:text-[30px] lg:text-[34px]">
          A. GENERAL INFORMATION:
        </h1>


        {/* GENERAL INFORMATION TABLE */}

        <div className="mt-10 w-full overflow-x-auto sm:mt-14 lg:mt-[92px]">

          <table className="w-full min-w-[850px] table-fixed border-collapse font-sans text-[16px] text-[#202020] sm:text-[18px] lg:text-[20px]">

            <thead>
              <tr>

                <th className="w-[5.5%] border-2 border-[#f0e7e7] bg-[#fafafa] px-3 py-4 text-left font-bold align-middle">
                  SNO
                </th>

                <th className="w-[33%] border-2 border-[#f0e7e7] bg-[#fafafa] px-3 py-4 text-left font-bold align-middle">
                  INFORMATION
                </th>

                <th className="w-[61.5%] border-2 border-[#f0e7e7] bg-[#fafafa] px-3 py-4 text-left font-bold align-middle">
                  DETAILS
                </th>

              </tr>
            </thead>


            <tbody>

              {generalInformation.map((item) => (
                <tr key={item.sno} className="h-[62px]">

                  <td className="border-2 border-[#f0e7e7] px-3 py-4 align-middle">
                    {item.sno}
                  </td>

                  <td className="border-2 border-[#f0e7e7] px-3 py-4 align-middle">
                    {item.information}
                  </td>

                  <td className="border-2 border-[#f0e7e7] px-3 py-4 align-middle">
                    {item.details}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>


        {/* =====================================================
            B. DOCUMENTS AND INFORMATION
        ====================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-[100px]">


          {/* SECTION TITLE */}

          <h2 className="m-0 text-[25px] font-bold leading-tight text-[#ff6500] sm:text-[30px] lg:text-[34px]">
            B. DOCUMENTS AND INFORMATION
          </h2>


          {/* DOCUMENTS TABLE */}

          <div className="mt-10 w-full overflow-x-auto sm:mt-14 lg:mt-[92px]">

            <table className="w-full min-w-[850px] table-fixed border-collapse font-sans text-[16px] text-[#202020] sm:text-[18px] lg:text-[20px]">

              <thead>

                <tr>

                  <th className="w-[4%] border-2 border-[#f0e7e7] bg-[#fafafa] px-3 py-4 text-left font-bold align-top">
                    SNO
                  </th>

                  <th className="w-[82%] border-2 border-[#f0e7e7] bg-[#fafafa] px-3 py-4 text-left font-bold align-top">
                    B. DOCUMENTS AND INFORMATION
                  </th>

                  <th className="w-[14%] border-2 border-[#f0e7e7] bg-[#fafafa] px-3 py-4 text-left font-bold align-top">

                    <span className="block">
                      UPLOAD
                    </span>

                    <span className="mt-2 block">
                      DOCUMENTS
                    </span>

                  </th>

                </tr>

              </thead>


              <tbody>

                {documentsInformation.map((item) => (

                  <tr
                    key={item.sno}
                    className="transition-colors hover:bg-[#fffaf7]"
                  >

                    <td className="border-2 border-[#f0e7e7] px-3 py-4 align-top">
                      {item.sno}
                    </td>

                    <td className="border-2 border-[#f0e7e7] px-3 py-4 align-top leading-[1.6]">
                      {item.document}
                    </td>

                    <td className="border-2 border-[#f0e7e7] px-3 py-4 align-top">

                      <a
                        href={item.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#285985] no-underline transition-colors hover:text-[#ff6500] hover:underline"
                      >
                        View
                      </a>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>


        {/* =====================================================
            C. RESULTS AND ACADEMICS
        ====================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-[100px]">


          {/* SECTION TITLE */}

          <h2 className="m-0 text-[25px] font-bold leading-tight text-[#ff6500] sm:text-[30px] lg:text-[34px]">
            C. RESULTS AND ACADEMICS
          </h2>


          {/* RESULTS TABLE */}

          <div className="mt-10 w-full overflow-x-auto sm:mt-14 lg:mt-[92px]">

            <table className="w-full min-w-[850px] table-fixed border-collapse font-sans text-[16px] text-[#202020] sm:text-[18px] lg:text-[20px]">

              <thead>

                <tr>

                  {/* SNO */}

                  <th className="w-[6%] border-2 border-[#f0e7e7] bg-[#fafafa] px-3 py-4 text-left font-bold align-middle">
                    SNO
                  </th>


                  {/* DOCUMENTS */}

                  <th className="w-[72%] border-2 border-[#f0e7e7] bg-[#fafafa] px-3 py-4 text-left font-bold align-middle">
                    DOCUMENTS/INFORMATION
                  </th>


                  {/* UPLOAD */}

                  <th className="w-[22%] border-2 border-[#f0e7e7] bg-[#fafafa] px-3 py-4 text-left font-bold align-middle">
                    UPLOAD DOCUMENTS
                  </th>

                </tr>

              </thead>


              <tbody>

                {resultsAndAcademics.map((item) => (

                  <tr
                    key={item.sno}
                    className="transition-colors hover:bg-[#fffaf7]"
                  >

                    {/* SNO */}

                    <td className="border-2 border-[#f0e7e7] px-3 py-4 align-middle">
                      {item.sno}
                    </td>


                    {/* DOCUMENT */}

                    <td className="border-2 border-[#f0e7e7] px-3 py-4 align-middle leading-[1.5]">
                      {item.document}
                    </td>


                    {/* VIEW / GIVEN BELOW */}

                    <td className="border-2 border-[#f0e7e7] px-3 py-4 align-middle">

                      {item.type === "view" ? (

                        <a
                          href={item.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#285985] no-underline transition-colors hover:text-[#ff6500] hover:underline"
                        >
                          View
                        </a>

                      ) : (

                        <span className="text-[#202020]">
                          Given Below
                        </span>

                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>


      </div>

    </section>
  );
};

export default MandatoryDisclosure;