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

  const fields = [
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
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] flex items-center justify-center py-24 px-4 transition-colors duration-300">
      <div className="w-full max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B]
                     p-8 sm:p-12 rounded-3xl shadow-xl transition-colors duration-300"
        >
          {!success ? (
            <>
              <div className="mb-10 text-center">
                <h1 className="text-3xl font-extrabold font-display text-slate-900 dark:text-white mb-3">
                  Application Form
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Join our team and help build the future of enterprise tech.
                </p>
              </div>

              {/* RESPONSIVE FORM */}
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                {fields.map((field, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      field.name === "skills" || field.name === "college"
                        ? "sm:col-span-2"
                        : ""
                    }`}
                  >
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      required={field.name !== "codingProfile"}
                      className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#1E293B] 
                                 text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                                 outline-none text-sm transition-colors"
                    />
                  </div>
                ))}

                {/* Resume Link Full Width */}
                <div className="col-span-1 sm:col-span-2 mt-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 block">
                    Resume Drive Link
                  </label>
                  <input
                    name="resumeLink"
                    value={form.resumeLink}
                    onChange={handleChange}
                    required
                    placeholder="https://drive.google.com/..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#1E293B] 
                               text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                               outline-none text-sm transition-colors"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Make sure the link is <span className="font-bold text-slate-700 dark:text-slate-300">PUBLIC</span> (Anyone with the link → View)
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row justify-end gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-[#1E293B]">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-[#1E293B] text-slate-700 dark:text-slate-300
                               hover:bg-slate-200 dark:hover:bg-slate-800 font-bold text-sm transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={sending}
                    className="px-8 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 
                               font-bold text-sm disabled:opacity-50 transition-colors shadow-sm"
                  >
                    {sending ? "Submitting..." : "Submit Application"}
                  </button>
                </div>

              </form>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-blue-100 dark:bg-[#131C2E] text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold font-display text-slate-900 dark:text-white mb-3">
                Application Submitted
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
                Thank you for applying to ADRS Techno! We have received your details and will review them shortly.
              </p>

              <button
                onClick={() => navigate("/")}
                className="px-8 py-3 bg-blue-600 rounded-xl text-white font-bold text-sm hover:bg-blue-700 transition-colors"
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
