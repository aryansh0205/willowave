"use client";

import { useState } from "react";
// import { EnrollmentFormData } from "../types";

export default function EnrollPage() {
  const [form, setForm] = useState({
    type: "creator",
    name: "",
    image: "",
    phone: "",
    email: "",
    link: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/enroll/${form.type}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            image: form.image,
            phone: Number(form.phone),
            email: form.email,
            link: form.link,
          }),
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      alert("✅ Successfully submitted");
      setForm({ ...form, name: "", image: "", phone: "", email: "", link: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-xl font-semibold mb-4">
        Enroll as Creator / Partner / Affiliator
      </h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="creator">Creator</option>
          <option value="partner">Partner</option>
          <option value="affiliator">Affiliator</option>
        </select>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="link"
          value={form.link}
          onChange={handleChange}
          placeholder="Website/Profile Link"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded w-full"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
