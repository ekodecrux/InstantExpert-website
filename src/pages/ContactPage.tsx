import { useEffect, useState } from 'react';
import { Check, CheckCircle2, Copy, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { buildWhatsAppUrl, INTEREST_OPTIONS, WHATSAPP_DISPLAY } from '../data/siteData';

interface ContactPageProps {
  initialInterest?: string;
}

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  mobile: string;
  interestedIn: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  mobile?: string;
  description?: string;
}

export function ContactPage({ initialInterest }: ContactPageProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    interestedIn:
      initialInterest && INTEREST_OPTIONS.includes(initialInterest)
        ? initialInterest
        : 'ERP Solutions',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedEnquiry, setSubmittedEnquiry] = useState<FormState | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialInterest && INTEREST_OPTIONS.includes(initialInterest)) {
      setForm((prev) => ({ ...prev, interestedIn: initialInterest }));
    }
  }, [initialInterest]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!form.companyName.trim()) {
      nextErrors.companyName = 'Please enter your company name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digitsOnly = form.mobile.replace(/\D/g, '');
    if (!form.mobile.trim()) {
      nextErrors.mobile = 'Please enter your mobile number.';
    } else if (digitsOnly.length < 10) {
      nextErrors.mobile = 'Please enter a valid 10-digit mobile number.';
    }
    if (!form.description.trim()) {
      nextErrors.description = 'Please provide a brief description of your requirements.';
    }
    return nextErrors;
  };

  const formatEnquiryText = (data: FormState) => {
    return [
      'Instant Experts — Project Enquiry',
      '--------------------------------',
      `Full Name: ${data.fullName || 'Not provided'}`,
      `Company Name: ${data.companyName || 'Not provided'}`,
      `Email Address: ${data.email || 'Not provided'}`,
      `Mobile Number: ${data.mobile || 'Not provided'}`,
      `Interested In: ${data.interestedIn}`,
      `Description: ${data.description || 'Not provided'}`,
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedEnquiry({ ...form });
  };

  const handleCopyDetails = async () => {
    const text = formatEnquiryText(submittedEnquiry ?? form);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div>
      {/* Dark Architectural Contact Header */}
      <section className="bg-gradient-to-b from-[#0D1E33] to-[#142C49] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-[#8AC8FA]">Contact Us</p>
            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.12]"
              style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.15rem)' }}
            >
              Let&apos;s Build Something Great Together
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have a project in mind or looking for the right technology solution? Connect with Instant Experts. Our team will help you identify the right solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Split Layout */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-lg bg-[#0D1E33] text-white space-y-6 border border-[#142C49]">
                <div className="space-y-2">
                  <h2 className="font-display text-xl font-bold">
                    Direct Consultation Channels
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Speak directly with our solutions architects regarding ERP implementation, CRM workflows, or custom software requirements.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/15">
                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#8AC8FA] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-slate-300">Business Enquiries</p>
                      <p className="text-sm font-semibold text-white">
                        contact@instantexperts.net
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#8AC8FA] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-slate-300">Enterprise Desk</p>
                      <p className="text-sm font-semibold text-white tabular-nums">
                        {WHATSAPP_DISPLAY}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-slate-300">WhatsApp Notification</p>
                      <a
                        href={buildWhatsAppUrl(
                          'Hello Instant Experts, I would like to connect regarding your technology solutions.'
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-[#8AC8FA] underline underline-offset-4 tabular-nums transition-colors"
                      >
                        Message {WHATSAPP_DISPLAY} on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#8AC8FA] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-slate-300">Corporate Offices</p>
                      <p className="text-sm font-medium text-white">
                        Ahmedabad &amp; Hyderabad, India
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Mon – Sat · 9:30 AM – 6:30 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Topic Selectors */}
              <div className="p-6 rounded-lg border border-slate-200 bg-[#EAF3FB]/50 space-y-3">
                <h3 className="text-sm font-semibold text-[#142C49]">
                  Quick-Select Topic
                </h3>
                <p className="text-xs text-slate-600">
                  Choose a solution area to pre-fill the enquiry form:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['ERP Solutions', 'CRM Solutions', 'Custom Business Applications', 'IT Consulting'].map(
                    (topic) => {
                      const active = form.interestedIn === topic;
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => handleChange('interestedIn', topic)}
                          className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors duration-150 cursor-pointer ${
                            active
                              ? 'bg-[#142C49] text-white border-[#142C49]'
                              : 'bg-white text-[#142C49] border-slate-200 hover:border-[#1769AA]'
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 lg:p-10 rounded-lg border border-slate-200 bg-white">
                {submittedEnquiry ? (
                  <div className="space-y-6">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-md bg-[#EAF3FB] text-[#1769AA] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-bold text-[#142C49]">
                          Enquiry Summary Prepared
                        </h2>
                        <p className="mt-1 text-sm text-slate-600">
                          Your enquiry details have been validated and formatted below.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 rounded-md bg-[#EAF3FB]/50 border border-slate-200 space-y-3 text-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <span className="text-xs text-slate-500">Full Name</span>
                          <p className="font-semibold text-[#142C49]">{submittedEnquiry.fullName}</p>
                        </div>
                        <div>
                          <span className="text-xs text-slate-500">Company Name</span>
                          <p className="font-semibold text-[#142C49]">{submittedEnquiry.companyName}</p>
                        </div>
                        <div>
                          <span className="text-xs text-slate-500">Email Address</span>
                          <p className="font-semibold text-[#142C49]">{submittedEnquiry.email}</p>
                        </div>
                        <div>
                          <span className="text-xs text-slate-500">Mobile Number</span>
                          <p className="font-semibold text-[#142C49] tabular-nums">{submittedEnquiry.mobile}</p>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-slate-200">
                        <span className="text-xs text-slate-500">Interested In</span>
                        <p className="font-semibold text-[#1769AA]">{submittedEnquiry.interestedIn}</p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500">Description</span>
                        <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                          {submittedEnquiry.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={buildWhatsAppUrl(formatEnquiryText(submittedEnquiry))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors duration-150"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Send WhatsApp Notification</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyDetails}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1769AA] hover:bg-[#12568C] rounded-md transition-colors duration-150 cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4" aria-hidden="true" />
                            <span>Copied Enquiry Details</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" aria-hidden="true" />
                            <span>Copy Enquiry Details</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setSubmittedEnquiry(null)}
                        className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#142C49] bg-white border border-slate-300 hover:bg-[#EAF3FB] rounded-md transition-colors duration-150 cursor-pointer"
                      >
                        Edit Details
                      </button>
                    </div>

                    <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                      This is a design preview. A live website will need a connected enquiry submission service.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="font-display text-2xl font-bold text-[#142C49]">
                        Send us an enquiry
                      </h2>
                      <p className="text-sm text-slate-600">
                        Complete the form below to outline your project scope or product interest.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-[#142C49] mb-1.5"
                        >
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={form.fullName}
                          onChange={(e) => handleChange('fullName', e.target.value)}
                          placeholder="e.g. Rajesh Sharma"
                          className={`w-full px-3.5 py-2.5 text-sm text-[#142C49] bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1769AA] ${
                            errors.fullName ? 'border-red-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-sm font-medium text-[#142C49] mb-1.5"
                        >
                          Company Name
                        </label>
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          value={form.companyName}
                          onChange={(e) => handleChange('companyName', e.target.value)}
                          placeholder="e.g. Bharat Precision Pvt. Ltd."
                          className={`w-full px-3.5 py-2.5 text-sm text-[#142C49] bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1769AA] ${
                            errors.companyName ? 'border-red-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.companyName && (
                          <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#142C49] mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="rajesh@company.in"
                          className={`w-full px-3.5 py-2.5 text-sm text-[#142C49] bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1769AA] ${
                            errors.email ? 'border-red-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="mobile"
                          className="block text-sm font-medium text-[#142C49] mb-1.5"
                        >
                          Mobile Number
                        </label>
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          value={form.mobile}
                          onChange={(e) => handleChange('mobile', e.target.value)}
                          placeholder="+91 98765 43210"
                          className={`w-full px-3.5 py-2.5 text-sm text-[#142C49] bg-white border rounded-md tabular-nums focus:outline-none focus:ring-2 focus:ring-[#1769AA] ${
                            errors.mobile ? 'border-red-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.mobile && (
                          <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="interestedIn"
                        className="block text-sm font-medium text-[#142C49] mb-1.5"
                      >
                        Interested In
                      </label>
                      <select
                        id="interestedIn"
                        name="interestedIn"
                        value={form.interestedIn}
                        onChange={(e) => handleChange('interestedIn', e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm text-[#142C49] bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1769AA]"
                      >
                        {INTEREST_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-[#142C49] mb-1.5"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={form.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                        placeholder="Share your operational goals, team size, or integration requirements..."
                        className={`w-full px-3.5 py-2.5 text-sm text-[#142C49] bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1769AA] ${
                          errors.description ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.description && (
                        <p className="mt-1 text-xs text-red-600">{errors.description}</p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1769AA] hover:bg-[#12568C] rounded-md transition-colors duration-150 cursor-pointer"
                      >
                        <Send className="w-4 h-4" aria-hidden="true" />
                        <span>Preview &amp; Submit Enquiry</span>
                      </button>

                      <a
                        href={buildWhatsAppUrl(formatEnquiryText(form))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors duration-150"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Notify via WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyDetails}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#142C49] bg-[#EAF3FB] hover:bg-[#dcebfa] rounded-md transition-colors duration-150 cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-[#1769AA]" aria-hidden="true" />
                            <span>Copied Enquiry Details</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#1769AA]" aria-hidden="true" />
                            <span>Copy Enquiry Details</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                      This is a design preview. A live website will need a connected enquiry submission service.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
