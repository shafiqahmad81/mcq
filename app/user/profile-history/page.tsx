"use client";

import Image from "next/image";
import { useState } from "react";
import { Pencil } from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Shafiqul Islam",
    email: "shafiqul@email.com",
    phone: "01700000000",
    image: "/avatar.png",
  });

  const [form, setForm] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    image: profile.image,
  });

  const [preview, setPreview] = useState(profile.image);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // IMAGE CHANGE
  const handleImage = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setForm({ ...form, image: url });
    setPreview(url);
  };

  const validate = () => {
    let err: any = {};

    if (!form.name.trim()) err.name = "Name required";
    if (!/^01[0-9]{9}$/.test(form.phone))
      err.phone = "Invalid phone";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setProfile({
      name: form.name,
      email: form.email,
      phone: form.phone,
      image: form.image,
    });

    setIsEditing(false);
  };

  return (
    <div className="py-8 px-4 w-full max-w-2xl mx-auto">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Profile
      </h1>

      <div className="bg-white border rounded-2xl shadow-lg p-6">

        {/* IMAGE */}
        <div className="flex flex-col items-center">

          {!isEditing && (
            <div className="relative h-28 w-28 rounded-full overflow-hidden border-4 border-emerald-100">
              <Image
                src={profile.image}
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
          )}

          {isEditing && (
            <>
              <input
                type="file"
                accept="image/*"
                id="profileImage"
                className="hidden"
                onChange={handleImage}
              />

              <label
                htmlFor="profileImage"
                className="relative h-28 w-28 rounded-full overflow-hidden border-4 border-emerald-100 cursor-pointer group"
              >
                <Image
                  src={preview}
                  alt="profile"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs">
                  Change
                </div>
              </label>
            </>
          )}

          <h2 className="mt-4 text-xl font-semibold">
            {profile.name}
          </h2>

          <p className="text-sm text-gray-500">
            Student Account
          </p>
        </div>

        {/* VIEW MODE */}
        {!isEditing && (
          <div className="mt-8 space-y-3">

            <div className="bg-gray-50 px-4 py-3 rounded-xl">
              Name : {profile.name}
            </div>

            <div className="bg-gray-50 px-4 py-3 rounded-xl">
              Email : {profile.email}
            </div>

            <div className="bg-gray-50 px-4 py-3 rounded-xl">
              Phone : {profile.phone}
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600 cursor-pointer"
            >
              <Pencil size={16} />
              Edit Profile
            </button>
          </div>
        )}

        {/* EDIT MODE */}
        {isEditing && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-xl"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            {/* EMAIL READ ONLY */}
            <div className="w-full border px-4 py-3 rounded-xl bg-gray-100 text-gray-500">
              {profile.email} (cannot change)
            </div>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-xl"
              placeholder="Phone"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}

            {/* ACTIONS */}
            <div className="flex gap-3 mt-4">
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600"
              >
                Save
              </button>

              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="w-full bg-gray-200 py-3 rounded-xl"
              >
                Cancel
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}