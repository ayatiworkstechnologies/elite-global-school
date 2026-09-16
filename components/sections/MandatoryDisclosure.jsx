import React from "react";

/* =========================================================
   A. GENERAL INFORMATION
========================================================= */

const generalInformation = [
  { sno: "1", information: "NAME OF THE SCHOOL", details: "ELITE GLOBAL SCHOOL" },
  { sno: "2", information: "AFFILIATION NO.", details: "" },
  { sno: "3", information: "SCHOOL CODE", details: "" },
  {
    sno: "4",
    information: "COMPLETE ADDRESS WITH PIN CODE",
    details: "NO. 20, ELITE AVENUE, I STREET, KOSAPUR, MADHAVARAM, CHENNAI, TAMILNADU - 600060",
  },
  { sno: "5", information: "NAME OF THE PRINCIPAL", details: "Mr. RAHAMATHULLA K M" },
  { sno: "6", information: "QUALIFICATION", details: "B.E., M.Sc., B.Ed." },
  { sno: "7", information: "SCHOOL EMAIL ID", details: "principal@eliteglobalschools.com" },
  { sno: "8", information: "CONTACT DETAILS (LANDLINE/MOBILE)", details: "8838661821" },
];

/* =========================================================
   B. DOCUMENTS AND INFORMATION
========================================================= */

const documentsInformation = [
  {
    sno: "1",
    document: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
    file: "/documents/affiliation-letter.pdf",
  },
  {
    sno: "2",
    document: "COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    file: "/TrustCertificate.pdf",
  },
  {
    sno: "3",
    document: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
    file: "/NOC.pdf",
  },
  {
    sno: "4",
    document: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE",
    file: "/RecognitionCertificate.pdf",
  },
  {
    sno: "5",
    document: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
    file: "/BuildingCertificate.pdf",
  },
  {
    sno: "6",
    document: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
    file: "/FireCertificate.pdf",
  },
  {
    sno: "7",
    document:
      "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
    file: "/DEOCertificate.pdf",
  },
  {
    sno: "8",
    document: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
    file: "/WaterHealthCertificate.pdf",
  },
  {
    sno: "9",
    document: "LAND CERTIFICATE OF THE SCHOOL",
    file: "/LandCertificate.pdf",
  },
  {
    sno: "10",
    document: "LEASE DEED CERTIFICATES",
    file: "/Leasedeed.pdf",
  },
  {
    sno: "11",
    document: "CBSE MANDATORY PUBLIC DISCLOSURE DOCUMENT",
    file: "#",
  },
];

/* =========================================================
   C. RESULT AND ACADEMICS
========================================================= */

const resultsAndAcademics = [
  { sno: "1", document: "FEE STRUCTURE OF THE SCHOOL", file: "/FeeStructure.pdf", type: "view" },
  { sno: "2", document: "ANNUAL ACADEMIC CALENDAR", file: "/AcademicCalender.pdf", type: "view" },
  {
    sno: "3",
    document: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
    file: "/List_of_SMC.pdf",
    type: "view",
  },
  {
    sno: "4",
    document: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
    file: "/Link_of_PTA.pdf",
    type: "view",
  },
  {
    sno: "5",
    document: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
    file: "NOT APPLICABLE",
    type: "NOT APLLICABLE",
  },
];

/* =========================================================
   D. STAFF (TEACHING)
========================================================= */

const staffInformation = [
  { sno: "1", information: "PRINCIPAL", details: "Mr. RAHAMATHULLA K M" },
  { sno: "2", information: "TOTAL NO. OF TEACHERS", details: "23" },
  { sno: "2a", information: "PGT", details: "-" },
  { sno: "2b", information: "TGT", details: "11" },
  { sno: "2c", information: "PRT", details: "5" },
  { sno: "3", information: "TEACHER SECTION RATIO", details: "1:1.5" },
  { sno: "4", information: "DETAILS OF SPECIAL EDUCATOR", details: "1" },
  {
    sno: "5",
    information: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER",
    details: "1",
  },
];

/* Result Class X / XII tables (currently empty rows as per source form) */
const resultClassX = [
  { sno: "1", year: "NOT APPLICABLE", registered: "NOT APPLICABLE", passed: "NOT APPLICABLE", percentage: "NOT APPLICABLE", remarks: "NOT APPLICABLE" },
];
const resultClassXII = [
  { sno: "1", year: "NOT APPLICABLE", registered: "NOT APPLICABLE", passed: "NOT APPLICABLE", percentage: "NOT APPLICABLE", remarks: "NOT APPLICABLE" },
];

/* =========================================================
   E. SCHOOL INFRASTRUCTURE
========================================================= */

const schoolInfrastructure = [
  { sno: "1", information: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)", details: "11035" },
  { sno: "2", information: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)", details: "18 rooms, 48 sq. mtr each" },
  {
    sno: "3",
    information: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)",
    details: "6 labs, 57 sq. mtr each",
  },
  { sno: "4", information: "INTERNET FACILITY", details: "YES" },
  { sno: "5", information: "NO. OF GIRLS TOILETS", details: "17" },
  { sno: "6", information: "NO. OF BOYS TOILETS", details: "20" },
  { sno: "7", information: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL", details: "" },
];

/* =========================================================
   COMPONENT
========================================================= */

const MandatoryDisclosure = () => {
  const thClass =
    "border-2 border-[#f0e7e7] bg-[#fafafa] px-3 py-4 text-left font-bold align-middle";
  const tdClass = "border-2 border-[#f0e7e7] px-3 py-4 align-middle";
  const sectionTitleClass =
    "m-0 text-[25px] font-bold leading-tight text-[#ff6500] sm:text-[30px] lg:text-[34px]";
  const tableWrapClass = "mt-10 w-full overflow-x-auto sm:mt-14 lg:mt-[92px]";
  const tableClass =
    "w-full min-w-[850px] table-fixed border-collapse font-sans text-[16px] text-[#202020] sm:text-[18px] lg:text-[20px]";

  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-7">
      <div className="mx-auto w-[calc(100%-30px)] max-w-[1800px] sm:w-[calc(100%-60px)] lg:w-[calc(100%-116px)]">

        {/* ===================== A. GENERAL INFORMATION ===================== */}
        <h1 className={sectionTitleClass}>A. GENERAL INFORMATION:</h1>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={`w-[5.5%] ${thClass}`}>SNO</th>
                <th className={`w-[33%] ${thClass}`}>INFORMATION</th>
                <th className={`w-[61.5%] ${thClass}`}>DETAILS</th>
              </tr>
            </thead>
            <tbody>
              {generalInformation.map((item) => (
                <tr key={item.sno} className="h-[62px]">
                  <td className={tdClass}>{item.sno}</td>
                  <td className={tdClass}>{item.information}</td>
                  <td className={tdClass}>{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===================== B. DOCUMENTS AND INFORMATION ===================== */}
        <div className="mt-20 sm:mt-24 lg:mt-[100px]">
  <h2 className={sectionTitleClass}>B. DOCUMENTS AND INFORMATION</h2>

  <div className={tableWrapClass}>
    <table className={tableClass}>
      <thead>
        <tr>
          <th className={`w-[4%] ${thClass} align-top`}>SNO</th>

          <th className={`w-[70%] ${thClass} align-top`}>
            DOCUMENTS/INFORMATION
          </th>

          <th className={`w-[26%] ${thClass} align-top`}>
            LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL'S WEBSITE
          </th>
        </tr>
      </thead>

      <tbody>
        {documentsInformation.map((item) => (
          <tr
            key={item.sno}
            className={
              item.sno === 7
                ? "h-[62px]"
                : "h-[62px] hover:bg-[#fff5f2] transition-colors duration-200"
            }
          >
            <td className={tdClass}>
              {item.sno}
            </td>

            <td className={tdClass}>
              {item.document}
            </td>

            <td className={tdClass}>
              {item.file === "#" ? (
                <span
                  className={
                    item.sno === 7
                      ? "text-[#0B1F3A]"
                      : "text-[#0B1F3A] hover:text-[#FF6600] hover:underline cursor-pointer"
                  }
                >
                  View
                </span>
              ) : (
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    item.sno === 7
                      ? "text-[#0B1F3A]"
                      : "text-[#0B1F3A] hover:text-[#FF6600] hover:underline cursor-pointer"
                  }
                >
                  View
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        {/* ===================== C. RESULT AND ACADEMICS ===================== */}
        <div className="mt-20 sm:mt-24 lg:mt-[100px]">
          <h2 className={sectionTitleClass}>C. RESULT AND ACADEMICS</h2>

          <div className={tableWrapClass}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={`w-[6%] ${thClass}`}>SNO</th>
                  <th className={`w-[72%] ${thClass}`}>DOCUMENTS/INFORMATION</th>
                  <th className={`w-[22%] ${thClass}`}>
                    LINKS OF UPLOADED DOCUMENTS
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultsAndAcademics.map((item) => (
                  <tr key={item.sno} className="transition-colors hover:bg-[#fffaf7]">
                    <td className={tdClass}>{item.sno}</td>
                    <td className={`${tdClass} leading-[1.5]`}>{item.document}</td>
                    <td className={tdClass}>
                      {item.type === "view" ? (

                        < a href={item.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#285985] no-underline transition-colors hover:text-[#ff6500] hover:underline"
                        >
                          View
                        </a>
                      ) : (
                        <span className="text-[#202020]">NOT APPLICABLE</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===================== D. STAFF (TEACHING) ===================== */}
        <div className="mt-20 sm:mt-24 lg:mt-[100px]">
          <h2 className={sectionTitleClass}>D. STAFF (TEACHING)</h2>

          <div className={tableWrapClass}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={`w-[6%] ${thClass}`}>SNO</th>
                  <th className={`w-[54%] ${thClass}`}>INFORMATION</th>
                  <th className={`w-[40%] ${thClass}`}>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                {staffInformation.map((item) => (
                  <tr key={item.sno} className="h-[62px]">
                    <td className={tdClass}>{item.sno}</td>
                    <td className={tdClass}>{item.information}</td>
                    <td className={tdClass}>{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RESULT CLASS X */}
          <h3 className="mt-14 text-[20px] font-bold text-[#202020] sm:text-[22px]">
            RESULT CLASS: X
          </h3>
          <div className={tableWrapClass}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={`w-[8%] ${thClass}`}>SNO</th>
                  <th className={`w-[15%] ${thClass}`}>YEAR</th>
                  <th className={`w-[22%] ${thClass}`}>NO. OF REGISTERED STUDENTS</th>
                  <th className={`w-[20%] ${thClass}`}>NO. OF STUDENTS PASSED</th>
                  <th className={`w-[17%] ${thClass}`}>PASS PERCENTAGE</th>
                  <th className={`w-[18%] ${thClass}`}>REMARKS</th>
                </tr>
              </thead>
              <tbody>
                {resultClassX.map((row) => (
                  <tr key={row.sno} className="h-[52px]">
                    <td className={tdClass}>{row.sno}</td>
                    <td className={tdClass}>{row.year}</td>
                    <td className={tdClass}>{row.registered}</td>
                    <td className={tdClass}>{row.passed}</td>
                    <td className={tdClass}>{row.percentage}</td>
                    <td className={tdClass}>{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RESULT CLASS XII */}
          <h3 className="mt-14 text-[20px] font-bold text-[#202020] sm:text-[22px]">
            RESULT CLASS: XII
          </h3>
          <div className={tableWrapClass}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={`w-[8%] ${thClass}`}>SNO</th>
                  <th className={`w-[15%] ${thClass}`}>YEAR</th>
                  <th className={`w-[22%] ${thClass}`}>NO. OF REGISTERED STUDENTS</th>
                  <th className={`w-[20%] ${thClass}`}>NO. OF STUDENTS PASSED</th>
                  <th className={`w-[17%] ${thClass}`}>PASS PERCENTAGE</th>
                  <th className={`w-[18%] ${thClass}`}>REMARKS</th>
                </tr>
              </thead>
              <tbody>
                {resultClassXII.map((row) => (
                  <tr key={row.sno} className="h-[52px]">
                    <td className={tdClass}>{row.sno}</td>
                    <td className={tdClass}>{row.year}</td>
                    <td className={tdClass}>{row.registered}</td>
                    <td className={tdClass}>{row.passed}</td>
                    <td className={tdClass}>{row.percentage}</td>
                    <td className={tdClass}>{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===================== E. SCHOOL INFRASTRUCTURE ===================== */}
        <div className="mt-20 sm:mt-24 lg:mt-[100px]">
          <h2 className={sectionTitleClass}>E. SCHOOL INFRASTRUCTURE</h2>

          <div className={tableWrapClass}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={`w-[6%] ${thClass}`}>SNO</th>
                  <th className={`w-[54%] ${thClass}`}>INFORMATION</th>
                  <th className={`w-[40%] ${thClass}`}>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                {schoolInfrastructure.map((item) => (
                  <tr key={item.sno} className="h-[62px]">
                    <td className={tdClass}>{item.sno}</td>
                    <td className={tdClass}>{item.information}</td>
                    <td className={tdClass}>{item.details}</td>
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