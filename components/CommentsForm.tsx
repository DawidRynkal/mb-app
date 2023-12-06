"use client";

import React, { useState, useEffect } from "react";
import { submitComment } from "../services";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { CustomButton, Loader } from ".";

interface DataTypes {
  name: string | null;
  email: string | null;
  comment?: string | null;
  storeData: boolean;
}

const CommentsForm = ({ slug }: { slug: string }) => {
  const router = useRouter();

  const [error, setError] = useState<boolean>(false);
  const [localStorage, setLocalStorage] = useState<Storage | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [formData, setFormData] = useState<DataTypes>({
    name: "",
    email: "",
    storeData: false,
  });
  const { mutate, isPending } = useMutation({
    mutationFn: submitComment,
    onSuccess: () => {
      if (!formData.storeData) {
        formData.name = "";
        formData.email = "";
      }
      formData.comment = "";
      setFormData((prevState) => ({
        ...prevState,
        ...formData,
      }));
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      router.refresh();
    },
    onError: () => {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    },
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);

    const storedName = window.localStorage.getItem("name");
    const storedEmail = window.localStorage.getItem("email");
    const storedStoreData = window.localStorage.getItem("storeData");

    const initalFormData = {
      name: storedName || "",
      email: storedEmail || "",
      storeData: storedStoreData === "true",
    };

    setFormData(initalFormData);
  }, []);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: (target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage?.setItem("name", name);
      localStorage?.setItem("email", email);
    } else {
      localStorage?.removeItem("name");
      localStorage?.removeItem("email");
    }

    mutate(commentObj);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={formData.comment || ""}
          onChange={onInputChange}
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={formData.name || ""}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          value={formData.email || ""}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            checked={formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData">
            {" "}
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are mandatory</p>
      )}
      <div className="mt-8 flex">
        <CustomButton
          btnText="Post Comment"
          handleClick={handlePostSubmission}
          additionalClass="min-w-[200px]"
        />
        {isPending && <Loader />}
        {showSuccessMessage ? (
          <span className="text-sm text-green-500 block flex items-center ml-[50px]">
            Comment added successfully!
          </span>
        ) : showErrorMessage ? (
          <span className="text-sm text-red-500 block flex items-center ml-[50px]">
            Error adding, try later..!
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
