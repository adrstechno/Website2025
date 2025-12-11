// import { useState } from "react";
// import { motion } from "framer-motion";
// import { HiOutlineArrowLeft } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";

// const Apply = () => {
//   const navigate = useNavigate();
//   const [sending, setSending] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     college: "",
//     domain:"",
//     skills:"",
//     passingYear: "",
//     course: "",
//     branch: "",
//     cgpa: "",
//     resumeLink: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSending(true);

//     const scriptURL =
//       "https://script.google.com/macros/s/AKfycbxHY7PcGLVftjZj_gdnl-Z1WtLA-BMwsViPKXbG_6OkF111dQj0jusR3r00ZJn_SFNW/exec";

//     const formData = new FormData();
//     Object.keys(form).forEach((key) => formData.append(key, form[key]));

//     try {
//       const res = await fetch(scriptURL, {
//         method: "POST",
//         body: formData,
//       });

//       if (res.ok) {
//         setSuccess(true);
//         setForm({
//           fullName: "",
//           phone: "",
//           email: "",
//           college: "",
//            domain:"",
//     skills:"",
//           passingYear: "",
//           course: "",
//           branch: "",
//           cgpa: "",
//           resumeLink: "",
//         });
//       } else {
//         alert("Failed to submit. Check Apps Script permissions.");
//       }
//     } catch (err) {
//       alert("Error submitting form: " + err.message);
//     }

//     setSending(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center py-20">
//       <div className="max-w-5xl w-full px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="grid lg:grid-cols-12 gap-10 items-center"
//         >
//           {/* LEFT PANEL */}
//           <div className="lg:col-span-5 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-3xl p-10 text-white shadow-xl">
//             <button
//               onClick={() => navigate(-1)}
//               className="flex items-center gap-2 text-sm opacity-90 mb-6 hover:opacity-100 transition"
//             >
//               <HiOutlineArrowLeft /> Back
//             </button>

//             <h1 className="text-3xl font-semibold mb-3 tracking-tight">
//               Candidate Application
//             </h1>
//             <p className="text-purple-100/90 text-sm leading-relaxed">
//               Fill in your details carefully. Ensure your Google Drive resume link is set to
//               <span className="font-semibold"> “Anyone with link → View”</span>.
//             </p>

//             <div className="mt-10 space-y-5 text-sm">
//               <div className="flex items-start gap-3">
//                 <div className="w-2 h-2 rounded-full bg-white/80 mt-2" />
//                 <div>
//                   <div className="font-medium">Clear Application Process</div>
//                   <div className="opacity-90 text-xs">
//                     Only essential educational & personal details required.
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="w-2 h-2 rounded-full bg-white/80 mt-2" />
//                 <div>
//                   <div className="font-medium">Quick Review</div>
//                   <div className="opacity-90 text-xs">
//                     Our team reviews submitted applications periodically.
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="w-2 h-2 rounded-full bg-white/80 mt-2" />
//                 <div>
//                   <div className="font-medium">Resume via Drive Link</div>
//                   <div className="opacity-90 text-xs">
//                     Make sure your resume link is publicly accessible.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT PANEL - FORM */}
//           <div className="lg:col-span-7 bg-white dark:bg-dark-secondary rounded-3xl p-10 shadow-xl">
//             <div className="max-w-xl mx-auto">
//               {success ? (
//                 <div className="text-center py-16">
//                   <h3 className="text-3xl font-semibold mb-3">Application Submitted</h3>
//                   <p className="text-sm text-secondary mb-6">
//                     Thank you for applying! We will review your information.
//                   </p>
//                   <button
//                     onClick={() => navigate("/")}
//                     className="px-6 py-2 bg-purple-600 text-white rounded-md"
//                   >
//                     Return Home
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5">

//                   {/* FORM FIELDS */}
//                   {[
//                     { label: "Full Name", name: "fullName" },
//                     { label: "Contact No.", name: "phone" },
//                     { label: "Email", name: "email" },
//                     { label: "College Full Name", name: "college" },
//                     { label: "Domain", name: "domain" },
//                     { label: "Skills", name: "skills" },
//                     { label: "Year of Passing", name: "passingYear" },
//                     { label: "Course", name: "course" },
//                     { label: "Branch", name: "branch" },
//                     { label: "Current CGPA", name: "cgpa" },
//                   ].map((item, i) => (
//                     <div key={i}>
//                       <label className="block text-sm font-medium mb-1">{item.label}</label>
//                       <input
//                         name={item.name}
//                         value={form[item.name]}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 rounded-lg border border-gray-200 
//                         dark:border-white/10 bg-white dark:bg-dark-primary text-sm"
//                       />
//                     </div>
//                   ))}

//                   {/* RESUME LINK */}
//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Resume Drive Link
//                     </label>
//                     <input
//                       name="resumeLink"
//                       value={form.resumeLink}
//                       onChange={handleChange}
//                       required
//                       placeholder="https://drive.google.com/file/d/..."
//                       className="w-full px-4 py-3 rounded-lg border border-gray-200 
//                       dark:border-white/10 bg-white dark:bg-dark-primary text-sm"
//                     />
//                     <p className="text-xs text-red-500 mt-1 font-medium">
//                       Note: The link must be PUBLIC (Anyone with link → View)
//                     </p>
//                   </div>

//                   {/* BUTTONS */}
//                   <div className="flex items-center justify-end gap-3 pt-4">
//                     <button
//                       type="button"
//                       onClick={() => navigate(-1)}
//                       className="px-4 py-2 rounded-md bg-gray-100 dark:bg-white/5 text-sm"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       disabled={sending}
//                       className="px-6 py-3 rounded-lg bg-purple-600 text-white text-sm disabled:opacity-60"
//                     >
//                       {sending ? "Submitting..." : "Submit Application"}
//                     </button>
//                   </div>

//                 </form>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Apply;


import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    college: "",
    domain: "",
    skills: "",
    semester: "",
    passingYear: "",
    course: "",
    branch: "",
    cgpa: "",
    codingProfile: "",
    resumeLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzC3tyUHyOZdG7FNuavc_Yh7S-dt7Tqvi1I0jJkOTf9ywndmKTb615fislnBSC91Nl1/exec";

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    try {
      const res = await fetch(scriptURL, { method: "POST", body: formData });
      if (res.ok) {
        setSuccess(true);
        setForm({
          fullName: "",
          phone: "",
          email: "",
          college: "",
          domain: "",
          skills: "",
          semester: "",
          passingYear: "",
          course: "",
          branch: "",
          cgpa: "",
          codingProfile: "",
          resumeLink: "",
        });
      }
    } catch (err) {
      alert("Error: " + err.message);
    }

    setSending(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl dark:bg-white/5 border border-white/10
                     p-10 rounded-3xl shadow-2xl"
        >
          {!success ? (
            <>
              <h1 className="text-3xl font-semibold text-white mb-8 text-center">
                Application Form
              </h1>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* FORM INPUT FIELDS */}
                {[
                  { label: "Full Name", name: "fullName" },
                  { label: "Contact No.", name: "phone" },
                  { label: "Email", name: "email" },
                  { label: "College Name", name: "college" },
                  { label: "Domain", name: "domain" },
                  { label: "Skills", name: "skills" },
                  { label: "Semester", name: "semester" },
                  { label: "Year of Passing", name: "passingYear" },
                  { label: "Course", name: "course" },
                  { label: "Branch", name: "branch" },
                  { label: "Current CGPA", name: "cgpa" },
                  { label: "Coding Profile Link", name: "codingProfile" },
                ].map((field, i) => (
                  <div key={i} className="flex flex-col col-span-1">
                    <label className="text-sm text-gray-300 mb-1">{field.label}</label>
                    <input
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      required={field.name !== "codingProfile"}
                      placeholder={field.placeholder}
                      className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                 text-white placeholder-gray-400 focus:border-purple-500 outline-none"
                    />
                  </div>
                ))}

                {/* RESUME LINK FULL WIDTH */}
                <div className="col-span-1 sm:col-span-2">
                  <label className="text-sm text-gray-300 mb-1">Resume Drive Link</label>
                  <input
                    name="resumeLink"
                    value={form.resumeLink}
                    onChange={handleChange}
                    required
                    placeholder="https://drive.google.com/file/d/..."
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                               text-white placeholder-gray-400 focus:border-purple-500 outline-none"
                  />
                  <p className="text-xs text-red-400 mt-1">
                    Make sure the link is PUBLIC (Anyone with the link → View)
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="col-span-2 flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={sending}
                    className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 
                               disabled:opacity-50 transition"
                  >
                    {sending ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-20 text-white">
              <h2 className="text-3xl font-semibold mb-3">Application Submitted 🎉</h2>
              <p className="text-gray-300 mb-6">
                Thank you! We have received your details.
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-2 bg-purple-600 rounded-lg text-white"
              >
                Return Home
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Apply;
