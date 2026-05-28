import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check, ArrowLeft } from "lucide-react";

/* All form logic and Google Sheets endpoint preserved exactly */
const Apply = () => {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const empty = {
    fullName: "", phone: "", email: "", college: "", domain: "",
    skills: "", semester: "", passingYear: "", course: "", branch: "",
    cgpa: "", codingProfile: "", resumeLink: "",
  };

  const [form, setForm] = useState(empty);
  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    /* Google Sheets endpoint — DO NOT change */
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzC3tyUHyOZdG7FNuavc_Yh7S-dt7Tqvi1I0jJkOTf9ywndmKTb615fislnBSC91Nl1/exec";

    const formData = new FormData();
    Object.keys(form).forEach(k => formData.append(k, form[k]));

    try {
      const res = await fetch(scriptURL, { method: "POST", body: formData });
      if (res.ok) { setSuccess(true); setForm(empty); }
    } catch (err) {
      alert("Submission error: " + err.message);
    }
    setSending(false);
  };

  const fields = [
    { label: "Full Name *",          name: "fullName",    full: false },
    { label: "Contact No. *",        name: "phone",       full: false },
    { label: "Email Address *",      name: "email",       full: false },
    { label: "Year of Passing *",    name: "passingYear", full: false },
    { label: "College / University *", name: "college",   full: true  },
    { label: "Course *",             name: "course",      full: false },
    { label: "Branch *",             name: "branch",      full: false },
    { label: "Semester *",           name: "semester",    full: false },
    { label: "Current CGPA *",       name: "cgpa",        full: false },
    { label: "Domain / Interest *",  name: "domain",      full: false },
    { label: "Skills *",             name: "skills",      full: true  },
    { label: "Coding Profile Link",  name: "codingProfile", full: true, required: false },
  ];

  const iStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    color: "#f1f5f9",
    width: "100%",
    padding: "11px 14px",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };
  const focus = (e) => (e.target.style.borderColor = "rgba(59,130,246,0.55)");
  const blur  = (e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)");

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center py-24 px-4">
      <div className="w-full max-w-3xl">

        {/* Back link */}
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="rounded-3xl p-8 sm:p-12"
          style={{ background: "rgba(19,28,46,0.7)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}>

          {!success ? (
            <>
              <div className="mb-10 text-center">
                <span className="section-label mb-4 inline-flex">Internship Programme</span>
                <h1 className="text-3xl font-extrabold font-display text-white mb-3">
                  Application Form
                </h1>
                <p className="text-slate-400 text-sm">
                  Join ADRS Techno as an intern and help build the future of enterprise technology.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {fields.map((field, i) => (
                  <div key={i} className={`flex flex-col ${field.full ? "sm:col-span-2" : ""}`}>
                    <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      required={field.required !== false}
                      style={iStyle}
                      onFocus={focus}
                      onBlur={blur}
                    />
                  </div>
                ))}

                {/* Resume Link */}
                <div className="col-span-1 sm:col-span-2">
                  <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Resume Drive Link *
                  </label>
                  <input
                    name="resumeLink"
                    value={form.resumeLink}
                    onChange={handleChange}
                    required
                    placeholder="https://drive.google.com/..."
                    style={iStyle}
                    onFocus={focus}
                    onBlur={blur}
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    Ensure the link is set to <strong className="text-slate-300">public view</strong> (Anyone with the link → View).
                  </p>
                </div>

                {/* Buttons */}
                <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row justify-end gap-3 mt-6 pt-6 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <button type="button" onClick={() => navigate(-1)}
                    className="px-6 py-3 rounded-xl text-slate-300 hover:text-white font-bold text-sm transition-colors"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    Cancel
                  </button>
                  <button type="submit" disabled={sending}
                    className="btn-glow px-8 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-bold text-sm disabled:opacity-50 transition-colors">
                    {sending ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)" }}>
                <Check className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl font-extrabold font-display text-white mb-3">Application Submitted!</h2>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Thank you for applying to ADRS Techno. We have received your details and will review them shortly.
              </p>
              <button onClick={() => navigate("/")}
                className="btn-glow px-8 py-3 bg-blue-600 rounded-xl text-white font-bold text-sm hover:bg-blue-700 transition-colors">
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
